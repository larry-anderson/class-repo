//https://dev.to/ivanadokic/javascript-array-methods-filter-map-reduce-and-sort-32m5
//***MAP METHOD QUESTIONS***

//1. Square all elements of an array:

const numbers1 = [1, 2, 3, 4, 5];
// Expected output: [1, 4, 9, 16, 25];

const squaredNumbers = numbers1.map(x => x ** 2);
console.log(squaredNumbers);
//2.Convert all strings in an array to uppercase:

const words1 = ['hello', 'world'];
// Expected output: ['HELLO', 'WORLD']
const uppercaseWords = words1.map(words => words.toUpperCase());
console.log(uppercaseWords);
//3.Extract the names from an array of objects:

const users1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];
// Expected output: ['Alice', 'Bob']
const userNames = users1.map(user => user.name);
console.log(userNames);
//4.Add a specific number to each element in an array:

const numbers2 = [10, 20, 30];
const addValue = 5;
// Expected output: [15, 25, 35]
const updatedNumbers = numbers2.map(num => num + addValue);
console.log(updatedNumbers);

//5.Convert an array of numbers to their string equivalents:


const numbers3 = [1, 2, 3];
// Expected output: ['1', '2', '3']
const stringNumbers = numbers3.map(num => num.toString());
console.log(stringNumbers);
//***FILTER QUESTIONS***

//1.Filter out even numbers from an array:

const numbers4 = [1, 2, 3, 4, 5];
// Expected output: [2, 4]

const evenNumbers = numbers4.filter(num => num % 2 === 0);
console.log(evenNumbers);

//2.Filter out words longer than 4 characters:

const words2 = ['apple', 'cat', 'banana', 'dog'];
// Expected output: ['apple', 'banana']

const longWords = words2.filter(word => word.length > 4);

console.log(longWords);

//3.Filter objects based on a property value:

const users2 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const ageLimit = 30;
// Expected output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

const olderUsers = users2.filter(user => user.age >= ageLimit);
console.log(olderUsers);

//4.Filter out positive numbers from an array:

const numbers5 = [-3, -2, 0, 1, 2];
// Expected output: [1, 2]

const positiveNumbers = numbers5.filter(num => num > 0);
console.log(positiveNumbers);

//5.Filter out true values from an array:

const values = [0, 1, false, 2, '', 3];
// Expected output: [1, 2, 3]

const trueValues = values.filter(Boolean);
console.log(trueValues);

//***SORT METHOD QUESTIONS***

//1.Sort an array of numbers in ascending order:

const numbers6 = [3, 1, 4, 1, 5, 9];
// Expected output: [1, 1, 3, 4, 5, 9]

const order = numbers6.sort((a, b) => a - b);
console.log(order);

//2.Sort an array of strings alphabetically:

const words3 = ['banana', 'apple', 'cherry'];
// Expected output: ['apple', 'banana', 'cherry']

const alphabetically = words3.sort();
console.log(alphabetically);

//3.Sort an array of objects by a numeric property:

const users3 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];
// Expected output: [
//   { name: 'Charlie', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 }
// ]

const older = users3.sort((a, b) => a.age -b.age).map(a => a.name); 
console.log(older);

//4.Sort an array of objects by a string property:

const users4 = [
    { name: 'Charlie', age: 20 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];
// Expected output: [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 }
// ]

const sortedNames = users4.sort((a,b) => a.name.localeCompare(b.name));
console.log(sortedNames)
//5.Sort an array of numbers in descending order:

const numbers7 = [3, 1, 4, 1, 5, 9];
// Expected output: [9, 5, 4, 3, 1, 1]

const assBackwards = numbers7.sort((a, b) => b - a);
console.log(assBackwards);

//***REDUCE METHOD QUESTIONS***

//1.Sum all elements in an array:

const numbers8 = [1, 2, 3, 4, 5];
// Expected output: 15

const sum = numbers8.reduce((a,b) => a + b, 0);
console.log(sum)

//2.Find the maximum value in an array:

const numbers9 = [1, 5, 3, 9, 2];
// Expected output: 9

const max = numbers9.reduce((a,b) => (b > a ? b : a), numbers9[0]);
console.log(max);
//3.Count the occurrences of each element in an array:

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
// Expected output: { apple: 2, banana: 3, orange: 2 }

const numFruit = fruits.reduce((a,fruit) => {
    a[fruit] = (a[fruit] || 0) + 1;
    return a;
},[]);
console.log(numFruit);
//4.Flatten a nested array:

const nestedArray = [[1, 2], [3, 4], [5]];
// Expected output: [1, 2, 3, 4, 5]

const flat = nestedArray.reduce((a,arr) => a.concat(arr),[]);
console.log(flat);

//5.Create a single object from an array of objects using a specific property as the key:

const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' }
];
// Expected output: { '1': { id: '1', name: 'Alice' }, '2': { id: '2', name: 'Bob' }, '

const single = users.reduce((a, user) => {
    a[user.id] = user;
    return a;

},{});
console.log(single);



