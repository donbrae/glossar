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
            timeout: null
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
                name: 'pt.en',
                weight: 0.01
            }, {
                name: 'pt.tr',
                weight: 0.01
            }, {
                name: 'pp.sc',
                weight: 0.01
            }, {
                name: 'pp.en',
                weight: 0.01
            }, {
                name: 'neg.sc',
                weight: 0.01
            }, {
                name: 'neg.en',
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
        };

        fuse = new Fuse(GLOSSAR.dict, options); // 'list' is the item array

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

            state.word = $.trim($(this).val());

            if (e.code === 'Enter') { // 'Enter' key should allow user to do the search right away, and not wait for the performance-enhancing timeout
                search();
            } else {
                timeoutStart(search);
            }
        });
    }

    /**
     * Prints data on screen
     * @param {Object} r - Algorithm
     * @returns {}
     */
    function print(r) {
        var grammar, hl_sc_alt,
            hl, hl_all, $li, def, en, pr, pt, pt_arr, neg, or;

        console.log(r);

        if (r && r.length) {
            $('#result').html('');
            $.each(r, function() {
                grammar = this.gr ? '<span class="grammar">' + [].concat(this.gr).join('; ') + '</span> ' : ''; // Grammar
                sc_alt = this.sc_alt ? '<div class="sc-alt">(alt Scots maks: <span>' + [].concat(this.sc_alt).join(', ') + '</span>)</div> ' : ''; // Alternative Scots spellings
                en = this.en ? formatMultipleMeanings(this.en, ',', 'en') : ''; // English
                pr = this.pr ? '<span class="pr">(‘' + [].concat(this.pr).join('’, ‘') + '’)</span> ' : ''; // Pronunciation
                def = this.def ? formatMultipleMeanings(this.def, ';', 'def') : ''; // Definition
                or = this.or ? formatOrigin(this.or) : ''; // Origin
                hl_sc_alt = this.sc_alt ? [].concat(this.sc_alt) : []; // Make sure to highlight any alternative Scots words

                /**
                 * Highlight based on trigger words by default; if not, use the specific highlight words
                 */

                // Simpler Verbs
                pt_arr = this.pt && this.pt.en ? [].concat(this.pt.en) : []; // Any english past tense
                pt_arr = this.pt && this.pt.tr ? pt_arr.concat(this.pt.tr) : pt_arr; // Any past tense triggers
                neg = this.neg ? '<span class="neg">neg. <span>' + [].concat(this.neg.sc).join(', ') + '</span></span>' : ''; // Negative

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

                pt = pt_arr.length ? '<span class="pt">pt. <span data-hl="' + pt_arr.join(',') + '">' + [].concat(this.pt.sc).join(', ') + '</span></span>' : ''; // Past tense (simpler verbs)

                $('#result').append('<li><span class="sc"' + hl + '>' + [].concat(this.sc).join(', ') + '</span> ' +
                    pr +
                    grammar +
                    sc_alt +
                    pt +
                    neg +
                    def +
                    en +
                    or +
                    '</li>');
            });
            highlight(r, function() {
                $($('#result > li').get().reverse()).each(function() { // Move highlighted entries to the top
                    $li = $(this);
                    if ($li.children('span').hasClass('hl')) { // If any of the Scots words (e.g. headword, past tense) is highlighted
                        $li.parent().prepend($li);
                    }
                });
                $('#result').addClass('show');
            });
        } else {
            $('#result').html('<li class="text-center no-results">Sorry, the’re nae results for <strong>' + state.word + '</strong></li>');
            $('#result').addClass('show');
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
                if (this.toString().indexOf(', ') > -1) { // If multiple 'synomyms'
                    words = words.concat(this.toString().split(', ')); // Split any 'synomym' meanings and add to 'words' array
                } else {
                    words = words.concat(this); // Add array to the 'words' array
                }
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
     * For English words and definitions. Creates an <ol> out of an array, or, if passed only a string, returns the original string
     * @param {Array} word
     * @param {String} separator - e.g. ';'
     * @param {String} cl - class, e.g. 'en'
     * @returns {String}
     */
    function formatMultipleMeanings(word, separator, cl) {
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
                    return false; // Exit loop
                }
            });
        }

        // Clear any highlights
        $('.sc, .pt span', '#result').each(function() {
            $(this).removeClass('hl');
        });

        // Add any new highlights
        $($('#result > li').get().reverse()).each(function() {

            // Head word(s)
            items = $('.sc', this).text().split(', ');
            hielicht(
                $('.sc', this), // UI element
                items, // Scots words
                r[i].en ? makeSingleArray(r[i].en) : null // Corresponding English words to highlight
            );

            // Past tense
            if ($('.pt', this).length) {
                items = $('.pt span', this).text().split(', ');
                hielicht(
                    $('.pt span', this),
                    items, // Scots words
                    r[i].pt && r[i].pt.en ? makeSingleArray(r[i].pt.en) : null // Corresponding English past tense words to highlight
                );
            }

            // Negative
            if ($('.neg', this).length) {
                items = $('.neg span', this).text().split(', ');
                hielicht(
                    $('.neg span', this),
                    items,
                    r[i].neg && r[i].neg.en ? makeSingleArray(r[i].neg.en) : null
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
