/**
 * @name glossar.js
 * @author Jamie Smith
 * @description Scots glossar
 */

const GLOSSAR = (function () {

    const cfg = {
        search_delay: 550, // Number of ms to wait after last keystroke before doing a search. See functions timeoutStart() timeoutCancel()
        threshold_exact_match: 5, // If length of searched-for word is below this threshold, '=' will be prepended to the query so that only exact matches are returned (so searching for 'fart', for example, doesn't return 'aff' due to one of aff's triggers being 'farther away'). Also helps prevent long lists of irrelevant results when short words (I, na, ay) are searched for. Items in 'tr'/'hl' properties are unaffected and still show as configured
        variants: ['sc|sk', 'oo|ou', 'ee|ei', 'aa-|aw-', '-it|-et', '-ie|-y|-ae'], // Must denote variants via '|'
        threshold_variants: 4, // Minimum number of characters for processVariants() to be called. processVariants() makes less sense for words with few characters
        extended_cmd: '^', // See https://fusejs.io/examples.html#extended-search. I've only implemented commands that pertain to the start of the string
        lug: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 -0.3 24 22" stroke-width="1.8" stroke="#212529" fill="none" stroke-linecap="round" stroke-linejoin="round" height="19" width="20"><path d="M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3  a4.5 4.5 0 0 1 -6.8 1.4"></path><path d="M10 10a3 3 0 1 1 5 2.2"></path></svg>', // Credit: Paweł Kuna (@codecalm; tablericons.com)
        warning: '<svg class="block" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#ff0002" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>',
        btn_copy_after_text: 'That’s the URL copied tae the clipbuird'
    };
    const state = {
        word: '', // Value of search text box
        word_lc: '', // Value of search text box in lower case
        last_word_searched_for: '', // Set (post-search) by print() so we can check whether the input has changed on keyup
        query: '', // The query we're passing to Fuse.js
        timeout: null,
        highlight: 0, // Truthy if at least one word is highlighted in results set
        random: [], // Indices of which random entries have already been selected
        audio: null,
        title: document.title, // Change page title so the search for words are in the user's browser history
        audio_button: null,
        bypass_history_push: false, // Flag. When user navigates history we don't want to call historyPush() to add in item to the history. See popstate listener
        last_successful_search: '', // Helps with managing navigation through history
        nae_results: false, // Flag set to true when no results are returned
        // last_unsuccessful_user_query: '' // Value of user's search. Populated when there are no results
        btn_copy_initial_text: document.getElementById('btn-copy').innerText
    };

    let fuse;

    HTMLAudioElement.prototype.stop = function () {
        this.pause();
        this.currentTime = 0.0;
    };

    function init() {
        // // options{} defaults in comments. See also https://fusejs.io/api/options.html#advanced-options
        const options = {
            // shouldSort: true, // true
            // isCaseSensitive: false, // false
            includeScore: true, // false
            // findAllMatches: false, // false
            // includeMatches: false, // false
            threshold: 0.1, // 0.6 (key fuzzy search property: https://fusejs.io/api/options.html#fuzzy-matching-options)
            // location: 0, // 0
            distance: 250, // 100 // 'tak the maiter throu haunds' wasn't appearing with value set to 100
            // ignoreLocation: false, // false
            // minMatchCharLength: 1, // Using cfg.threshold_exact_match instead
            useExtendedSearch: true, // false https://fusejs.io/examples.html#extended-search. Requires fuse.min.js (i.e. non-basic)
            keys: [{ // Boost certain keys
                name: 'sc',
                weight: 10
            }, {
                name: 'en',
                weight: 8
            },
                'pl.sc',
                'tr',
                'pl.tr',
                'pt.sc',
                'pt.tr',
                'pp.sc',
                'pp.tr',
                'pt_pp.sc',
                'pt_pp.tr',
                'neg.sc',
                'neg.tr',
                'sc_alt',
                'pr'
            ]
        };

        fuse = new Fuse(GLOSSAR.dict, options);

        if (!Array.from) { // Auld browser check
            const results = document.getElementById('search');
            results.innerHTML = cfg.warning + '<div class="text-center text-bold">Sorry, your wab browser is ower auld tae rin this app.<br>Please dounlaid a newer ane.</div>';
            results.classList.add('show');

            return;
        }

        checkForUpdate();

        // Check for value on page load (after back button having navigated away from the app). In timeout because the browser doesn't fill in the input field right away. GET query will be available right away
        // setTimeout(function () {
        //     const val = document.getElementById('searchTextbox').value.trim();
        //     // const path = val.length ? `${state.initial_path}${cfg.user_query_path}/${val.toLowerCase()}` : '';

        //     // historyPush(val.toLowerCase(), val, path);

        //     if (val.trim().length)
        //         searchInit();
        // }, 150);

        addListeners();

        const word = checkPath(); // Has the user landed on the app with a word in the URL?

        if (word) {
            document.getElementById('searchTextbox').value = word;
            state.bypass_history_push = true;
            searchInit();
        }

        if ('ontouchstart' in window === false)
            document.getElementById('searchTextbox').focus();
    }

    // Returns any word in URL path
    function checkPath() {
        const path = location.pathname.split('/');
        const q = path[1] && path[1] === 'q' ? path[1] : null; // scots.app/q
        const word = path[2] && path[2].length ? path[2] : null; // scots.app/q/<word>

        if (q && word)
            return decodeURIComponent(word);
    }

    function addListeners() {
        document.getElementById('searchTextbox').addEventListener('keyup', searchInit);

        // Text field pseudo-focus state on clear button focus
        document.getElementById('clear-value').addEventListener('focus', function () {
            document.getElementById('searchTextbox').classList.toggle('form-control-pseudo-focus');
        });
        document.getElementById('clear-value').addEventListener('blur', function () {
            document.getElementById('searchTextbox').classList.toggle('form-control-pseudo-focus');
        });

        document.getElementById('random').addEventListener('click', function (e) {
            let num, word, btn = e.target;

            function getRandomIndex() {

                if (state.random.length === G.dict.length) { // If all words have been shown
                    state.random = [];
                }

                num = Math.floor(Math.random() * ((G.dict.length - 1) - 0 + 1) + 0);

                if (state.random.indexOf(num) > -1) { // Index already used?
                    getRandomIndex();
                }
            }

            getRandomIndex();

            word = G.dict[num].sc.join ? G.dict[num].sc[0] : G.dict[num].sc;

            btn.disabled = true;

            state.word = G.utils.replaceQo(word).toLowerCase();
            state.word_lc = state.word.toLowerCase();
            state.last_word_searched_for = '';
            document.getElementById('searchTextbox').value = word;
            document.getElementById('results').classList.add('show');

            let clear = document.getElementById('clear-value'); clear.classList.add('show');
            clear.disabled = false;

            // (We don't need to do variant check here because it's not based on user input)
            if (state.word.length < cfg.threshold_exact_match) {
                state.query = `=${state.word}`;
            } else
                state.query = cfg.extended_cmd + state.word;

            print(fuse.search(state.query), function () {
                state.random.push(num);
                btn.disabled = false;
            });
        });

        document.getElementById('clear-value').addEventListener('click', function () {

            let btn = this;
            let input = document.getElementById('searchTextbox');
            let results = document.getElementById('results');

            input.value = '';
            input.focus();
            btn.classList.remove('show');
            btn.disabled = true;
            results.classList.remove('show');

            document.title = state.title;

            hideCopyButton();
            setTimeout(reset, 250);

            // Cancel any state-level timeout
            if (state.timeout) {
                clearTimeout(state.timeout);
            }
        });

        document.getElementById('btn-copy').addEventListener('click', function () {
            const field = document.getElementById('field-copy');
            field.value = document.location.href;
            field.select();
            document.execCommand('Copy');

            this.innerText = cfg.btn_copy_after_text;
            this.focus();
        });

        // User navigates history
        window.addEventListener('popstate', function (e) {
            const search_box = document.getElementById('searchTextbox');
            const word = state.nae_results ? state.last_successful_search : checkPath(); // The word is normally available in 'state' property of the object that's returned to this callback function, but not when you navigate to the initially loaded state where the user has accessed the app via a URL with a word in the path. So here we get if from the URL path
            search_box.value = word ? word : ''; // Empty string for when user navigates all the way back to an initally loaded screen state that doesn't have a word in the URL path

            if (!state.nae_results)
                state.bypass_history_push = true;

            search_box.dispatchEvent(new Event('keyup'));
        });

        // Delegatit events
        document.addEventListener('click', function (e) {
            for (let target = e.target; target && target != this; target = target.parentNode) {

                if (target.matches('.play-audio')) {
                    if (!target.disabled) {
                        ended = el => {
                            el.target.removeEventListener('ended', ended);
                            state.audio_button.disabled = false;
                            state.audio = null;
                        };

                        if (state.audio) { // If audio is currently being played
                            state.audio.stop();
                            state.audio.dispatchEvent(new Event('ended')); // Prompt 'ended' event (see below)
                        }

                        state.audio_button = target;
                        state.audio_button.disabled = true;

                        state.audio = document.getElementById(state.audio_button.dataset.file);

                        state.audio.addEventListener('ended', ended);

                        state.audio.currentTime = 0;
                        state.audio.play();
                    }
                    e.preventDefault();
                    break;
                } else if (target.matches('.get-update')) {
                    location.reload();
                    e.preventDefault();
                    break;
                }
            }
        }, false);
    }

    // GLOSSAR.state getter
    function getState() {
        console.log(state);
    }

    function reset() {
        document.getElementById('results').innerHTML = '';
        document.title = state.title;
        state.last_word_searched_for = '';
        if (!state.bypass_history_push) {
            historyPush('', '', '/');
        } else
            state.bypass_history_push = false;
    }

    // Add state to browser history
    function historyPush(state, title, path) {
        console.log('historyPush()');
        history.pushState({ user_query: state }, title, path);
    }

    function searchInit(e) {
        let field = document.getElementById('searchTextbox');

        function goSearch() {

            if (state.word_lc === state.last_word_searched_for) return;

            // Stop any audio, important especially if the connection is slow and audio file ends up loading later and playing 'randomly'
            if (state.audio) {
                state.audio.stop();
            }

            if (state.word.length) {

                state.nae_results = false; // Reset flag

                if (state.word.length < cfg.threshold_exact_match && state.word.length < cfg.threshold_variants) {
                    state.query = `=${state.word}`; // Exact match
                } else if (state.word.length < cfg.threshold_exact_match &&
                    state.word.length >= cfg.threshold_variants) {
                    state.query = processVariants(state.word, cfg.variants, '='); // Look for any variants, passing in '=' (exact match) extended command override
                } else if (state.word.length >= cfg.threshold_variants && state.word.split(' ').length > 1) {
                    state.query = processVariants(state.word, cfg.variants, ''); // Multi-word search, passing in empty string so Fuse looks anywhere in the string
                } else if (state.word.length >= cfg.threshold_variants) {
                    state.query = processVariants(state.word, cfg.variants); // Search at start of word ('^'), the default
                } else
                    state.query = cfg.extended_cmd + state.word; // Search at start of word ('^'), but without looking for variants

                print(fuse.search(state.query));
                state.bypass_history_push = false;

            } else {
                hideCopyButton();
                reset();
            }
        }

        state.word = G.utils.replaceQo( // Replace ‘ and ’ with '
            field.value.replace(/(<([^>]+)>)/ig, ' ').trim() // Strip any HTML
        );
        state.word_lc = state.word.toLowerCase();

        const clear = document.getElementById('clear-value');
        clear.classList.add('show');

        if (field.value.length) {
            clear.disabled = false;
        } else
            clear.disabled = true;

        if (e && e.code === 'Enter' || state.bypass_history_push || !state.word.length) { // 'Enter' key should allow user to do the search right away, and not wait for the performance-enhancing timeout. Also run goSearch() if the user has moved a step in the history or there is no value in the search field
            goSearch();
        } else
            timeoutStart(goSearch);
    }

    // XHR check to see whether data file is newer than what is printed in the UI (XHR requests seem to be better at bypassing the cache)
    function checkForUpdate() {

        const request = new XMLHttpRequest();
        request.open('GET', './update-check.php?' + new Date().getTime(), true);
        request.setRequestHeader('Content-type', 'text/plain');

        request.onload = function () {
            if (this.status >= 200 && this.status < 400) { // Success
                const date_ui = document.querySelector('.last-updatit').dataset.updatit;

                if (parseInt(this.response) > parseInt(date_ui)) {
                    document.querySelector('.update-link').classList.remove('d-none');
                    console.log('Update available');
                } else
                    console.log('Data should be up tae date');
            } else
                console.error('XHR error', this.response);
        };

        request.onerror = function () {
            console.error('XHR connection error');
        };

        request.send();
    }

    function noResults() {
        const results = document.getElementById('results');
        results.innerHTML = `<div class="text-center no-results">Sorry, the’r nae results for <strong>${state.word}</strong></div>`;
        results.classList.add('show');
        state.nae_results = true;
    }

    /**
     * Process any variants based on user input
     * @param {String} inputs - The string the user types in the search field
     * @param {Array|String} test - The value(s) to test against, each item delimited with a '|'
     * @param {String} ext - Optional override of cfg.extended_cmd
     * @returns {String}
     */
    function processVariants(input, test, ext) {

        const ext_cmd = typeof (ext) === 'string' ? ext : cfg.extended_cmd; // Is there an override?
        const user_input = input.toLowerCase();
        const variants = [user_input]; // Add original user input as first array item. Items may be added in the proceeding logic. The array will then be converted to a string (with '|' separator) and passed to Fuse.js
        let variant;

        [].concat(test).forEach((test_group, i) => { // Loop through array of groups of variant strings, e.g. 'fae|frae|thrae', 'sc|sk' or '-ie|-y|-ae'
            if (test_group.indexOf('|') > -1) { // Each test must use | character
                let tests = test_group.toLowerCase().split('|');

                tests.forEach((t, i) => { // Each variant string, e.g 'frae', 'sc' or '-ie

                    if (t.charAt(0) === '-' && user_input.substring(user_input.length - t.length + 1) == t.substring(1, t.length)) { // Does this variant string affect word ending, e.g. '-ie'?

                        variants.forEach((s, i) => { // Each variant currently in [variants] array
                            let common_word_part = s.substring(0, s.length - t.length + 1); // Get common (leading) part of word, to which we'll append the other endings (t.length - 1 to account for the leading '-')

                            tests.forEach((s, i) => { // Loop through each variant string (e.g. '-ie') in this group again

                                variant = common_word_part + s.substring(1, s.length + 1);

                                if (variants.indexOf(variant) == -1) { // If this variant isn't already in [variants]
                                    variants.push(variant); // Add it
                                }
                            });
                        });
                    } else if (t.charAt(t.length - 1) === '-' && user_input.substring(0, t.length - 1) == t.substring(0, t.length - 1)) { // Does this variant string affect word beginnings, e.g. 'sk-'?

                        variants.forEach((s, i) => { // Each variant currently in [variants] array
                            common_word_part = s.substring(t.length - 1, s.length); // Get common (trailing) part of word, to which we'll prepend the other endings (t.length - 1 to account for the leading '-')

                            tests.forEach((s, i) => { // Loop through each variant string (e.g. '-ie') in this group again
                                variant = s.substring(0, s.length - 1) + common_word_part;

                                if (variants.indexOf(variant) == -1) { // If this variant isn't already in [variants]
                                    variants.push(variant); // Add it
                                }
                            });
                        });

                    } else { // Non-word-ending string. Standard string replace at any index in the user input

                        variants.forEach((v, i) => { // Each variant currently in [variants] array

                            if (v.indexOf(t) > -1) { // Does this variant contain a string that needs replaced?

                                tests.forEach((s, i) => { // (e.g. 'frae' or 'sc')
                                    if (s.toString() != t && variants.indexOf(v.replace(t, s)) == -1) {
                                        variants.push(v.replace(t, s));
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        if (variants.length > 1) return ext_cmd + variants.join('|' + ext_cmd); // Fuse.js OR syntax

        return ext_cmd + input;
    }

    function addAudio(s) {
        const buttons = []; // HTML

        [].concat(s).forEach(id => {
            let el = document.getElementById(id);

            if (!el) // If an <audio> element for this words has not already be added to DOM
                document.body.insertAdjacentHTML('afterbegin', `<audio id="${id}" class="audio d-none" src="/audio/${id.charAt(0)}/${id}.mp3" preload="auto"></audio>`); // Eik audio element

            buttons.push(`<button class="play-audio btn" data-file="${id}">${cfg.lug}</i></button>`); // Eik button 
        });

        return buttons.join('');
    }

    /**
     * Prints data on screen
     * @param {Object} r - Results returned by algorithm
     * @param {Function} callback
     */
    function print(r, callback) {

        if (r && r.length) {
            const results_div = document.getElementById('results');
            results_div.innerHTML = '';
            const results = [];

            r.forEach(result => {
                let item = result.item;
                results.push(item);

                let grammar = item.gr ? `<dt class="dt-grammar">Grammar</dt><dd class="grammar">${[].concat(item.gr).join('; ')}</dd>` : ''; // Grammar
                let sc_alt = item.sc_alt ? `<dt class="dt-sc-alt">Ither Scots spellins</dt><dd class="sc-alt">${[].concat(item.sc_alt).join(', ')}</dd>` : ''; // Alternative Scots spellings
                let en = item.en ? `<dt class="dt-en">English</dt><dd>${formatMultiple(item.en, ',', 'en')}</dd>` : ''; // English
                let pr = item.pr ? `<dt class="dt-pr">Pronunciation</dt><dd class="pr">(‘${[].concat(item.pr).join('’, ‘')}’)</dd> ` : ''; // Pronunciation
                let def = item.def ? `<dt class="dt-def">Definition</dt><dd>${formatMultiple(item.def, ';', 'def')}</dd>` : ''; // Definition
                let ex = item.ex ? `<dt class="dt-ex">Examples</dt><dd>${formatMultiple(item.ex, ';', 'ex')}</dd>` : ''; // Examples
                let ph = item.ph ? ' class="phrase"' : ''; // Phrases, idioms
                let inf = item.inf ? `<dt class="dt-inf">Information</dt><dd>${formatMultiple(item.inf, ';', 'inf')}</dd>` : ''; // Additional information
                let or = item.or ? `<dt class="dt-or">Origin</dt><dd>${formatOrigin(item.or)}</dd>` : ''; // Origin
                let hl_sc_alt = item.sc_alt ? [].concat(item.sc_alt) : []; // Make sure to highlight any alternative Scots words
                let audio = item.au ? `<dt class="dt-au">Audio</dt><dd class="audio">${addAudio(item.au)}</dd> ` : ''; // Audio
                heeze = item.heeze ? ` data-heeze="${item.heeze}"` : ''; // Should this get a heeze tae the tap of the list?

                /**
                 * Highlight based on trigger words
                 * by default; if not, use the
                 * specific highlight override words
                 */

                // Noun plural
                let pl_arr = item.pl && item.pl.sc ? [].concat(item.pl.sc) : []; // Scots plural

                if (pl_arr.length) {
                    if (item.pl && item.pl.hl) { // Highlighting override words
                        pl_arr = pl_arr.concat(item.pl.hl);
                    } else if (item.pl && item.pl.tr) // Standard triggers
                        pl_arr = pl_arr.concat(item.pl.tr);
                }

                // Past tense
                let pt_arr = item.pt && item.pt.sc ? [].concat(item.pt.sc) : [];

                if (pt_arr.length) {
                    if (item.pt && item.pt.hl) {
                        pt_arr = pt_arr.concat(item.pt.hl);
                    } else if (item.pt && item.pt.tr)
                        pt_arr = pt_arr.concat(item.pt.tr);
                }

                // Past participle
                let pp_arr = item.pp && item.pp.sc ? [].concat(item.pp.sc) : [];

                if (pp_arr.length) {
                    if (item.pp && item.pp.hl) {
                        pp_arr = pp_arr.concat(item.pp.hl);
                    } else if (item.pp && item.pp.tr)
                        pp_arr = pp_arr.concat(item.pp.tr);
                }

                // Where Scots past tense and past participles are the same
                let pt_pp_arr = item.pt_pp && item.pt_pp.sc ? [].concat(item.pt_pp.sc) : [];

                if (pt_pp_arr.length) {
                    if (item.pt_pp && item.pt_pp.hl) {
                        pt_pp_arr = pt_pp_arr.concat(item.pt_pp.hl);
                    } else if (item.pt_pp && item.pt_pp.tr)
                        pt_pp_arr = pt_pp_arr.concat(item.pt_pp.tr);
                }

                // (Modal) verb negative
                let neg_arr = item.neg && item.neg.sc ? [].concat(item.neg.sc) : [];

                if (neg_arr.length) {
                    if (item.neg && item.neg.hl) {
                        neg_arr = neg_arr.concat(item.neg.hl);
                    } else if (item.neg && item.neg.tr)
                        neg_arr = neg_arr.concat(item.neg.tr);
                }

                let hl_all;
                if (item.hl) { // Specific trigger highlight words
                    hl_all = [].concat(item.hl);
                } else if (item.tr) { // Standard triggers
                    hl_all = [].concat(item.tr);
                } else // No triggers of any kind
                    hl_all = [];

                // Add any alternative Scots words which should trigger highlighting
                if (hl_sc_alt.length) {
                    hl_all = hl_all.concat(hl_sc_alt);
                }
                // Add any phonetic spellings
                if (item.pr) {
                    hl_all = hl_all.concat(item.pr);
                }
                // Add any highlighting words
                let hl;
                if (hl_all.length) {
                    hl = ' data-hl="' + hl_all.filter(G.utils.onlyUnique).join(',') + '"';
                } else
                    hl = ''; // No trigger words

                audio_pl = item.pl && item.pl.au ? `<span class="audio">${addAudio(item.pl.au)}</span>` : ''; // Audio (plural)

                let pl = pl_arr.length ? `<dt class="dt-pl">Plural</dt><dd class="pl"><label>pl</label> <span data-hl="${pl_arr.join(',')}">${[].concat(item.pl.sc).join(', ')}</span>${audio_pl}</dd>` : ''; // Noun plurals

                let audio_pt = item.pt && item.pt.au ? `<span class="audio">${addAudio(item.pt.au)}</span>` : ''; // Audio (past tense)

                let pt = pt_arr.length ? `<dt class="dt-pt">Past tense</dt><dd class="pt"><label>pt</label> <span data-hl="${pt_arr.join(',')}">${[].concat(item.pt.sc).join(', ')}</span>${audio_pt}</dd>` : ''; // Past tense (simpler verbs)

                let audio_pp = item.pp && item.pp.au ? `<span class="audio">${addAudio(item.pp.au)}</span>` : ''; // Audio (past participle)

                let pp = pp_arr.length ? `<dt class="dt-pp">Past participle</dt><dd class="pp"><label>ptp</label> <span data-hl="${pp_arr.join(',')}">${[].concat(item.pp.sc).join(', ')}</span>${audio_pp}</dd>` : ''; // Past participle (simpler verbs)

                let audio_pt_pp = item.pt_pp && item.pt_pp.au ? `<span class="audio">${addAudio(item.pt_pp.au)}</span>` : ''; // Audio (matching past tense and past participle)

                let pt_pp = pt_pp_arr.length ? `<dt class="dt-pt_pp">Past tense and past participle</dt><dd class="pt-pp"><label>pt ptp</label> <span data-hl="${pt_pp_arr.join(',')}">${[].concat(item.pt_pp.sc).join(', ')}</span>${audio_pt_pp}</dd>` : ''; // Identical past tense and past participle (simpler verbs)

                audio_neg = item.neg && item.neg.au ? `<span class="audio">${addAudio(item.neg.au)}</span>` : ''; // Audio (negative)

                let neg = neg_arr.length ? `<dt class="dt-neg">Negative</dt><dd class="neg"><label>neg.</label> <span data-hl="${neg_arr.join(',')}">${[].concat(item.neg.sc).join(', ')}</span>${audio_neg}</dd>` : ''; // (Modal) verb negative

                results_div.innerHTML += `<dl${ph} data-score="${result.score}"${heeze}><dt class="dt-sc">Scots</dt><dd class="sc"${hl}>${G.utils.curlyQuotes([].concat(item.sc).join(', '))}</dd>
                <span class="audio-1">${audio}</span>
                ${sc_alt}
                <span class="audio-2">${audio}</span>
                ${pr}
                ${grammar}
                ${pl}
                ${pt}
                ${pp}
                ${pt_pp}
                ${neg}
                ${def}
                ${G.utils.curlyQuotes(en)}
                ${ex}
                ${inf}
                ${or}
                </dl>`;
            });

            hasHighlightedElement = (parent, find) => {
                let highlighted = false;
                const children = parent.querySelectorAll(find);

                for (let i = 0; i < children.length; i++) {
                    let classes = [...children[i].classList]; // Convert NodeList to array
                    if (classes.indexOf('hl') > -1) { // Element has 'hl' class
                        highlighted = true;
                        break;
                    }
                }

                return highlighted;
            };

            highlight(results, function () {
                if (state.highlight) {

                    const dl = document.querySelectorAll('#results > dl');

                    // Move highlighted entries to the top (doesn't look like we need this post-vanilla JS refactor)
                    for (let i = dl.length - 1; i >= 0; i--) {
                        let element = dl[i];

                        if (hasHighlightedElement(element, 'dd') || hasHighlightedElement(element, 'dd.pl > span') || hasHighlightedElement(element, 'dd.neg > span')) { // If any of the Scots words (e.g. headword, past tense) is highlighted
                            document.getElementById('results').insertAdjacentElement('afterbegin', element);
                        }
                    }

                    // > Maybe do a comparison a la PHP's similar_text() to push the Scots cognate to the top. E.g. if user searches for 'stupid', the Scots 'stupit' should be at the top (currently it's 'glaikit')

                    // Any items with 'heeze' data attribute that matches currently searched for word should be moved to the top. This works around issue where 'haud' and 'hae' have the same score when user searches for 'have'. We probably want to make sure 'hae, hiv' is at the top
                    Array.prototype.forEach.call(dl, function (el) {
                        if (el.dataset.heeze && el.dataset.heeze === state.word_lc)
                            document.getElementById('results').insertAdjacentElement('afterbegin', el);
                    });
                }

                document.getElementById('results').classList.add('show');

                if (typeof (callback) === 'function') {
                    callback();
                }
            });

            document.title = `${state.title}: ${state.word}`;
            state.last_successful_search = state.word;
            showCopyButton();

            if (!state.bypass_history_push)
                historyPush(state.word_lc, state.word, `/q/${state.word_lc}`);

        } else // !r.length (initial results)
            noResults();

        state.last_word_searched_for = state.word_lc;
    }

    function showCopyButton() {
        const btn_copy = document.getElementById('btn-copy');
        btn_copy.classList.add('show');
        btn_copy.classList.remove('hide');
        btn_copy.innerText = state.btn_copy_initial_text;
    }
    function hideCopyButton() {
        const btn_copy = document.getElementById('btn-copy');
        btn_copy.classList.remove('show');
        btn_copy.classList.add('hide');
    }

    function formatOrigin(obj) {
        const origin = [].concat(obj);
        const ul = [];

        origin.forEach(item => {
            if (item.join) { // If an array
                ul.push(`${item[0]} <span>${item[1]}</span>`);
            } else // If a string
                ul.push(item);
        });

        if (ul.length > 1) { // There are multiple (possible) origins

            return '<div class="or-container">Origin: <ul class="or"><li class="list-inline-item">' + ul.join('<i>;</i> </li><li class="list-inline-item">') + '</li></ul></div>';
        } else // If there is just one origin
            return `<div class="or-container">Origin: ${ul[0]}</div>`;
    }

    /**
     * Returns a single array of words (to cover multidemensional arrays) for the purposes of highlighting them in the UI
     * @param {Array|String} w
     * @returns {Array}
     */
    function makeSingleArray(w) {
        let words = [];

        // Redd word(s)
        if (w.join) { // Result is an array of values
            w.forEach(item => {
                [].concat(item).forEach(item => {
                    if (item.indexOf(', ') > -1) { // If multiple 'synomyms'
                        words = words.concat(item.split(', ')); // Split any 'synomym' meanings and add to 'words' array
                    } else
                        words = words.concat(item); // Add array to the 'words' array
                });
            });
        } else { // Result is single string
            words.push(w);
        }

        // Make lowercase
        words.forEach((word, i) => {
            words[i] = word.toLowerCase();
        });

        return words;
    }

    /**
     * For English words, definitions, examples etc. Creates an <ol> out of an array, or, if passed only a string, returns the original string
     * @param {Array} item
     * @param {String} separator - e.g. ';'
     * @param {String} cl - class, e.g. 'en'
     * @returns {String}
     */
    function formatMultiple(item, separator, cl) {
        const items = [].concat(item); // Make array in case we're passed a string
        const ol = [];

        items.forEach(item => {
            if (item && item.join) { // If an array
                ol.push(item.join(`${separator} `)); // Join array items into a single string
            } else if (item) { // If a string
                ol.push(item);
            } else
                console.warn(item, items);
        });

        if (ol.length > 1) { // There are multiple meanings
            return `<ol class="${cl}"><li>${ol.join('</li><li>')}</li></ol>`;
        } else // If there is just one meaning
            return `<div class="${cl}">${ol[0]}</div>`;
    }

    function highlight(r, callback) {

        let i = 0;
        const results = document.querySelector('#results');

        state.highlight = 0;

        function hielicht(el, items, other) {

            // E.g. ['^michty|^michtie|^michtae'] or ['=ony|=onie|=onae']
            function querySplit(q) {

                var cmd = q.match(/^\W+|\W+$/); // Get non-alphanumeic leading characters (Latin-characters only, i.e. doesn't take account of letters with diacritics)
                if (cmd) {
                    cmd = q.match(/^\W+|\W+$/)[0].trim();

                    if (cmd.length) { // If there is unix-style command leading character
                        q = q.slice(cmd.length, q.length + 1); // Remove it
                    }
                } else
                    cmd = '';

                return q.split('|' + cmd);
            }

            let words = items;
            const query = querySplit(state.query);

            if (el.dataset.hl) // Add any highlight words to the items array
                words = words.concat(el.dataset.hl.split(','));

            words.forEach(word => {
                if (
                    word &&
                    word.toLowerCase() === state.word_lc || // Direct match
                    query.indexOf(word.toLowerCase()) > -1 || // Match on one of any variants
                    (other && other.indexOf(state.word_lc) > -1) // Other values which should trigger highlighting
                ) {
                    el.classList.add('hl');
                    state.highlight++;
                    return false; // Exit loop
                } else if (!word)
                    console.warn(word);
            });
        }

        // Clear any highlights
        let elements = results.querySelectorAll('.sc, .pt span, .pp span');
        Array.prototype.forEach.call(elements, function (el) {
            el.classList.remove('hl');
        });

        // Add any new highlights
        elements = results.querySelectorAll('dl');
        Array.prototype.forEach.call(elements, function (dl) {
            let hl; // Trigger words to cause highlighting
            let el_hl; // Actual element to highlight (e.g. <span> within <dd>)

            // Head word(s)
            let el = dl.querySelector('.sc');
            let words = el.textContent.split(', ');
            hielicht(
                el, // UI element
                words, // Scots words
                r[i].en ? makeSingleArray(r[i].en) : null // Corresponding English words to cause highlighting
            );

            // Past tense
            // let classes = [...children[i].classList]
            el = dl.querySelector('.pt');
            if (el) {
                el_hl = el.querySelector('.pt span:not(.audio)');
                words = el_hl.textContent.split(', ');

                hl = r[i].pt && r[i].pt.hl ? makeSingleArray(r[i].pt.hl) : null; // Highlight overrides

                hl = !hl && r[i].pt && r[i].pt.tr ? makeSingleArray(r[i].pt.tr) : hl; // No highlight overrides

                hielicht(
                    el_hl,
                    words, // Scots words
                    hl // Other words to cause highlighting
                );
            }

            // Past participle
            el = dl.querySelector('.pp');
            if (el) {
                el_hl = el.querySelector('.pp span:not(.audio)');
                words = el_hl.textContent.split(', ');

                hl = r[i].pp && r[i].pp.hl ? makeSingleArray(r[i].pp.hl) : null; // Highlight overrides

                hl = !hl && r[i].pp && r[i].pp.tr ? makeSingleArray(r[i].pp.tr) : hl; // No highlight overrides

                hielicht(
                    el_hl,
                    words,
                    hl
                );
            }

            // Identical past tense and past participle
            el = dl.querySelector('.pt-pp');
            if (el) {
                el_hl = el.querySelector('.pt-pp span:not(.audio)');
                words = el_hl.textContent.split(', ');

                hl = r[i].pt_pp && r[i].pt_pp.hl ? makeSingleArray(r[i].pt_pp.hl) : null;

                hl = !hl && r[i].pt_pp && r[i].pt_pp.tr ? makeSingleArray(r[i].pt_pp.tr) : hl;

                hielicht(
                    el_hl,
                    words,
                    hl
                );
            }

            // Negative
            el = dl.querySelector('.neg');
            if (el) {
                el_hl = el.querySelector('.neg span:not(.audio)');
                words = el_hl.textContent.split(', ');

                hl = r[i].neg && r[i].neg.hl ? makeSingleArray(r[i].neg.hl) : null;

                hl = !hl && r[i].neg && r[i].neg.tr ? makeSingleArray(r[i].neg.tr) : hl;

                hielicht(
                    el_hl,
                    words,
                    hl
                );
            }

            // Plurals
            el = dl.querySelector('.pl');
            if (el) {
                el_hl = el.querySelector('.pl span:not(.audio)');
                words = el_hl.textContent.split(', ');

                hl = r[i].pl && r[i].pl.hl ? makeSingleArray(r[i].pl.hl) : null;

                hl = !hl && r[i].pl && r[i].pl.tr ? makeSingleArray(r[i].pl.tr) : hl;

                hielicht(
                    el_hl,
                    words,
                    hl
                );
            }

            i++;
        });

        callback();
    }

    function timeoutStart(callback) {

        function start() {
            state.timeout = setTimeout(callback, cfg.search_delay);
        }

        if (!state.timeout) { // If there is no timeout currently running
            start();
        } else // If there's a timeout in place already
            clearTimeout(state.timeout); // Cancel timeout
        start(); // Start a new one
    }

    return {
        init: init,
        getState: getState,
        state: state // dev
    };

}());
