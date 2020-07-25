/**
 * Process any variants based on user input
 * @param {String} inputs - The string the user types in the search field
 * @param {Array|String} test - The value(s) to test against, each item delimited with a '|'
 * @returns {String}
 */
function processVariants(input, test) {
    var user_input = input.toLowerCase(),
        variants = [user_input], // Add original user input as first array item. Items may be added in the proceeding logic. The array will then be converted to a string (with '|' separator) and passed to Fuse.js
        tests, common_word_part, variant, str, v, replace_string;

    $.each([].concat(test), function() { // Loop through array of groups of variant strings, e.g. 'fae|frae|thrae', 'sc|sk' or '-ie|-y|-ae'

        if (this.indexOf('|') > -1) { // Each test must use | character
            tests = this.toLowerCase().split('|');

            $.each(tests, function() { // Each variant string, e.g 'frae', 'sc' or '-ie'

                str = this;

                if (str.charAt(0) === '-' && user_input.substring(user_input.length - str.length + 1) == str.substring(1, str.length)) { // Does this variant string affect word ending, e.g. '-ie'?

                    $.each(variants, function() { // Each variant currently in [variants] array

                         common_word_part = this.substring(0, this.length - str.length + 1); // Get common (leading) part of word, to which we'll append the other endings (str.length - 1 to account for the leading '-')

                         $.each(tests, function() { // Loop through each variant string (e.g. '-ie') in this group again

                             variant = common_word_part + this.substring(1, this.length);

                             if (variants.indexOf(variant) == -1) { // If this variant isn't already in [variants]
                                 variants.push(variant); // Add it
                             }
                         });
                    });
                } else if (str.charAt(str.length - 1) === '-' && user_input.substring(0, str.length - 1) == str.substring(0, str.length - 1)) { // Does this variant string affect word beginnings, e.g. 'sk-'?

                    $.each(variants, function() { // Each variant currently in [variants] array

                         common_word_part = this.substring(str.length - 1, this.length); // Get common (trailing) part of word, to which we'll prepend the other endings (str.length - 1 to account for the leading '-')

                         $.each(tests, function() { // Loop through each variant string (e.g. '-ie') in this group again

                             variant = this.substring(0, this.length - 1) + common_word_part;

                             if (variants.indexOf(variant) == -1) { // If this variant isn't already in [variants]
                                 variants.push(variant); // Add it
                             }
                         });
                    });
                } else { // Non-word-ending string. Standard string replace at any index in the user input
                    $.each(variants, function() { // Each variant currently in [variants] array
                        v = this;

                        if (this.indexOf(str) > -1) { // Does this variant contain a string that needs replaced?

                            replace_string = str;

                            $.each(tests, function() { // (e.g. 'frae' or 'sc')

                                if (this.toString() != replace_string && variants.indexOf(v.replace(replace_string, this)) == -1) {
                                    variants.push(v.replace(replace_string, this));
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
    processVariants('maistly', ['-ie|-y|-ae'])
);
