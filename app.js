/**
 * @name glossar.js
 * @author Jamie Smith
 * @description Scots glossar
 */

var GLOSSAR = (function() {

    var cfg = {
            search_delay: 500, // Number of ms to wait after last keystroke before doing a search. See functions timeoutStart() timeoutCancel()
            threshold_non_hl: 4 // The minimum character length at which non-exact matches (i.e. those that aren't highlighted) will be shown. This is to prevent long lists of irrelevant results when short words (I, na, ay) are searched for
        },
        state = {
            word: '', // Value of search text box
            word_lc: '', // Value of search text box in lower case
            timeout: null,
            highlight: 0, // True if at least one word is highlighted in results set
            random: [], // Indexes of which random entries have already been selected
            audio: null,
            $audio_button: null
        },
        fuse;

        HTMLAudioElement.prototype.stop = function() {
            this.pause();
            this.currentTime = 0.0;
        }

    function init() {
        const options = {
                shouldSort: true,
                includeScore: false,
                findAllMatches: false,
                threshold: 0.05,
                location: 0,
                distance: 15,
                minMatchCharLength: 1,
                keys: [{
                    name: 'sc',
                    weight: 0.43
                }, {
                    name: 'pl.sc',
                    weight: 0.03
                }, {
                    name: 'pl.en',
                    weight: 0.02
                }, {
                    name: 'pl.tr',
                    weight: 0.02
                }, {
                    name: 'pt.sc',
                    weight: 0.05
                }, {
                    name: 'pt.tr',
                    weight: 0.005
                }, {
                    name: 'pp.sc',
                    weight: 0.01
                }, {
                    name: 'pp.tr',
                    weight: 0.01
                }, {
                    name: 'pt_pp.sc',
                    weight: 0.01
                }, {
                    name: 'pt_pp.tr',
                    weight: 0.005
                }, {
                    name: 'neg.sc',
                    weight: 0.03
                }, {
                    name: 'neg.tr',
                    weight: 0.03
                }, {
                    name: 'sc_alt',
                    weight: 0.05
                }, {
                    name: 'pr',
                    weight: 0.05
                }, {
                    name: 'en',
                    weight: 0.05
                }, {
                    name: 'tr',
                    weight: 0.2
                }]
            };

        const fuse = new Fuse(GLOSSAR.dict, options);

        var t;

        function searchInit(e) {
            var t,
                $field = $('#searchTextbox');

            function goSearch() {

                // Stop any audio, important especially if the connection is slow and audio file ends up loading later and playing 'randomly'
                if (state.audio) {
                    state.audio.stop();
                }

                if (state.word.length) {
                    $('#result').removeClass('show');
                    print(fuse.search(state.word));
                } else {
                    $('#result').removeClass('show');
                    t = setTimeout(function() {
                        $('#result').html('');
                    }, 100);
                }
            }

            state.word = G.utils.replaceQo( // Replace ‘ and ’ with '
                $.trim(
                    $field.val().replace(/(<([^>]+)>)/ig, ' ') // Strip any HTML
                )
            );
            state.word_lc = state.word.toLowerCase();

            if ($field.val().length) {
                $('#clear-value').addClass('show');
            } else {
                $('#clear-value').removeClass('show');
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
            $('#result').removeClass('show');
            $('#clear-value').addClass('show');
            print(fuse.search(state.word), function() {
                state.random.push(num);
                $btn.prop('disabled', false);
            });
        });

        $('#clear-value').click(function() {
            $(this).prev('input').val('').focus();
            $(this, '#result').removeClass('show');

            var t = setTimeout(function() {
                $('#result').html('');
            }, 100);

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
    }

    function noResults() {
        $('#result').html('<li class="text-center no-results">Sorry, the’r nae results for <strong>' + state.word + '</strong></li>');
        $('#result').addClass('show');
    }

    function addAudio(s) {
        var buttons = []; // HTML

        $.each([].concat(s), function() {
            if (!$('#' + this).length) {
                $('body').prepend('<audio id="' + this + '" class="audio d-none" src="./audio/' + this.charAt(0) + '/' + this + '.mp3" preload="none"></audio>'); // Eik audio element
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
            hl, hl_all, $li, def, ex, inf, en, ph, pr, pt, pt_arr, pp, pp_arr, pt_pp, pt_pp_arr, neg, pl, pl_arr, or,
            results_filtered = [];

        if (r && r.length) {
            $('#result').html('');

            $.each(r, function() {

                item = this.item;

                if (
                    state.word.length >= cfg.threshold_non_hl || // Length of word user has input is equal to or greater than threshold
                    arrayToLowerCase([].concat(item.sc)).indexOf(state.word_lc) > -1 || // Exact match (Scots)
                    arrayToLowerCase([].concat(item.en)).indexOf(state.word_lc) > -1 || // Exact match (English)
                    (item.tr && arrayToLowerCase([].concat(item.tr)).indexOf(state.word_lc) > -1) || // Length of this word (returned by results) is below threshold but user input is a trigger for this word
                    item.pr && arrayToLowerCase([].concat(item.pr)).indexOf(state.word_lc) > -1 // Same as above but pertains to pronunciation
                ) {
                    results_filtered.push(item);

                    grammar = item.gr ? '<span class="grammar">' + [].concat(item.gr).join('; ') + '</span> ' : ''; // Grammar
                    sc_alt = item.sc_alt ? '<div class="sc-alt">(alt. Scots maks: <span>' + [].concat(item.sc_alt).join(', ') + '</span>)</div> ' : ''; // Alternative Scots spellings
                    en = item.en ? formatMultiple(item.en, ',', 'en') : ''; // English
                    pr = item.pr ? '<span class="pr">(‘' + [].concat(item.pr).join('’, ‘') + '’)</span> ' : ''; // Pronunciation
                    def = item.def ? formatMultiple(item.def, ';', 'def') : ''; // Definition
                    ex = item.ex ? formatMultiple(item.ex, ';', 'ex') : ''; // Examples
                    ph = item.ph ? ' class="phrase"' : ''; // Phrases, idioms
                    inf = item.inf ? formatMultiple(item.inf, ';', 'inf') : ''; // Additional information
                    or = item.or ? formatOrigin(item.or) : ''; // Origin
                    hl_sc_alt = item.sc_alt ? [].concat(item.sc_alt) : []; // Make sure to highlight any alternative Scots words
                    audio = item.au ? '<span class="audio">' + addAudio(item.au) + '</span> ' : ''; // Audio

                    /**
                     * Highlight based on trigger words by default; if not, use the specific highlight words
                     */

                    // Simpler (Scots) verbs
                    pt_arr = item.pt && item.pt.sc ? [].concat(item.pt.sc) : []; // Any past tense
                    pt_arr = item.pt && item.pt.tr ? pt_arr.concat(item.pt.tr) : pt_arr; // Any past tense triggers

                    pp_arr = item.pp && item.pp.sc ? [].concat(item.pp.sc) : []; // Any past participle
                    pp_arr = item.pp && item.pp.tr ? pp_arr.concat(item.pp.tr) : pp_arr; // Any past tense triggers

                    pt_pp_arr = item.pt_pp && item.pt_pp.sc ? [].concat(item.pt_pp.sc) : []; // Where Scots past tense and past participle are the same
                    pt_pp_arr = item.pt_pp && item.pt_pp.tr ? pt_pp_arr.concat(item.pt_pp.tr) : pt_pp_arr; // triggers

                    neg = item.neg ? '<span class="neg">neg. <span>' + [].concat(item.neg.sc).join(', ') + '</span></span>' : ''; // Any Scots negative

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

                    pt = pt_arr.length ? '<span class="pt">pt <span data-hl="' + pt_arr.join(',') + '">' + [].concat(item.pt.sc).join(', ') + '</span></span>' : ''; // Past tense (simpler verbs)

                    pp = pp_arr.length ? '<span class="pp">ptp <span data-hl="' + pp_arr.join(',') + '">' + [].concat(item.pp.sc).join(', ') + '</span></span>' : ''; // Past participle (simpler verbs)

                    pt_pp = pt_pp_arr.length ? '<span class="pt-pp">pt ptp <span data-hl="' + pt_pp_arr.join(',') + '">' + [].concat(item.pt_pp.sc).join(', ') + '</span></span>' : ''; // Identical past tense and past participle (simpler verbs)

                    pl = pl_arr.length ? '<span class="pl">pl <span data-hl="' + pl_arr.join(',') + '">' + [].concat(item.pl.sc).join(', ') + '</span></span>' : ''; // Noun plurals

                    $('#result').append('<li' + ph + '><span class="sc"' + hl + '>' + G.utils.curlyQuotes([].concat(item.sc).join(', ')) + '</span> ' +
                        audio +
                        pr +
                        grammar +
                        sc_alt +
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
                        '</li>');
                }
            });

            if (results_filtered.length) { // If there is at least one relevant result amang returned results
                highlight(results_filtered, function() {
                    if (state.highlight) {
                        $($('#result > li').get().reverse()).each(function() { // Move highlighted entries to the top
                            $li = $(this);
                            if ($li.find('span').hasClass('hl')) { // If any of the Scots words (e.g. headword, past tense) is highlighted
                                $li.parent().prepend($li);
                            }
                        });
                    }

                    if (!state.highlight && state.word.length < cfg.threshold_non_hl) { // If nothing in the UI has been highlighted and the length of user input is below the threshold
                        noResults();
                    } else {
                        $('#result').addClass('show');
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

            return '<div class="or-container">Origin: <ul class="or"><li class="list-inline-item">' + ul.join('; </li><li class="list-inline-item">') + '</li></ul></div>';
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

        function hielicht($el, items, en) {
            if ($el.data('hl')) { // Add any highlight words to the items array
                items = items.concat($el.data('hl').split(','));
            }
            $.each(items, function() {
                if (this &&
                    (this.toLowerCase() === state.word_lc ||
                        (en && en.indexOf(state.word_lc) > -1))
                ) {
                    $el.addClass('hl');
                    state.highlight = state.highlight + 1;
                    return false; // Exit loop
                }
            });
        }

        // Clear any highlights
        $('.sc, .pt span, .pp span', '#result').each(function() {
            $(this).removeClass('hl');
        });

        // Add any new highlights
        $($('#result > li').get().reverse()).each(function() {

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
                hielicht(
                    $('.pt span', this),
                    items, // Scots words
                    r[i].pt && r[i].pt.tr ? makeSingleArray(r[i].pt.tr) : null // Corresponding trigger words to cause highlighting
                );
            }

            // Past participle
            if ($('.pp', this).length) {
                items = $('.pp span', this).text().split(', ');
                hielicht(
                    $('.pp span', this),
                    items, // Scots words
                    r[i].pp && r[i].pp.tr ? makeSingleArray(r[i].pp.tr) : null
                );
            }

            // Identical past tense and past participle
            if ($('.pt-pp', this).length) {
                items = $('.pt-pp span', this).text().split(', ');
                hielicht(
                    $('.pt-pp span', this),
                    items, // Scots words
                    r[i].pt_pp && r[i].pt_pp.tr ? makeSingleArray(r[i].pt_pp.tr) : null
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
                    r[i].pl && r[i].pl.en ? makeSingleArray(r[i].pl.en) : null
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

    // Returns array where each item is in lower case
    function arrayToLowerCase(array) {
        var a = [];

        $.each(array, function() {
            a.push(this.toString().toLowerCase());
        });

        return a;
    }

    return {
        init: init,
        state: state
    };

}());
