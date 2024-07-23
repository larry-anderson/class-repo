// This file contains the madlib function, which replaces words in the input text with random emojis from the same category.

// Function: madlib(sentence)

// Takes a string as input.
// Splits the string into words.
// For each word, retrieves the category of the word using the getCategory function.
// If the word has a matching category, replaces it with a random emoji from that category using the randomElement function.
// Returns the resulting string with emojis.

const madlib = function(sentence) {
    return sentence.split(' ').map((word) => {
        const category = getCategory(word);
        if (category.length === 0) {
            return word;
        } else {
            return randomElement(category).symbol;
        }
    }).join(' ');
}
