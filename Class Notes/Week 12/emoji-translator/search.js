// This file contains the search function, which searches for emojis that match the input text.

// Function: search(searchStr)

// Takes a string as input.
// Filters the emojis array to find emojis whose name attribute includes the input string (case-insensitive).
// Returns an array of matching emojis.

const search = function(searchStr) {
    return emojis.filter(function(emoji) {
        return emoji.name.includes(searchStr.toLowerCase());
    }) 
}
