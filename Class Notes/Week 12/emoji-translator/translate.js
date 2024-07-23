// This file contains the translate function, which translates specific words in the input text into their corresponding emojis.

// Function: translate(sentence)

// Takes a string as input.
// Splits the string into words.
// Iterates over each word.
// Checks if the word matches the name attribute of any emoji in the emojis array.
// Replaces the word with the corresponding emoji.
// Returns the resulting string with emojis.

const translate = function(sentence) {
    return sentence.split(' ').map((word) => {
        for (const emoji of emojis) {
            if (emoji.name === word.toLowerCase()) {
                return emoji.symbol;
            }
        }

        return word;
    }).join(' ');
}
