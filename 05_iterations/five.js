// foreach and callback functions are used
//  to iterate over the values of an array or object.
let arr = [1, 2, 3, 4, 5];
arr.forEach((value) => {
    console.log(value);
});
// output: 1, 2, 3, 4, 5
const mynums = [1,2,3,4,5,6,7,8,9,10];
mynums.filter((value)=> {
    if(value%2==0){
        console.log(value);
    }
})
// filter method is used to filter out the values
//  of an array based on a condition.
// also use .reduce() method.
// it is used to reduce the array to a single value based on a condition.