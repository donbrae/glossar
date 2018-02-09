$(function() {

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
                },
                {
                    name: 'pt.sc',
                    weight: 0.03
                },
                {
                    name: 'pt.en',
                    weight: 0.01
                },
                {
                    name: 'pp.sc',
                    weight: 0.01
                },
                {
                    name: 'pp.en',
                    weight: 0.01
                },
                {
                    name: 'neg.sc',
                    weight: 0.01
                },
                {
                    name: 'neg.en',
                    weight: 0.01
                },
                {
                    name: 'ing.sc',
                    weight: 0.01
                },
                {
                    name: 'ing.en',
                    weight: 0.01
                },
                {
                    name: 'sc_alt',
                    weight: 0.1
                },
                {
                    name: 'pr',
                    weight: 0.1
                },
                {
                    name: 'en',
                    weight: 0.2
                },
                {
                    name: 'tr',
                    weight: 0.1
                }
            ]
        },
        state = {
            word: '' // Value of search text box
        },
        fuse = new Fuse(GLOSSAR.dict, options); // 'list' is the item array

    /**
     * Prints data on screen
     */
    function print(r) {
        var grammar, hl_sc_alt = null,
            hl, hl_all, def, pr, pt_arr;

        $('#result').html('');
        // console.log(r);

        if (r && r.length) {
            $.each(r, function() {
                grammar = this.item.gr ? '<span class="grammar">' + [].concat(this.item.gr).join('; ') + '</span> ' : ''; // Grammar
                sc_alt = this.item.sc_alt ? '<div class="sc-alt">(alt. spellins: <span>' + [].concat(this.item.sc_alt).join(', ') + '</span>)</div> ' : ''; // Alternative Scots spellings
                en = this.item.en ? formatMultipleMeanings(this.item.en) : ''; // English
                pr = this.item.pr ? '<span class="pr">(‘' + [].concat(this.item.pr).join('’, ‘') + '’)</span> ' : ''; // Pronunciation
                def = this.item.def ? '<span class="def">' + this.item.def + '</span>' : ''; // Definition
                if (this.item.sc_alt) { // Make sure to highlight any alternative Scots words
                    hl_sc_alt = [].concat(this.item.sc_alt);
                }

                /**
                 * Highlight based on trigger words by default; if not, use the specific highlight words
                 */

                // Simpler Verbs
                pt_arr = this.item.pt && this.item.pt.en ? [].concat(this.item.pt.en) : null; // English past tense

                if (this.item.hl) { // Specific trigger highlight words
                    hl_all = [].concat(this.item.hl);
                } else if (this.item.tr) { // Standard triggers
                    hl_all = [].concat(this.item.tr);
                } else { // No triggers of any kind
                    hl_all = [];
                }
                // Add any alternative Scots words which should trigger highlighting
                if (hl_sc_alt) {
                    hl_all = hl_all.concat(hl_sc_alt);
                }
                // Add any phonetic spellings
                if (this.item.pr) {
                    hl_all = hl_all.concat(this.item.pr);
                }
                // Add any highlighting words
                if (hl_all.length) {
                    hl = ' data-hl="' + hl_all.join(',') + '"';
                } else {
                    hl = ''; // No trigger words
                }

                pt = pt_arr ? '<span class="pt">pt. <span data-hl="' + pt_arr.join(',') + '">' + this.item.pt.sc + '</span></span> ' : ''; // Past tense (simpler verbs)

                $('#result').append('<li><span class="sc"' + hl + '>' + [].concat(this.item.sc).join(', ') + '</span> ' +
                    pr +
                    grammar +
                    def +
                    sc_alt +
                    pt +
                    en +
                    '</li>');
            });
            highlight(r);
        } else {
            $('#result').html('<li class="text-center no-results">Sorry, the’re nae results for <strong>' + state.word + '</strong></li>');
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

    function highlight(r) {
        var items, $span, end,
            i = 0;

        // Clear any highlights
        $('.sc, .en', '#result').each(function() {
            $(this).removeClass('hl');
        });

        // Add any new highlights
        $('#result').children('li').each(function() {
            items = $('.sc', this).text().split(', ');
            en_all = [];

            en = makeSingleArray(r[i].item.en); // Get corresponding English words to highlight

            if ($('.sc', this).data('hl')) { // Add any highlight words to the items array
                items = items.concat($('.sc', this).data('hl').split(','));
            }
            $span = $('.sc', this);
            $.each(items, function() {
                if (this &&
                    (this.toLowerCase() == state.word.toLowerCase() ||
                        (en && en.indexOf(state.word.toLowerCase()) > -1)
                    )
                ) {
                    $span.addClass('hl');
                    return false; // Exit loop
                }
            });

            // ****

            if ($('.pt', this).length) {
                items = $('.pt', this).text().split(', ');
                en_all = [];

                en = r[i].item.pt && r[i].item.pt.en ? makeSingleArray(r[i].item.pt.en) : null; // Get corresponding English past tense words to highlight

                if ($('.pt', this).data('hl')) { // Add any highlight words to the items array
                    items = items.concat($('.pt', this).data('hl').split(','));
                }
                $span = $('.pt', this);
                $.each(items, function() {
                    if (this &&
                        (this.toLowerCase() == state.word.toLowerCase() ||
                            (en && en.indexOf(state.word.toLowerCase()) > -1)
                        )
                    ) {
                        $span.addClass('hl');
                        return false; // Exit loop
                    }
                });
            }

            i = i + 1;
        });
    }

    $('#searchTextbox').on('keyup', function() {
        state.word = $.trim($(this).val());

        if (state.word.length) {
            print(fuse.search(state.word));
        } else {
            $('#result').html('');
        }

    });
});
