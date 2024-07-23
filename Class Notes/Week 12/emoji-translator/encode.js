// This file contains the encode function, which translates each letter of the input text into a corresponding emoji.

// Function: encode(sentence)

// Takes a string as input.
// Iterates over each character in the string.
// Checks if the character has a corresponding emoji in the emojis array based on the letter attribute.
// Replaces the character with the corresponding emoji.
// Returns the resulting string with emojis.

const encode = function(sentence) {
    let result = '';
    for (const char of sentence) {
        let found = false;
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                result += emoji.symbol;
                found = true;
            }
        }

        if (found === false) {
            result += char;
        }
    }

    return result;
}
