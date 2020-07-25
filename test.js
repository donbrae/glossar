/**
 * Process any variants based on user input
 * @param {String} inputs - The string the user types in the search field
 * @param {Array|String} test - The value(s) to test against, each item delimited with a '|'
 * @returns {String}
 */
function processVariants(input, test) {
    var user_input = input.toLowerCase(),
        variants = [user_input], // Add original user input as first array item. Items may be added in the proceeding logic. The array will then be converted to a string (with '|' separator) and passed to Fuse.js
        tests, common_word_part, variant, replace_string, match_found;

    $.each([].concat(test), function() { // Loop through array of groups of variant strings, e.g. 'fae|frae|thrae', 'sc|sk' or '-ie|-y|-ae'

        if (this.indexOf('|') > -1) { // Each test must use | character
            tests = this.toLowerCase().split('|');

            $.each(tests, function() { // Each variant string, e.g 'frae', 'sc' or '-ie'

                var str = this;

                // Does this varient string affect word ending, e.g. '-ie'?
                if (str.charAt(0) === '-' && user_input.substring(user_input.length - str.length + 1) == str.substring(1, str.length)) {

                    $.each(variants, function() { // Each variant string, e.g '-ie'
                         // >
                         var v = this;

                         common_word_part = v.substring(0, v.length - str.length + 1); // Get common (leading) part of word, to which we'll append the other endings (str.length - 1 to account for the leading '-')

                         $.each(tests, function() { // Loop through each variant string (e.g. '-ie') in this group again

                             variant = common_word_part + this.substring(1, this.length);

                             if (variants.indexOf(variant) == -1) { // If this variant isn't already in 'variants' array
                                 variants.push(variant); // Add it
                             }
                         });
                    });



                    // return false; // Exit tests loop for this variant string
                } else {

                    // Non-word-ending string. Standard string replace at any index in the user input

                    // match_found = false; // Flag

                    $.each(tests, function() { // Each variant string, e.g 'frae' or 'sc'

                        var str = this;
                        $.each(variants, function() {
                            var v = this;

                            if (this.indexOf(str) > -1) { // Does this variant contain a string that needs replaced?

                                // match_found = true;
                                replace_string = str;

                                $.each(tests, function() { // (e.g. 'frae' or 'sc')

                                    if (this.toString() != replace_string && variants.indexOf(v.replace(replace_string, this)) == -1) {
                                        variants.push(v.replace(replace_string, this));
                                    }
                                });
                            }
                        });
                    });

                    // if (match_found) return false; // Exit tests loop for this variant string
                }
            });
        }
    });

    if (variants.length > 1) return variants.join('|'); // Fuse.js OR syntax

    return input;
}

console.log(
    processVariants('sclenty', ['sc|sk', '-ie|-y|-ae'])
);
