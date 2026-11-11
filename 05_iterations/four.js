// thus for object iteration we use for in loop.
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
// output: a: 1, b: 2, c: 3
const programming = ["js","rb","py","cpp"]
for(const key in programming){
    console.log(key, programming[key]);
}
// output: 0 js, 1 rb, 2 py, 3 cpp
