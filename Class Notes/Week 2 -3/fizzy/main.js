/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function fizzBuzz(n) {



// a place to store the results (list,array)
const results = [];

for (let i = 1; i <= n; i += 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    results.push('FizzBuzz');
  } else if (i % 3 === 0) {
    results.push('Fizz');
  } else if (i % 5 === 0) {
    results.push('Buzz');
  } else {
    results.push(i);
  }
}

return results;

}
console.log(fizzBuzz(10))
// Return an array containing the numbers 1 to N
// if the value is a multiple of 3 push the value "Fizz" into the result
// if the value is a multiple of 5 push the value "Buzz" into the result
// if the value is a multiple of 3 and 5 push the value "FizzBuzz" into the result
// else
//push the value itself

//return the results


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
