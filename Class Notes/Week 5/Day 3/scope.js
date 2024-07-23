// Scope
// The context in which variables are called. being global or local
// Window Global Object
// The window object is a global object in the browser environment when working with JavaScript in a web browser. It represents the browser window and serves as the global scope for JavaScript code running in that window.
// Global scope
// Global scope in JavaScript refers to the outermost scope of your code, outside of any function or block. In global scope, variables and functions are accessible from anywhere within your JavaScript code.
// Local scope
// Local scope in JavaScript refers to the scope within a function or a block, where variables and functions are accessible only within that function or block.


//.....................................To Do.................................................
//ES6 in FCC

// FreeCodeCamp (FCC) covers ES6 (ECMAScript 6), also known as ES2015, in its JavaScript curriculum. ES6 introduced significant enhancements and new features to JavaScript, making the language more powerful and expressive.

// Some of the key features introduced in ES6 include:

// let and const: let and const provide block-level scoping, improving upon the variable declaration with var. let allows you to declare variables with block scope, while const is used to declare constants whose values cannot be reassigned.
// Arrow Functions: Arrow functions provide a more concise syntax for writing function expressions. They also lexically bind the this value, simplifying the handling of the this context.
// Template Literals: Template literals allow for easier string interpolation, multiline strings, and expression embedding using backticks (`).
// Destructuring Assignment: Destructuring assignment provides a convenient way to extract values from arrays or objects into variables using a syntax similar to array literals or object literals.
// Spread Operator: The spread operator (...) allows for easy manipulation of arrays and objects. It can be used to spread the elements of an iterable (like an array) into another array or object.
// Rest Parameters: Rest parameters allow functions to accept an indefinite number of arguments as an array, simplifying function definitions and making them more flexible.
// Classes: ES6 introduced class syntax for defining JavaScript classes, providing a more familiar and intuitive way to work with object-oriented programming concepts.
// Promises: Promises provide a more flexible and intuitive way to handle asynchronous operations in JavaScript, replacing callback-based approaches with a more readable and maintainable syntax.
// Modules: ES6 modules offer a standardized way to organize and share code between different JavaScript files, improving code maintainability and facilitating code reuse.

//Compare Scopes of the var and let Keywords

// Variables declared with var are function-scoped. This means they are accessible anywhere within the function in which they are declared.
// Hoisting: Variables declared with var are hoisted to the top of their containing function or global scope. This means you can access the variable before its declaration, but it will have an initial value of undefined.
// No Block Scope: Variables declared with var are not block-scoped. They can leak outside of blocks, leading to unintended consequences or bugs.

// Hoisting: Variables declared with let are hoisted to the top of their containing block, but they are not initialized. Attempting to access the variable before its declaration will result in a ReferenceError.
// Block Scope: Variables declared with let are block-scoped. This means they are accessible only within the block in which they are declared.
// In summary, variables declared with var are function-scoped and are hoisted to the top of their containing function or global scope, while variables declared with let are block-scoped and are not hoisted. Using let can help prevent variable scope issues and lead to more predictable code behavior.

//Basic JS FCC

// Variables: You'll learn how to declare variables using the var, let, and const keywords and how to assign values to them.
// Data Types: You'll explore different data types in JavaScript, including numbers, strings, booleans, arrays, and objects.
// Arithmetic Operators: You'll learn how to perform arithmetic operations such as addition, subtraction, multiplication, division, and modulus.
// String Manipulation: You'll learn various string manipulation techniques, including concatenation, string length, accessing characters, and string methods such as toUpperCase(), toLowerCase(), and charAt().
// Arrays: You'll learn how to create and manipulate arrays, including accessing elements, modifying elements, and using array methods such as push(), pop(), shift(), and unshift().
// Functions: You'll learn how to define and call functions, pass arguments to functions, and return values from functions.
// Conditional Statements: You'll learn how to use if, else if, and else statements to make decisions in your code based on different conditions.
// Loops: You'll learn about for loops, while loops, and do...while loops to iterate over arrays, perform repetitive tasks, and traverse data structures.
// Objects: You'll learn about objects in JavaScript, including how to create object literals, access object properties, and use object methods.
// Nested Objects and Arrays: You'll learn how to work with nested objects and arrays, accessing and manipulating their elements.
// Switch Statements: You'll learn how to use switch statements as an alternative to multiple if...else if statements for making decisions based on different conditions.
// Global vs. Local Scope: You'll learn about variable scope in JavaScript, including global scope, function scope, and block scope.

// Global Scope and Functions

// Local Scope and Functions
// Global vs. Local Scope in Functions

// Global and local scopes in functions refer to where variables are accessible and can be modified within JavaScript functions.
// Global Scope:
// Accessibility: Variables declared outside of any function, or declared inside a function without the use of var, let, or const, have global scope. They are accessible from anywhere in the code, including inside functions.
// javascript
// Copy code
// var globalVariable = 10;

// function myFunction() {
//     console.log(globalVariable); // Accessible
// }

// myFunction(); // Outputs: 10
// Lifetime: Global variables persist throughout the lifetime of the JavaScript program. They are available from the point they are declared until the program terminates.
// Window Object (in browser): Global variables become properties of the window object in the browser environment.
// Local Scope:
// Accessibility: Variables declared inside a function using var, let, or const are local to that function and can only be accessed from within that function. They are not accessible from outside the function.
// javascript
// Copy code
// function myFunction() {
//     var localVar = 20;
//     console.log(localVar); // Accessible
// }

// myFunction(); // Outputs: 20
// console.log(localVar); // Throws an error: localVar is not defined
// Block Scope (for variables declared with let and const): If a variable is declared inside a block (e.g., an if statement or a loop) using let or const, its scope is limited to that block.
// javascript
// Copy code
// function myFunction() {
//     if (true) {
//         let blockVar = 30;
//         console.log(blockVar); // Accessible
//     }
//     console.log(blockVar); // Throws an error: blockVar is not defined
// }

// myFunction(); // Outputs: 30
// Lifetime: Local variables exist only within the function in which they are declared and are destroyed once the function execution completes. They cannot be accessed from outside the function, and each function invocation creates a new instance of local variables.
// Understanding global and local scopes is crucial for writing JavaScript code that is organized, maintainable, and free from unintended side effects. It helps prevent naming conflicts and promotes encapsulation of functionality within functions.