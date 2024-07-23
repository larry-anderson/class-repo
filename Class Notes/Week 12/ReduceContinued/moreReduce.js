//1.Calculate the product of all elements in an array.

const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce((acc, num) => acc * num, 1);
// product: 120
console.log(product);
//2.Find the longest string in an array.

const strings = ['apple', 'banana', 'cherry', 'date'];
const longestString = strings.reduce((acc, string) => string.length > acc.length ? string : acc, '');
// longestString: 'banana'
console.log(longestString);

//3.Group an array of objects by a property.

const people = [
    { name: 'Alice', group: 'A' },
    { name: 'Bob', group: 'B' },
    { name: 'Charlie', group: 'A' },
    { name: 'David', group: 'B' }
];
const groupedByGroup = people.reduce((acc, person) => {
    (acc[person.group] = acc[person.group] || []).push(person);
    return acc;
}, {});

// groupedByGroup: {
//   A: [{ name: 'Alice', group: 'A' }, { name: 'Charlie', group: 'A' }],
//   B: [{ name: 'Bob', group: 'B' }, { name: 'David', group: 'B' }]
// }

console.log(groupedByGroup);

//4.Count the total number of characters in an array of strings.

const strings4 = ['apple', 'banana', 'cherry'];
const totalCharacters = strings4.reduce((acc, char) => acc + char.length, 0);
// totalCharacters: 18

console.log(totalCharacters);

//5.Calculate the average of an array of numbers.
const numbers5 = [1, 2, 3, 4, 5];
const average = numbers5.reduce((acc, num, i, arr) => {
    acc += num;
    if (i === arr.length - 1) {
        return acc / arr.length
    }
    return acc
}
    , 0);


// average: 3

console.log(average);

//6.Flatten a deeply nested array.
const nestedArray = [1, [2, [3, [4, 5]]]];
const flatten = (arr) => arr.reduce((acc,val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
const flattenedArray = flatten(nestedArray);
// flattenedArray: [1, 2, 3, 4, 5]

console.log(flattenedArray);

//7. Convert an array of arrays into an object.
const keyValuePairs = [['a', 1], ['b', 2], ['c', 3]];
const obj = keyValuePairs.reduce((acc, num) => {
    acc[num[0]] = num[1];
    return acc;
}, {});
// obj: { a: 1, b: 2, c: 3 }
console.log(obj);


//8.Remove duplicates from an array.

const numbers8 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers8.reduce((acc, num) => {
    if(!acc.includes(num)) {
        acc.push(num);
    }
    return acc;
} , []);
// uniqueNumbers: [1, 2, 3, 4, 5]

console.log(uniqueNumbers);

//9.Sum only the even numbers in an array.
const numbers9 = [1, 2, 3, 4, 5, 6];
const sumOfEvens = numbers9.reduce((acc, num) => {
    if (num % 2 === 0) {
        return acc + num;
    }
    return acc;
}, 0);
// sumOfEvens: 12

console.log(sumOfEvens);

//10.Transform an array of objects into a single object with keys derived from a property.
const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' }
];
const userObject = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;

},{});
// userObject: {
//   '1': { id: '1', name: 'Alice' },
//   '2': { id: '2', name: 'Bob' },
//   '3': { id: '3', name: 'Charlie' }
// }

console.log(userObject);
