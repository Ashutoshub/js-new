const score = 400;
const balance = new Number(100);
// console.log(balance);
// console.log(balance.toFixed(2));
const otherBalance = 1223.1234;
// console.log(otherBalance.toPrecision(2));
// this is a method to format a
//  number to a specified number
//  of significant digits.
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));
// this is a method to format 
// a number to a string 
// representation based on the specified locale.
// +++++++++++++ Math +++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.77));
console.log(Math.sqrt(36));
console.log(Math.pow(2, 3));
console.log(Math.random());/*lies between 0 and 1*/
console.log(Math.floor(Math.random() * 10) + 1);/*lies between 1 and 10*/
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);/*lies between 10 and 20*/