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
                    name: 'sc_alt',
                    weight: 0.1
                },
                {
                    name: 'pr',
                    weight: 0.1
                },
                {
                    name: 'en',
                    weight: 0.3
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
            hl, hl_all, def, pr;

        $('#result').html('');
        // console.log(r);

        if (r && r.length) {
            $.each(r, function() {
                grammar = this.item.gr ? '<span class="grammar">' + [].concat(this.item.gr).join('; ') + '</span> ' : '';
                sc_alt = this.item.sc_alt ? '<div class="sc-alt">(alt. spellins: <span>' + [].concat(this.item.sc_alt).join(', ') + '</span>)</div> ' : '';
                en = this.item.en ? formatMultipleMeanings(this.item.en) : '';
                pr = this.item.pr ? '<span class="pr">(‘' + [].concat(this.item.pr).join('’, ‘') + '’)</span> ' : '';
                def = this.item.def ? '<br><span class="def">' + this.item.def + '</span>' : '';
                if (this.item.sc_alt) { // Make sure to highlight any alternative Scots words
                    hl_sc_alt = [].concat(this.item.sc_alt);
                }

                // Highlight based on trigger words by default; if not, use the specific highlight words
                if (this.item.hl) { // Specifc trigger highlight words
                    hl_all = [].concat(this.item.hl);
                } else if (this.item.tr) { // Standard triggers
                    hl_all = [].concat(this.item.tr);
                } else { // No triggers of any kind
                    hl_all = [];
                }
                // Add alternative Scots words which should trigger highlighting
                if (hl_sc_alt) {
                    hl_all = hl_all.concat(hl_sc_alt);
                }
                // Add phonetic spellings
                if (this.item.pr) {
                    hl_all = hl_all.concat(this.item.pr);
                }
                // Add any highlighting words
                if (hl_all.length) {
                    hl = ' data-hl="' + hl_all.join(',') + '"';
                } else {
                    hl = ''; // No trigger words
                }

                $('#result').append('<li><span class="sc"' + hl + '>' + [].concat(this.item.sc).join(', ') + '</span> ' +
                    pr +
                    grammar +
                    def +
                    sc_alt +
                    en +
                    '</li>');
            });
            highlight(r);
        } else {
            $('#result').html('<li class="text-center no-results">Sorry, the’re nae results for <strong>' + state.word + '</strong></li>');
        }
    }

    /**
     * Get English words for the purposes of highlighting them in the UI
     * @param {} r - A result from the search
     * @returns {Array|null}
     */
    function getEnglishWords(r) {
        var en = r.item.en ? [] : null;

        // Redd English word(s)
        if (en) {
            if (r.item.en.join) { // Result is an array of values
                $.each(r.item.en, function(i) {
                    en = en.concat(this); // Add both strings and arrays to the 'en' array
                });
            } else { // Result is single string
                en.push(r.item.en);
            }

            // Make lowercase
            $.each(en, function(i) {
                en[i] = this.toLowerCase();
            });
        }

        return en;
    }

    /**
     * Creates an <ol> out of an array, or, if passed only a string, returns the original string
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
        $('.sc', '#result').each(function() {
            items = $(this).text().split(', ');
            en_all = [];

            en = getEnglishWords(r[i]); // Get corresponding English words to act as triggers

            // console.log(en);
            i = i + 1;
            if ($(this).data('hl')) { // Add any highlight words to the items array
                items = items.concat($(this).data('hl').split(','));
            }
            $span = $(this);
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
