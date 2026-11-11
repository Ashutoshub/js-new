let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}
// break and continue;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        break; // exit the loop when the value is 3
    }
    console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        continue; // skip the iteration when the value is 3
    }
    console.log(arr[i]);
}