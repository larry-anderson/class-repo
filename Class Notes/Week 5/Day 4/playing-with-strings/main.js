/******************
 * YOUR CODE HERE *
 ******************/

function xify(str) {
  let newX = "";
  while(newX.length < str.length) {
    newX += "x";
  }
  return newX;
}

function yellingChars(str) {
  let output ="";
  for(let i = 0; i < str.length; i ++) {
    output = output + str[i] + "!";
  }
  return output;
}

function indexedChars(str) {
  let output ="";
  for(let i = 0; i < str.length; i ++) {
    output += i + str[i];
  }
  return output;
}

function numberedChars(str) {
  let output ="";
  for(let i = 0; i < str.length; i ++) {
    output += "(" + (i + 1) + ")" +str[i];
  }
  return output;
}

// function exclaim(str) {
//   let output = "";
//   for(let i = 0; i < str.length; i ++) {
//     if (str[i] === "?" || str[i] === "."){
//       output += "!";
//     } else {
//       output += str[i];
//     }
//   }
//   return output;
// }

function exclaim(str) {
  let output = "";
  let i = 0; //initialize variable
  while (i < str.length) {
    if (str[i] === "?" || str[i] === "."){
            output += "!";
          } else {
            output += str[i];
          }
          i++
  }
  return output;
}

// function repeatIt(str, n) {
//   let repeatedString = '';

//   while (n > 0) {
//     repeatedString += str;
//     n--;
//   }

//   return repeatedString;
// }

function repeatIt(str, num) {
  let repeat = 0;
  let words = "";
  while (repeat < num) {
    words += str;
    repeat++;
  }
  return words;
  
}

console.log(repeatIt("larry", 10));

function truncate(str) {
  if (str.length <= 18) {
    return str;
  } else {
    return str.slice(0, 15) + '...';
  }
}
console.log(truncate("jhkl jkl;hjk;hjuhj;hj;hjkh"));

function emailify(name) {
  // Split the name into first and last parts
  const parts = name.split(' ');

  // Extract the first letter of the first name and the full last name
  const emailPrefix = parts[0][0] + parts[1];

  // Add the domain suffix
  const email = emailPrefix.toLowerCase() + '.prsvr@gmail.com';

  return email;
}

console.log(emailify('Larry Anderson'))
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
