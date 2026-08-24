// Primitive data types summary(call by value)
// 1. Number: Represents numeric values, including integers and floating-point numbers.
// 2. String: Represents sequences of characters enclosed in single or double quotes.
// 3. Boolean: Represents logical values, either true or false.
// 4. Null: Represents the intentional absence of any object value.
// 5. Undefined: Represents a variable that has been declared but has not been assigned a value.
// 6. Symbol: Represents a unique and immutable value, often used as an identifier for object properties.
// 7. BigInt: Represents whole numbers larger than the maximum safe integer value for the Number type.
// Non-Primitive data types summary(call by reference)
// 1. Object: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be of any data type.
// 2. Array: Represents an ordered list of values, which can be of any data type, including other arrays or objects.
// 3. Function: Represents a reusable block of code that can be invoked with arguments and may return a value.
// 4. Date: Represents a specific point in time, allowing for date and time manipulation.
// 5. RegExp: Represents a regular expression pattern used for pattern matching and text manipulation.
// javascript is a dynamically typed language, 
// which means that variables can hold values of different data types at different times.
//  The type of a variable can change during the execution of a program,
//  and JavaScript automatically performs type coercion when necessary.
// const temp = null
// console.log(typeof temp); // object
// const id = Symbol('124');
// console.log(typeof id);
// const anotherId = Symbol('124');
// console.log(id === anotherId);
const bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue);
const heros = ["Iron Man", "Spider Man", "Thor", "Hulk"];
console.log(typeof heros);
const myObj = {
    name: "Ashutosh",
    age: 22,
    isLoggedIn: false
}
console.log(typeof myObj);
const myFunc = function() {
    console.log("Hello, World!");
}
console.log(typeof myFunc);
myFunc();
// ++++++++++++++++++++++++++++++
// stack(primitives) and
//  heap(non-primitives)
// In stack , we get copy of the value 
// and in heap we get reference of the value 
