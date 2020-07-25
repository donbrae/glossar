/**
 * Process any variants based on user input
 * @param {String} inputs - The string the user types in the search field
 * @param {Array|String} test - The value(s) to test against, each item delimited with a '|'
 * @returns {String}
 */
function processVariants(input, test) {
    var user_input = input.toLowerCase(),
        variants = [user_input], // Add original user input as first array item. Items may be added in the proceeding logic. The array will then be converted to a string (with '|' separator) and passed to Fuse.js
        tests, common_word_part, variant;

    [].concat(test).forEach((test_group, i) => { // Loop through array of groups of variant strings, e.g. 'fae|frae|thrae', 'sc|sk' or '-ie|-y|-ae'
        if (test_group.indexOf('|') > -1) { // Each test must use | character
            tests = test_group.toLowerCase().split('|');

            tests.forEach((test_item, i) => { // Each variant string, e.g 'frae', 'sc' or '-ie'
                if (test_item.charAt(0) === '-' && user_input.substring(user_input.length - test_item.length + 1) == test_item.substring(1, test_item.length)) { // Does this variant string affect word ending, e.g. '-ie'?

                    variants.forEach((s, i) => { // Each variant currently in [variants] array
                        common_word_part = s.substring(0, s.length - test_item.length + 1); // Get common (leading) part of word, to which we'll append the other endings (test_item.length - 1 to account for the leading '-')

                        tests.forEach((s, i) => { // Loop through each variant string (e.g. '-ie') in this group again

                            variant = common_word_part + s.substring(1, s.length + 1);

                            if (variants.indexOf(variant) == -1) { // If this variant isn't already in [variants]
                                variants.push(variant); // Add it
                            }
                        });
                    });
                } else if (test_item.charAt(test_item.length - 1) === '-' && user_input.substring(0, test_item.length - 1) == test_item.substring(0, test_item.length - 1)) { // Does this variant string affect word beginnings, e.g. 'sk-'?

                    $.each(variants, function() { // Each variant currently in [variants] array

                         common_word_part = this.substring(test_item.length - 1, this.length); // Get common (trailing) part of word, to which we'll prepend the other endings (test_item.length - 1 to account for the leading '-')

                         $.each(tests, function() { // Loop through each variant string (e.g. '-ie') in this group again

                             variant = this.substring(0, this.length - 1) + common_word_part;

                             if (variants.indexOf(variant) == -1) { // If this variant isn't already in [variants]
                                 variants.push(variant); // Add it
                             }
                         });
                    });
                } else { // Non-word-ending string. Standard string replace at any index in the user input

                    variants.forEach((v, i) => { // Each variant currently in [variants] array

                        if (v.indexOf(test_item) > -1) { // Does this variant contain a string that needs replaced?

                            tests.forEach((s, i) => { // (e.g. 'frae' or 'sc')
                                if (s.toString() != test_item && variants.indexOf(v.replace(test_item, s)) == -1) {
                                    variants.push(v.replace(test_item, s));
                                }
                            });
                        }
                    });
                }
            });
        }
    });

    if (variants.length > 1) return variants.join('|'); // Fuse.js OR syntax

    return input;
}

console.log(
    processVariants('sklentie', ['fae|frae|thrae', '-ie|-y|-ae', 'sk-|sc-'])
);
