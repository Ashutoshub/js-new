// Arrays
const myArray = [1, 2, 3, 4, 5];

// Accessing elements
// console.log(myArray[0]); // Output: 1
// console.log(myArray[2]); // Output: 3

// Modifying elements
// myArray[1] = 20;
// console.log(myArray); // Output: [1, 20, 3, 4, 5]

// // Adding elements
// myArray.push(6);
// console.log(myArray); // Output: [1, 20, 3, 4, 5, 6]

// // Removing elements
// myArray.pop();
// console.log(myArray); // Output: [1, 20, 3, 4, 5]

// // Length of the array
// console.log(myArray.length); // Output: 5

// // Iterating through the array
// for (let i = 0; i < myArray.length; i++) {
//     // console.log(myArray[i]);
// }
// console.log(myArray.includes(3)); // Output: true
// slice or splice
const newArray = myArray.slice(1, 4);
// console.log(newArray); // Output: [2, 3, 4]

const myn2 = myArray.splice(2, 1); // Removes 1 element at index 2
console.log(myArray); // Output: [1, 2, 4, 5]
console.log(myn2); // Output: [3]