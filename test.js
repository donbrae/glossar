/**
 * Process any variants based on user input
 * @param {String} inputs - The string the user types in the search field
 * @param {Array|String} inputs - The value(s) to test against, each item delimited with a '|'
 * @returns {String}
 */
function processVariants(input, test) {
    var variants = [input.toLowerCase()], // Add original user input as first array item
        tests, common_word_part, variant;

    $.each([].concat(test), function() {
        if (this.indexOf('|') > -1) { // Each test must use | character
            tests = this.split('|');
            $.each(tests, function() {
                if (this.charAt(0) === '-' && input.substring(input.length - this.length + 1).toLowerCase() == this.substring(1, this.length).toLowerCase()) { // This test matches ending of user input

                    common_word_part = input.substring(0, input.length - this.length + 1); // Get common (leading) part of word, to which we'll append the other endings (this.length - 1 to account for the leading '-')

                    $.each(tests, function() { // Loop through tests again

                        variant = common_word_part + this.substring(1, this.length).toLowerCase();

                        if (variants.indexOf(variant) == -1) { // If this variant isn't already in 'variants' array
                            variants.push(variant);
                        }
                    });

                    return; // Exit tests loop
                }
            });
        }
    });

    if (variants.length > 1) {
        return variants.join(' | '); // Fuse.js OR syntax
    } else {
        return input;
    }
}

console.log(
    processVariants('afriky', ['frae|fae', '-ie|-y|-ae', 'the |'])
);
