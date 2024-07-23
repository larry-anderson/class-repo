// Exercise 1: Extracting Digits
// Task: Write a regex to extract all digits from a given string.
const str = "There are 3 cats and 4 dogs."
const regex = /\d+/g;
const matches = str.match(regex);
console.log(matches); 



// Exercise 2: Finding All Vowels
// Task: Write a regex to find all vowels (a, e, i, o, u) in a given string.
const str2 = 'There are some vowels in this string';
const regex2 = /[aeiou]/gi;
const matches2 = str2.match(regex2);
console.log(matches2);


// Exercise 3: Extracting Words
// Task: Write a regex to extract all words from a given string. 
const str3 = 'There are a few words in this string';
const regex3 = /\b\w+\b/g; 
const matches3 = str3.match(regex3);
console.log(matches3);


// Exercise 4: Finding Email Addresses
// Task: Write a regex to find all email addresses in a given string.
const str4 = 'larr!#$larr@gmail.com';
const regex4 = /[a-zA-Z0-9!#$%&*]+@[a-zA-Z0-9.]{2,6}/g;
const matches4 = str4.match(regex4);
console.log(matches4);

// Exercise 5: Extracting Hashtags
// Task: Write a regex to extract all hashtags from a given string.
const str5 = '#######';
const regex5 = /#+/g;
const matches5 = str5.match(regex5);
console.log(matches5);


// Exercise 6: Finding HTML Tags
// Task: Write a regex to find all HTML tags in a given string.
const str6 = "<div class='golden'>this is my div</div>"
const regex6 = /(<[^>]+>)|([^<]+)/;
const matches6 = str6.match(regex6);
console.log(matches6);


// Exercise 7: Extracting Dates
// Task: Write a regex to extract dates in the format YYYY-MM-DD from a given string.
const str7 = "2024-05-29";
const regex7 = /\d{4}-\d{2}-\d{2}/g;
const matches7 = str7.match(regex7);
console.log(matches7);


// Exercise 8: Extracting Prices
// Task: Write a regex to extract prices from a given string (e.g., $4.99, $100.00).

const str8 = 'The items cost $4.99, $100.00 Im being stupid';
const regex8 = /\$\d+(\.\d{2})?/g;
const matches8 = str8.match(regex8);
console.log(matches8);



// Exercise 9: Finding IP Addresses
// Task: Write a regex to find all IPv4 addresses in a given string.



const str9 = "Connect to 192.168.0.1 or 10.0.0.1 for setup.";
const regex9 = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
const matches9 = str9.match(regex9);
console.log(matches9);

// Exercise 10: Extracting Time
// Task: Write a regex to extract time in the format HH
// from a given string.
const str10 =  "The meeting is scheduled at 14:30 and 16:00.";
const regex10 = /\d{2}:\d{2}/g;
const matches10 = str10.match(regex10);
console.log(matches10);