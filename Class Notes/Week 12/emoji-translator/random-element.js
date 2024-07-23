// This file contains the randomElement function, which returns a random element from an array.

// Function: randomElement(arr)

// Takes an array as input.
// Returns a random element from the array using Math.random().

const randomElement = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
