// console.log(null > 0); // false
console.log(null >= 0); // true due to type coercion, null is converted to 0 for comparison
console.log(undefined > 0); // false
console.log(undefined == 0); // false
// console.log(undefined >= 0); // false
console.log(NaN === NaN); // false due to type coercion, NaN is converted to 0 for comparison
console.log("2" === 2); // false due to type coercion, string is converted to number for comparison