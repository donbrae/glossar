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

                        var test = this;

                        $.each(variants, function() {
                            var variant = this;

                            if (user_input.indexOf(test) > -1) { // Word that needs replaced found

                                match_found = true;
                                replace_word = this;

                                $.each(tests, function() {

                                    if (this.toString() != replace_word) {
                                        variants.push(variant.replace(replace_word, this));
                                    }
                                });
                            }
                        });
                    });

                    if (match_found) return false; // Exit tests loop for this variant
                }
            });
        }
    });

    if (variants.length > 1) return variants.join('|'); // Fuse.js OR syntax
    return input;
}

console.log(
    processVariants('sklentie', ['-ie|-y|-ae', 'sc|sk'])
);
