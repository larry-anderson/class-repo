// This file contains the getCategory function, which retrieves emojis from a specific category.

// Function: getCategory(word)

// Takes a category name as input.
// Filters the emojis array to find emojis that include the input category in their categories attribute.
// Returns an array of matching emojis.

const getCategory = function(word) {
    return emojis.filter(function(emoji) {
        return emoji.categories.includes(word);
    });
}
