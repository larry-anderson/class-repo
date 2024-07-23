function isEvenlyDivisible(num1, num2) {
return num1 % num2 === 0;
}

function halfSquare(num) {
  return num ** 2 / 2;
}

function isLong(string) {
  return string.length > 14;
}

function exclaim(str) {
  return str.split("!")[0] + "!"
}

function countWords(str) {
  return str.split(" ").length
}

function containsDigit(str) {
  const validation = '0123456789'
  for(let char of str) {
    if(validation.includes(char)){
      return true
    }
  }
  return false
}

function containsLowerCase(string) {
  return string.toUpperCase() !== string
}

console.log(containsLowerCase("hifaesoHOIHAREIUOGRFHhgraeiohuaireo"))

function containsUpperCase(string) {
  return string.toLowerCase() !== string
}

function containsNonAlphanumeric(string) {
  const validator = "abcdefghijklmnopqrstuvwxyz1234567890"
  for(let char of string){
    if(validator.includes(char.toLowerCase())){
      continue
      
    } else {
      return true;
    }
  }
  return false
}

function containsSpace() {
}

function digits() {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy(arr) {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
