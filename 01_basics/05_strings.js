const name = "Ashutosh";
const repoCount = 6
// console.log(name + repoCount + " repos"); // type coercion
// usually we dont use this we use
//  backticks instead of + operator
console.log(`Hello ${name} you have ${repoCount} repos`); // template literals
// this is called as string interpolation
const gameName = new String('Witcher');
// this is also a string 
// but it is an object and
//  not a primitive data type.
// console.log(gameName[0]);
// this is a key value pair where 
// key is index and value is
//  character at that index.
// console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.replace('Witcher', 'Cyberpunk'));
console.log(gameName.slice(-7, -2));
// this is a method to extract
//  a portion of the string.
