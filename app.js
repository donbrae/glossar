/**
 * @name glossar.js
 * @author Jamie Smith
 * @description Scots glossar
 */

var GLOSSAR = (function() {

    var cfg = {
            search_delay: 500 // Number of ms to wait after last keystroke before doing a search. See functions timeoutStart() timeoutCancel()
        },
        state = {
            word: '', // Value of search text box
            timeout: null,
            highlight: 0, // True if at least one word is highlighted in results set
            random: [] // Indexes of which random entries have already been selected
        },
        fuse;

    function init() {
        var options = {
                shouldSort: true,
                includeScore: false,
                tokenize: true,
                matchAllTokens: true,
                findAllMatches: false,
                threshold: 0.05,
                location: 0,
                distance: 15,
                maxPatternLength: 3,
                minMatchCharLength: 5,
                keys: [{
                    name: 'sc',
                    weight: 0.3
                }, {
                    name: 'pt.sc',
                    weight: 0.02
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
                    weight: 0.01
                }, {
                    name: 'neg.tr',
                    weight: 0.01
                }, {
                    name: 'sc_alt',
                    weight: 0.1
                }, {
                    name: 'pr',
                    weight: 0.1
                }, {
                    name: 'en',
                    weight: 0.12
                }, {
                    name: 'tr',
                    weight: 0.3
                }]
            },

            fuse = new Fuse(GLOSSAR.dict, options);

        $('#searchTextbox').on('keyup', function(e) {

            var t;

            function search() {
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

            state.word = G.utils.replaceQo(
                $.trim(
                    $(this).val().replace(/(<([^>]+)>)/ig, ' ') // Strip any HTML
                )
            );

            if (e.code === 'Enter') { // 'Enter' key should allow user to do the search right away, and not wait for the performance-enhancing timeout
                search();
            } else {
                timeoutStart(search);
            }
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

            state.word = G.utils.replaceQo(word);
            $('#searchTextbox').val(word);
            $('#result').removeClass('show');
            print(fuse.search(state.word), function() {
                state.random.push(num);
                $btn.prop('disabled', false);
            });
        });

        if ('ontouchstart' in window === false) {
            $('#searchTextbox').focus();
        }
    }

    function noResults() {
        $('#result').html('<li class="text-center no-results">Sorry, the’r nae results for <strong>' + state.word + '</strong></li>');
        $('#result').addClass('show');
    }

    /**
     * Prints data on screen
     * @param {Object} r - Algorithm
     * @param {Function} callback
     */
    function print(r, callback) {
        var grammar, hl_sc_alt,
            hl, hl_all, $li, def, ex, inf, en, ph, pr, pt, pt_arr, pp, pp_arr, pt_pp, pt_pp_arr, neg, or;

        if (r && r.length) {
            $('#result').html('');
            $.each(r, function() {
                grammar = this.gr ? '<span class="grammar">' + [].concat(this.gr).join('; ') + '</span> ' : ''; // Grammar
                sc_alt = this.sc_alt ? '<div class="sc-alt">(alt Scots maks: <span>' + [].concat(this.sc_alt).join(', ') + '</span>)</div> ' : ''; // Alternative Scots spellings
                en = this.en ? formatMultiple(this.en, ',', 'en') : ''; // English
                pr = this.pr ? '<span class="pr">(‘' + [].concat(this.pr).join('’, ‘') + '’)</span> ' : ''; // Pronunciation
                def = this.def ? formatMultiple(this.def, ';', 'def') : ''; // Definition
                ex = this.ex ? formatMultiple(this.ex, ';', 'ex') : ''; // Examples
                ph = this.ph ? ' class="phrase"' : ''; // Phrases, idioms
                inf = this.inf ? formatMultiple(this.inf, ';', 'inf') : ''; // Additional information
                or = this.or ? formatOrigin(this.or) : ''; // Origin
                hl_sc_alt = this.sc_alt ? [].concat(this.sc_alt) : []; // Make sure to highlight any alternative Scots words

                /**
                 * Highlight based on trigger words by default; if not, use the specific highlight words
                 */

                // Simpler (Scots) verbs
                pt_arr = this.pt && this.pt.sc ? [].concat(this.pt.sc) : []; // Any past tense
                pt_arr = this.pt && this.pt.tr ? pt_arr.concat(this.pt.tr) : pt_arr; // Any past tense triggers

                pp_arr = this.pp && this.pp.sc ? [].concat(this.pp.sc) : []; // Any past participle
                pp_arr = this.pp && this.pp.tr ? pp_arr.concat(this.pp.tr) : pp_arr; // Any past tense triggers

                pt_pp_arr = this.pt_pp && this.pt_pp.sc ? [].concat(this.pt_pp.sc) : []; // Where Scots past tense and past participle are the same
                pt_pp_arr = this.pt_pp && this.pt_pp.tr ? pt_pp_arr.concat(this.pt_pp.tr) : pt_pp_arr; // triggers

                neg = this.neg ? '<span class="neg">neg. <span>' + [].concat(this.neg.sc).join(', ') + '</span></span>' : ''; // Any Scots negative

                if (this.hl) { // Specific trigger highlight words
                    hl_all = [].concat(this.hl);
                } else if (this.tr) { // Standard triggers
                    hl_all = [].concat(this.tr);
                } else { // No triggers of any kind
                    hl_all = [];
                }
                // Add any alternative Scots words which should trigger highlighting
                if (hl_sc_alt.length) {
                    hl_all = hl_all.concat(hl_sc_alt);
                }
                // Add any phonetic spellings
                if (this.pr) {
                    hl_all = hl_all.concat(this.pr);
                }
                // Add any highlighting words
                if (hl_all.length) {
                    hl = ' data-hl="' + hl_all.filter(G.utils.onlyUnique).join(',') + '"';
                } else {
                    hl = ''; // No trigger words
                }

                pt = pt_arr.length ? '<span class="pt">pt <span data-hl="' + pt_arr.join(',') + '">' + [].concat(this.pt.sc).join(', ') + '</span></span>' : ''; // Past tense (simpler verbs)

                pp = pp_arr.length ? '<span class="pp">ptp <span data-hl="' + pp_arr.join(',') + '">' + [].concat(this.pp.sc).join(', ') + '</span></span>' : ''; // Past participle (simpler verbs)

                pt_pp = pt_pp_arr.length ? '<span class="pt-pp">pt ptp <span data-hl="' + pt_pp_arr.join(',') + '">' + [].concat(this.pt_pp.sc).join(', ') + '</span></span>' : ''; // Identical past tense and past participle (simpler verbs)

                $('#result').append('<li' + ph + '><span class="sc"' + hl + '>' + [].concat(this.sc).join(', ') + '</span> ' +
                    pr +
                    grammar +
                    sc_alt +
                    pt +
                    pp +
                    pt_pp +
                    neg +
                    def +
                    en +
                    ex +
                    inf +
                    or +
                    '</li>');
            });
            highlight(r, function() {
                if (state.highlight) {
                    $($('#result > li').get().reverse()).each(function() { // Move highlighted entries to the top
                        $li = $(this);
                        if ($li.find('span').hasClass('hl')) { // If any of the Scots words (e.g. headword, past tense) is highlighted
                            $li.parent().prepend($li);
                        } else if (state.word.length < 2) { // For one-character queries
                            $li.remove();
                        }
                    });
                }

                if (!state.highlight && state.word.length < 2) {
                    noResults();
                } else {
                    $('#result').addClass('show');
                }

                if (typeof(callback) === 'function') {
                    callback();
                }
            });
        } else {
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
                    (this.toLowerCase() == state.word.toLowerCase() ||
                        (en && en.indexOf(state.word.toLowerCase()) > -1)
                    )
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
                r[i].en ? makeSingleArray(r[i].en) : null // Corresponding English words to gar highlighting
            );

            // Past tense
            if ($('.pt', this).length) {
                items = $('.pt span', this).text().split(', ');
                hielicht(
                    $('.pt span', this),
                    items, // Scots words
                    r[i].pt && r[i].pt.tr ? makeSingleArray(r[i].pt.tr) : null // Corresponding trigger words to gar highlighting
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

    return {
        init: init,
        state: state
    };

}());
