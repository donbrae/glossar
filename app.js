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
            includeScore: true,
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
                weight: 0.4
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
                name: 'ing.sc',
                weight: 0.01
            }, {
                name: 'ing.en',
                weight: 0.01
            }, {
                name: 'sc_alt',
                weight: 0.1
            }, {
                name: 'pr',
                weight: 0.1
            }, {
                name: 'en',
                weight: 0.2
            }, {
                name: 'tr',
                weight: 0.1
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
     */
    function print(r) {
        var grammar, hl_sc_alt,
            hl, hl_all, def, en, pr, pt, pt_arr, neg, or;

        if (r && r.length) {
            $('#result').html('');
            $.each(r, function() {
                grammar = this.item.gr ? '<span class="grammar">' + [].concat(this.item.gr).join('; ') + '</span> ' : ''; // Grammar
                sc_alt = this.item.sc_alt ? '<div class="sc-alt">(alt. spellins: <span>' + [].concat(this.item.sc_alt).join(', ') + '</span>)</div> ' : ''; // Alternative Scots spellings
                en = this.item.en ? formatMultipleMeanings(this.item.en) : ''; // English
                pr = this.item.pr ? '<span class="pr">(‘' + [].concat(this.item.pr).join('’, ‘') + '’)</span> ' : ''; // Pronunciation
                def = this.item.def ? '<span class="def">' + [].concat(this.item.def).join('; ') + '</span>' : ''; // Definition
                or = this.item.or ? formatOrigin(this.item.or) : ''; // Origin
                hl_sc_alt = this.item.sc_alt ? [].concat(this.item.sc_alt) : []; // Make sure to highlight any alternative Scots words

                /**
                 * Highlight based on trigger words by default; if not, use the specific highlight words
                 */

                // Simpler Verbs
                pt_arr = this.item.pt && this.item.pt.en ? [].concat(this.item.pt.en) : []; // Any english past tense
                pt_arr = this.item.pt && this.item.pt.tr ? pt_arr.concat(this.item.pt.tr) : pt_arr; // Any past tense triggers
                neg = this.item.neg ? '<span class="neg">neg. <span>' + [].concat(this.item.neg.sc).join(', ') + '</span></span>' : ''; // Negative

                if (this.item.hl) { // Specific trigger highlight words
                    hl_all = [].concat(this.item.hl);
                } else if (this.item.tr) { // Standard triggers
                    hl_all = [].concat(this.item.tr);
                } else { // No triggers of any kind
                    hl_all = [];
                }
                // Add any alternative Scots words which should trigger highlighting
                if (hl_sc_alt.length) {
                    hl_all = hl_all.concat(hl_sc_alt);
                }
                // Add any phonetic spellings
                if (this.item.pr) {
                    hl_all = hl_all.concat(this.item.pr);
                }
                // Add any highlighting words
                if (hl_all.length) {
                    hl = ' data-hl="' + hl_all.filter(G.utils.onlyUnique).join(',') + '"';
                } else {
                    hl = ''; // No trigger words
                }

                pt = pt_arr.length ? '<span class="pt">pt. <span data-hl="' + pt_arr.join(',') + '">' + [].concat(this.item.pt.sc).join(', ') + '</span></span>' : ''; // Past tense (simpler verbs)

                $('#result').append('<li><span class="sc"' + hl + '>' + [].concat(this.item.sc).join(', ') + '</span> ' +
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
     * For English words. Creates an <ol> out of an array, or, if passed only a string, returns the original string
     * @param {word} array
     * @returns {String}
     */
    function formatMultipleMeanings(word) {
        var words = [].concat(word), // Make array in case we're passed a string
            ol = [];

        $.each(words, function() {
            if (this.join) { // If an array
                ol.push(this.join(', ')); // Join array items into a single string
            } else { // If a string
                ol.push(this);
            }
        });

        if (ol.length > 1) { // There are multiple meanings
            return '<ol class="en"><li>' + ol.join('</li><li>') + '</li></ol>';
        } else { // If there is just one meaning
            return '<div class="en">' + ol[0] + '</div>';
        }
    }

    function highlight(r, callback) {
        var i = 0;

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
        $('#result').children('li').each(function() {

            // Head word(s)
            items = $('.sc', this).text().split(', ');
            hielicht(
                $('.sc', this), // UI element
                items, // Scots words
                r[i].item.en ? makeSingleArray(r[i].item.en) : null // Corresponding English words to highlight
            );

            // Past tense
            if ($('.pt', this).length) {
                items = $('.pt span', this).text().split(', ');
                hielicht(
                    $('.pt span', this),
                    items, // Scots words
                    r[i].item.pt && r[i].item.pt.en ? makeSingleArray(r[i].item.pt.en) : null // Corresponding English past tense words to highlight
                );
            }

            // Negative
            if ($('.neg', this).length) {
                items = $('.neg span', this).text().split(', ');
                hielicht(
                    $('.neg span', this),
                    items,
                    r[i].item.neg && r[i].item.neg.en ? makeSingleArray(r[i].item.neg.en) : null
                );
            }

            i = i + 1;
        });

        callback();
    }

    function timeoutStart(callback) {

        function start() {
            console.log('start timeout');
            state.timeout = setTimeout(callback, cfg.search_delay);
        }

        if (!state.timeout) { // If there is no timeout currently running
            start();
        } else { // If there's a timeout in place already
            clearTimeout(state.timeout); // Cancel timeout
            console.log('cancel timeout');
            start(); // Start a new one
        }
    }

    return {
        init: init,
        state: state
    };

}());
