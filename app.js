/**
 * @name glossar.js
 * @author Jamie Smith
 * @description Scots glossar
 */

var GLOSSAR = (function() {

    var cfg = {
            search_delay: 500, // Number of ms to wait after last keystroke before doing a search. See functions timeoutStart() timeoutCancel()
            threshold_non_hl: 5, // The minimum character length at which non-exact matches (i.e. those that aren't highlighted) will be shown. This is to prevent long lists of irrelevant results when short words (I, na, ay) are searched for. Item in 'tr'/'hl' properties are unaffected and still show as configured
            variants: ['frae|fae|thrae', '-ie|-y|-ae'] // Must denote variants via '|'
        },
        state = {
            word: '', // Value of search text box
            word_lc: '', // Value of search text box in lower case
            query: '', // The query we're passing to Fuse.js
            timeout: null,
            highlight: 0, // True if at least one word is highlighted in results set
            random: [], // Indices of which random entries have already been selected
            audio: null,
            $audio_button: null
        },
        fuse;

    HTMLAudioElement.prototype.stop = function() {
        this.pause();
        this.currentTime = 0.0;
    }

    function init() {
        // // options{} defaults in comments. See also https://fusejs.io/api/options.html#advanced-options
        const options = {
            // shouldSort: true, // true
            // isCaseSensitive: false, // false
            // includeScore: false, // false
            // findAllMatches: false, // false
            // includeMatches: false, // false
            threshold: 0.1, // 0.6 (key fuzzy search property: https://fusejs.io/api/options.html#fuzzy-matching-options)
            // location: 0, // 0
            // distance: 100, // 100
            // ignoreLocation: false, // false
            // minMatchCharLength: 1, // Using cfg.threshold_non_hl instead
            useExtendedSearch: true, // false https://fusejs.io/examples.html#extended-search. Requires fuse.min.js (i.e. non-basic)
            keys: [{ // Boost certain keys
                    name: 'sc',
                    weight: 10
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
                'pr',
                'en'
            ]
        };

        const fuse = new Fuse(GLOSSAR.dict, options);

        var t;

        checkForUpdate();

        function searchInit(e) {
            var t,
                $field = $('#searchTextbox');

            function goSearch() {

                // Stop any audio, important especially if the connection is slow and audio file ends up loading later and playing 'randomly'
                if (state.audio) {
                    state.audio.stop();
                }

                state.query = processVariants(state.word, cfg.variants);

                if (state.word.length) {
                    $('#results').removeClass('show');
                    print(fuse.search(state.query));
                } else {
                    $('#results').removeClass('show');
                    t = setTimeout(function() {
                        $('#results').html('');
                    }, 250);
                }
            }

            state.word = G.utils.replaceQo( // Replace ‘ and ’ with '
                $.trim(
                    $field.val().replace(/(<([^>]+)>)/ig, ' ') // Strip any HTML
                )
            );
            state.word_lc = state.word.toLowerCase();

            if ($field.val().length) {
                $('#clear-value').addClass('show').prop('disabled', false);
            } else {
                $('#clear-value').removeClass('show').prop('disabled', true);
            }

            if (e && e.code === 'Enter') { // 'Enter' key should allow user to do the search right away, and not wait for the performance-enhancing timeout
                goSearch();
            } else {
                timeoutStart(goSearch);
            }
        }

        // Check for value on page load (after back button or not-yet-implemented GET variable). In timeout because the browser doesn't fill in the input field right away. GET query will be available right away
        t = setTimeout(function() {
            if ($.trim($('#searchTextbox').val()).length) {
                searchInit();
            }
        }, 500);

        if ('ontouchstart' in window === false) {
            $('#searchTextbox').focus();
        }

        $('#searchTextbox').on('keyup', searchInit);

        // Text field pseudo-focus state on clear button focus
        $('#clear-value').on('focus', function() {
            $('#searchTextbox').addClass('form-control-pseudo-focus');
        });

        $('#clear-value').on('blur', function() {
            $('#searchTextbox').removeClass('form-control-pseudo-focus');
        });

        $('#random').click(function() {

            var num, word, $btn = $(this);

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

            $btn.prop('disabled', true);

            state.word = G.utils.replaceQo(word).toLowerCase();
            state.word_lc = state.word.toLowerCase();
            $('#searchTextbox').val(word);
            $('#results').removeClass('show');
            $('#clear-value').addClass('show').prop('disabled', false);
            print(fuse.search(state.word), function() {
                state.random.push(num);
                $btn.prop('disabled', false);
            });
        });

        $('#clear-value').click(function() {
            $(this).prev('input').val('').focus();
            $(this).removeClass('show').prop('disabled', true);
            $('#results').removeClass('show');

            var t = setTimeout(function() {
                $('#results').html('');
            }, 250);

            // Cancel any timeout
            if (state.timeout) {
                clearTimeout(state.timeout);
            }
        });

        $(document).on('click', '.play-audio', function(e) {

            if (!$(this).prop('disabled')) {
                if (state.audio) { // If audio is currently being played
                    state.audio.stop();
                    state.audio.dispatchEvent(new Event('ended')); // Prompt 'ended' event (see below)
                }

                state.$audio_button = $(this);
                state.$audio_button.prop('disabled', true);

                state.audio = document.getElementById(state.$audio_button.data('file'));

                $(state.audio).bind('ended', function() {
                    $(this).unbind('ended');
                    state.$audio_button.prop('disabled', false);
                    state.audio = null;
                });

                state.audio.play();
            }

            e.preventDefault();
        });

        $(document).on('click', '.get-update', function() {
            location.reload();
        });
    }

    // XHR check to see whether data file is newer than what is printed in the UI (XHR requests seem to be better at bypassing the cache)
    function checkForUpdate() {
        $.ajax({
            type: 'GET',
            url: './update-check.php',
            dataType: 'text',
            cache: false,
            success: function(d) {
                var date_ui = parseInt(
                    $('.last-updatit').data('updatit')
                );

                if (parseInt(d) > date_ui) {
                    $('.update-link').removeClass('d-none');
                    console.log('Update available');
                } else {
                    console.log('Data should be up tae date');
                }
            },
            error: function(xhr, type) {
                console.log('Error when checking for update');
                console.log(xhr);
                console.log(type);
            }
        });
    }

    function noResults() {
        $('#results').html('<div class="text-center no-results">Sorry, the’r nae results for <strong>' + state.word + '</strong></div>');
        $('#results').addClass('show');
    }

    /**
     * Checks whether the currently searched for word matches any of the items' 'tr' property
     * @param {Array} items - Array of objects
     * @returns {Boolean}
     */
    function checkForTriggers(items) {
        var trigger_found = false;

        $.each(items, function() {
            if (this.tr && this.tr.indexOf(state.word_lc) > -1) {
                trigger_found = true;
                return;
            }
        });

        return trigger_found;
    }

    /**
     * Process any variants based on user input
     * @param {String} inputs - The string the user types in the search field
     * @param {Array|String} test - The value(s) to test against, each item delimited with a '|'
     * @returns {String}
     */
    function processVariants(input, test) {
        var user_input = input.toLowerCase(),
            variants = [user_input], // Add original user input as first array item
            tests, common_word_part, variant, replace_word, match_found;

        $.each([].concat(test), function() { // Each variant

            if (this.indexOf('|') > -1) { // Each test must use | character
                tests = this.toLowerCase().split('|');

                console.log('*** About to loop through:');
                console.log(tests);

                $.each(tests, function() {
                    console.log('.');
                    if (this.charAt(0) === '-' && user_input.substring(user_input.length - this.length + 1) == this.substring(1, this.length)) { // This test matches ending of user input

                        console.log('Ending match');

                        common_word_part = user_input.substring(0, user_input.length - this.length + 1); // Get common (leading) part of word, to which we'll append the other endings (this.length - 1 to account for the leading '-')

                        $.each(tests, function() { // Loop through tests again

                            variant = common_word_part + this.substring(1, this.length);

                            if (variants.indexOf(variant) == -1) { // If this variant isn't already in 'variants' array
                                variants.push(variant);
                            }
                        });

                        return false; // Exit tests loop for this variant
                    } else {

                        match_found = false; // Flag

                        $.each(tests, function() {
                            if (user_input.indexOf(this) > -1) { // Word that needs replaced found

                                match_found = true;
                                replace_word = this;

                                $.each(tests, function() {

                                    if (this.toString() != replace_word) {
                                        variants.push(user_input.replace(replace_word, this));
                                    }
                                });
                            }
                        });

                        if (match_found) return false; // Exit tests loop for this variant
                    }
                });
            }
        });

        if (variants.length > 1) return variants.join('|'); // Fuse.js OR syntax

        return input;
    }

    function addAudio(s) {
        var buttons = []; // HTML

        $.each([].concat(s), function() {
            if (!$('#' + this).length) {
                $('body').prepend('<audio id="' + this + '" class="audio d-none" src="./audio/' + this.charAt(0) + '/' + this + '.mp3" preload="auto"></audio>'); // Eik audio element
            }
            buttons.push('<button class="play-audio btn bg-transparent" data-file="' + this + '"><i class="demo-icon icon-sound"></i></button>'); // Eik button
        });

        return buttons.join('');
    }

    /**
     * Prints data on screen
     * @param {Object} r - Results returned by algorithm
     * @param {Function} callback
     */
    function print(r, callback) {
        var grammar, sc_alt, hl_sc_alt, audio, item,
            hl, hl_all, $dl, def, ex, inf, en, ph, pr, pt, pt_arr, pp, pp_arr, pt_pp, pt_pp_arr, neg, pl, pl_arr, or,
            results_filtered = [];

        if (r && r.length) {
            $('#results').html('');

            $.each(r, function() {

                item = this.item;

                if (
                    state.word.length >= cfg.threshold_non_hl || // Length of word user has input is equal to or greater than threshold
                    arrayToLowerCase([].concat(item.sc)).indexOf(state.word_lc) > -1 || // Exact match (Scots)
                    arrayToLowerCase([].concat(item.sc_alt)).indexOf(state.word_lc) > -1 || // Alternative Scots spelling
                    arrayToLowerCase([].concat(item.en)).indexOf(state.word_lc) > -1 || // Exact match (English)
                    (item.tr && arrayToLowerCase([].concat(item.tr)).indexOf(state.word_lc) > -1) || // Length of this word (returned by results) is below threshold but user input is a trigger for this word
                    (item.pr && arrayToLowerCase([].concat(item.pr)).indexOf(state.word_lc) > -1) || // As per previous but pertains to pronunciation
                    (item.pl && item.pl.sc && arrayToLowerCase([].concat(item.pl.sc)).indexOf(state.word_lc) > -1) || // Scots plural
                    (item.pl && item.pl.tr && arrayToLowerCase([].concat(item.pl.tr)).indexOf(state.word_lc) > -1) || // Plural trigger
                    (item.pt && item.pt.sc && arrayToLowerCase([].concat(item.pt.sc)).indexOf(state.word_lc) > -1) || // Past tense Scots
                    (item.pt && item.pt.tr && arrayToLowerCase([].concat(item.pt.tr)).indexOf(state.word_lc) > -1) || // Past tense trigger
                    (item.pp && item.pp.sc && arrayToLowerCase([].concat(item.pp.sc)).indexOf(state.word_lc) > -1) || // Past participle Scots
                    (item.pp && item.pp.tr && arrayToLowerCase([].concat(item.pp.tr)).indexOf(state.word_lc) > -1) || // Past participle trigger
                    (item.pt_pp && item.pt_pp.sc && arrayToLowerCase([].concat(item.pt_pp.sc)).indexOf(state.word_lc) > -1) || // Past tense/participle (when they're the same) Scots
                    (item.pt_pp && item.pt_pp.tr && arrayToLowerCase([].concat(item.pt_pp.tr)).indexOf(state.word_lc) > -1) // Past tense/participle (when they're the same) trigger
                ) {
                    results_filtered.push(item);

                    grammar = item.gr ? '<dt class="dt-grammar">Grammar</dt><dd class="grammar">' + [].concat(item.gr).join('; ') + '</dd>' : ''; // Grammar
                    sc_alt = item.sc_alt ? '<dt class="dt-sc-alt">Ither Scots spellins</dt><dd class="sc-alt">' + [].concat(item.sc_alt).join(' ') + '</dd>' : ''; // Alternative Scots spellings
                    en = item.en ? '<dt class="dt-en">English</dt><dd>' + formatMultiple(item.en, ';', 'en') + '</dd>' : ''; // English
                    pr = item.pr ? '<dt class="dt-pr">Pronunciation</dt><dd class="pr">(‘' + [].concat(item.pr).join('’, ‘') + '’)</dd> ' : ''; // Pronunciation
                    def = item.def ? '<dt class="dt-def">Definition</dt><dd>' + formatMultiple(item.def, ';', 'def') + '</dd>' : ''; // Definition
                    ex = item.ex ? '<dt class="dt-ex">Examples</dt><dd>' + formatMultiple(item.ex, ';', 'ex') + '</dd>' : ''; // Examples
                    ph = item.ph ? ' class="phrase"' : ''; // Phrases, idioms
                    inf = item.inf ? '<dt class="dt-inf">Information</dt><dd>' + formatMultiple(item.inf, ';', 'inf') + '</dd>' : ''; // Additional information
                    or = item.or ? '<dt class="dt-or">Origin</dt><dd>' + formatOrigin(item.or) + '</dd>' : ''; // Origin
                    hl_sc_alt = item.sc_alt ? [].concat(item.sc_alt) : []; // Make sure to highlight any alternative Scots words
                    audio = item.au ? '<dt class="dt-au">Audio</dt><dd class="audio">' + addAudio(item.au) + '</dd> ' : ''; // Audio

                    /**
                     * Highlight based on trigger words
                     * by default; if not, use the
                     * specific highlight override words
                     */

                    // Past tense
                    pt_arr = item.pt && item.pt.sc ? [].concat(item.pt.sc) : []; // Scots past tense

                    if (pt_arr.length) {
                        if (item.pt && item.pt.hl) { // Highlighting override words
                            pt_arr = pt_arr.concat(item.pt.hl);
                        } else if (item.pt && item.pt.tr) { // Standard triggers
                            pt_arr = pt_arr.concat(item.pt.tr)
                        }
                    }

                    // Past participle
                    pp_arr = item.pp && item.pp.sc ? [].concat(item.pp.sc) : [];

                    if (pp_arr.length) {
                        if (item.pp && item.pp.hl) {
                            pp_arr = pp_arr.concat(item.pp.hl);
                        } else if (item.pp && item.pp.tr) {
                            pp_arr = pp_arr.concat(item.pp.tr)
                        }
                    }

                    // Where Scots past tense and past participles are the same
                    pt_pp_arr = item.pt_pp && item.pt_pp.sc ? [].concat(item.pt_pp.sc) : [];

                    if (pt_pp_arr.length) {
                        if (item.pt_pp && item.pt_pp.hl) {
                            pt_pp_arr = pt_pp_arr.concat(item.pt_pp.hl);
                        } else if (item.pt_pp && item.pt_pp.tr) {
                            pt_pp_arr = pt_pp_arr.concat(item.pt_pp.tr)
                        }
                    }

                    neg = item.neg ? '<dt class="dt-neg">Negative</dt><dd class="neg"><label>neg.</label> <span>' + [].concat(item.neg.sc).join(', ') + '</span></dd>' : ''; // Any Scots negative

                    // Noun plurals
                    pl_arr = item.pl && item.pl.sc ? [].concat(item.pl.sc) : [];
                    pl_arr = item.pl && item.pl.tr ? pl_arr.concat(item.pl.tr) : pl_arr; // Triggers

                    if (item.hl) { // Specific trigger highlight words
                        hl_all = [].concat(item.hl);
                    } else if (item.tr) { // Standard triggers
                        hl_all = [].concat(item.tr);
                    } else { // No triggers of any kind
                        hl_all = [];
                    }
                    // Add any alternative Scots words which should trigger highlighting
                    if (hl_sc_alt.length) {
                        hl_all = hl_all.concat(hl_sc_alt);
                    }
                    // Add any phonetic spellings
                    if (item.pr) {
                        hl_all = hl_all.concat(item.pr);
                    }
                    // Add any highlighting words
                    if (hl_all.length) {
                        hl = ' data-hl="' + hl_all.filter(G.utils.onlyUnique).join(',') + '"';
                    } else {
                        hl = ''; // No trigger words
                    }

                    pt = pt_arr.length ? '<dt class="dt-pt">Past tense</dt><dd class="pt"><label>pt</label> <span data-hl="' + pt_arr.join(',') + '">' + [].concat(item.pt.sc).join(', ') + '</span></dd>' : ''; // Past tense (simpler verbs)

                    pp = pp_arr.length ? '<dt class="dt-pp">Past participle</dt><dd class="pp"><label>ptp</label> <span data-hl="' + pp_arr.join(',') + '">' + [].concat(item.pp.sc).join(', ') + '</span></dd>' : ''; // Past participle (simpler verbs)

                    pt_pp = pt_pp_arr.length ? '<dt class="dt-pt_pp">Past tense and past participle</dt><dd class="pt-pp"><label>pt ptp</label> <span data-hl="' + pt_pp_arr.join(',') + '">' + [].concat(item.pt_pp.sc).join(', ') + '</span></dd>' : ''; // Identical past tense and past participle (simpler verbs)

                    pl = pl_arr.length ? '<dt class="dt-pl">Plural</dt><dd class="pl"><label>pl</label> <span data-hl="' + pl_arr.join(',') + '">' + [].concat(item.pl.sc).join(', ') + '</span></dd>' : ''; // Noun plurals

                    $('#results').append('<dl' + ph + '><dt class="dt-sc">Scots</dt><dd class="sc"' + hl + '>' + G.utils.curlyQuotes([].concat(item.sc).join(', ')) + '</dd> ' +
                        sc_alt +
                        audio +
                        pr +
                        grammar +
                        pl +
                        pt +
                        pp +
                        pt_pp +
                        neg +
                        def +
                        G.utils.curlyQuotes(en) +
                        ex +
                        inf +
                        or +
                        '</dl>');
                }
            });

            if (results_filtered.length) { // If there is at least one relevant result amang returned results
                highlight(results_filtered, function() {
                    if (state.highlight) {
                        $($('#results > dl').get().reverse()).each(function() { // Move highlighted entries to the top
                            $dl = $(this);
                            if ($dl.find('dd').hasClass('hl')) { // If any of the Scots words (e.g. headword, past tense) is highlighted
                                $dl.parent().prepend($dl);
                            }
                        });
                    }

                    if (!state.highlight && !checkForTriggers(results_filtered) && state.word.length < cfg.threshold_non_hl) { // If nothing in the UI has been highlighted, the word search for does not match any non-highlighting trigger, and the length of user input is below the threshold
                        noResults();
                    } else {
                        $('#results').addClass('show');
                    }

                    if (typeof(callback) === 'function') {
                        callback();
                    }
                });
            } else { // !results_filtered.length (after we've filtered the initial results returned by algorithm)
                noResults();
            }
        } else { // !r.length (initial results)
            noResults();
        }
    }

    function formatOrigin(obj) {
        var origin = [].concat(obj),
            ul = [];

        $.each(origin, function(i) {
            if (this.join) { // If an array
                ul.push(this[0] + ' <span>' + this[1] + '</span>');
            } else { // If a string
                ul.push(this);
            }
        });

        if (ul.length > 1) { // There are multiple (possible) origins

            return '<div class="or-container">Origin: <ul class="or"><li class="list-inline-item">' + ul.join('<i>;</i> </li><li class="list-inline-item">') + '</li></ul></div>';
        } else { // If there is just one origin
            return '<div class="or-container">Origin: ' + ul[0] + '</div>';
        }
    }

    /**
     * Returns a single array of words (to cover multidemensional arrays) for the purposes of highlighting them in the UI
     * @param {Array|String} w
     * @returns {Array}
     */
    function makeSingleArray(w) {
        var words = [];

        // Redd word(s)
        if (w.join) { // Result is an array of values
            $.each(w, function(i) {
                $.each([].concat(this), function() {
                    if (this.indexOf(', ') > -1) { // If multiple 'synomyms'
                        words = words.concat(this.split(', ')); // Split any 'synomym' meanings and add to 'words' array
                    } else {
                        words = words.concat(this); // Add array to the 'words' array
                    }
                });
            });
        } else { // Result is single string
            words.push(w);
        }

        // Make lowercase
        $.each(words, function(i) {
            words[i] = this.toLowerCase();
        });

        return words;
    }

    /**
     * For English words, definitions, examples etc. Creates an <ol> out of an array, or, if passed only a string, returns the original string
     * @param {Array} word
     * @param {String} separator - e.g. ';'
     * @param {String} cl - class, e.g. 'en'
     * @returns {String}
     */
    function formatMultiple(word, separator, cl) {
        var words = [].concat(word), // Make array in case we're passed a string
            ol = [];

        $.each(words, function() {
            if (this.join) { // If an array
                ol.push(this.join(separator + ' ')); // Join array items into a single string
            } else { // If a string
                ol.push(this);
            }
        });

        if (ol.length > 1) { // There are multiple meanings
            return '<ol class="' + cl + '"><li>' + ol.join('</li><li>') + '</li></ol>';
        } else { // If there is just one meaning
            return '<div class="' + cl + '">' + ol[0] + '</div>';
        }
    }

    function highlight(r, callback) {
        var i = r.length - 1;

        state.highlight = 0;

        function hielicht($el, items, other) {
            if ($el.data('hl')) { // Add any highlight words to the items array
                items = items.concat($el.data('hl').split(','));
            }
            $.each(items, function() {
                if (this &&
                    (
                        this.toLowerCase() === state.word_lc || // Direct match
                        state.query.split('|').indexOf(this.toLowerCase()) > -1 || // Match on one of any variants
                        (other && other.indexOf(state.word_lc) > -1) // Other values which should trigger highlighting
                    )
                ) {
                    $el.addClass('hl');
                    state.highlight = state.highlight + 1;
                    return false; // Exit loop
                }
            });
        }

        // Clear any highlights
        $('.sc, .pt span, .pp span', '#results').each(function() {
            $(this).removeClass('hl');
        });

        // Add any new highlights
        $($('#results > dl').get().reverse()).each(function() {

            var hl; // Trigger words to cause highlighting

            // Head word(s)
            items = $('.sc', this).text().split(', ');
            hielicht(
                $('.sc', this), // UI element
                items, // Scots words
                r[i].en ? makeSingleArray(r[i].en) : null // Corresponding English words to cause highlighting
            );

            // Past tense
            if ($('.pt', this).length) {
                items = $('.pt span', this).text().split(', ');

                hl = r[i].pt && r[i].pt.hl ? makeSingleArray(r[i].pt.hl) : null; // Highlight overrides

                hl = !hl && r[i].pt && r[i].pt.tr ? makeSingleArray(r[i].pt.tr) : hl; // No highlight overrides

                hielicht(
                    $('.pt span', this),
                    items, // Scots words
                    hl // Other words to cause highlighting
                );
            }

            // Past participle
            if ($('.pp', this).length) {
                items = $('.pp span', this).text().split(', ');

                hl = r[i].pp && r[i].pp.hl ? makeSingleArray(r[i].pp.hl) : null; // Highlight overrides

                hl = !hl && r[i].pp && r[i].pp.tr ? makeSingleArray(r[i].pp.tr) : hl; // No highlight overrides

                hielicht(
                    $('.pp span', this),
                    items,
                    hl
                );
            }

            // Identical past tense and past participle
            if ($('.pt-pp', this).length) {
                items = $('.pt-pp span', this).text().split(', ');

                hl = r[i].pt_pp && r[i].pt_pp.hl ? makeSingleArray(r[i].pt_pp.hl) : null;

                hl = !hl && r[i].pt_pp && r[i].pt_pp.tr ? makeSingleArray(r[i].pt_pp.tr) : hl;

                hielicht(
                    $('.pt-pp span', this),
                    items,
                    hl
                );
            }

            // Negative
            if ($('.neg', this).length) {
                items = $('.neg span', this).text().split(', ');
                hielicht(
                    $('.neg span', this),
                    items,
                    r[i].neg && r[i].neg.tr ? makeSingleArray(r[i].neg.tr) : null
                );
            }

            // Plurals
            if ($('.pl', this).length) {
                items = $('.pl span', this).text().split(', ');
                hielicht(
                    $('.pl span', this),
                    items,
                    r[i].pl && r[i].pl.tr ? makeSingleArray(r[i].pl.tr) : null
                );
            }

            i = i - 1;
        });

        callback();
    }

    function timeoutStart(callback) {

        function start() {
            state.timeout = setTimeout(callback, cfg.search_delay);
        }

        if (!state.timeout) { // If there is no timeout currently running
            start();
        } else { // If there's a timeout in place already
            clearTimeout(state.timeout); // Cancel timeout
            start(); // Start a new one
        }
    }

    // Consider using https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat. See also https://stackoverflow.com/a/27267762/4667710. Nae IE support
    function flattenArray(arr) {
        return arr.reduce(function(a, b) {
            if (Array.isArray(b)) {
                return a.concat(flattenArray(b))
            }
            return a.concat(b)
        }, []);
    }

    // Returns array where each item is in lower case.
    function arrayToLowerCase(arr) {
        var a = [];

        $.each(flattenArray(arr), function() {
            a.push(this.toString().toLowerCase());
        });

        return a;
    }

    return {
        init: init,
        state: state
    };

}());
