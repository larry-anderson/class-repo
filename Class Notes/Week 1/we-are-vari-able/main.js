/******************
 * YOUR CODE BELOW *
 ******************/
let myFirstName = "Larry";
let myLastName = "Anderson";
let myFavoriteCeleb = "the flash";
let mySentence = "Hi my name is " + myFirstName + " " + myLastName + ", and my favorite celebrity is " + myFavoriteCeleb;
console.log(mySentence)
let myLuckyNum = 69;
let myAge = 40;
let myHeight = 6336;
let myFavoriteYear = 2008;

let mySum = 5 + 2317 + 36;
let myProduct = (232 * 43) / 2 + 4;
myHeightAndAge = myAge + myHeight;
console.log(myHeightAndAge)

/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof myFirstName === "undefined") {
  myFirstName = undefined;
}

if (typeof myLastName === "undefined") {
  myLastName = undefined;
}

if (typeof myFavoriteCeleb === "undefined") {
  myFavoriteCeleb = undefined;
}

if (typeof mySentence === "undefined") {
  mySentence = undefined;
}

if (typeof myLuckyNum === "undefined") {
  myLuckyNum = undefined;
}

if (typeof myAge === "undefined") {
  myMentalAge = undefined;
}

if (typeof myHeight === "undefined") {
  myHeight = undefined;
}

if (typeof myFavoriteYear === "undefined") {
  myFavoriteYear = undefined;
}

if (typeof mySum === "undefined") {
  mySum = undefined;
}

if (typeof myProduct === "undefined") {
  myProduct = undefined;
}

if (typeof myHeightAndAge === "undefined") {
  myHeightAndAge = undefined;
}

module.exports = {
  myFirstName,
  myLastName,
  myFavoriteCeleb,
  mySentence,
  myLuckyNum,
  myAge,
  myHeight,
  myFavoriteYear,
  mySum,
  myProduct,
  myHeightAndAge,
};
