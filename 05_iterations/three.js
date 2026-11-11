// some array specific loops 
// for of loop is used to iterate over the values of an array or object.
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}
// output: 1, 2, 3, 4, 5
// Maps , they have unique values and copy cant be made.
// it is iterable and can be looped through using for of loop.
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// output: a: 1, b: 2, c: 3
// but remember objects i.e. {} are not iterable.
// reason is that they are not ordered and do not have a length property.
// for in loop in maps is not recommended as it will not give the expected output.
// reason is that for in loop will iterate over the keys of the map and not the values.