function sayMyName(name){
    console.log(name);
}

// sayMyName("Alice");
// 
function addNumbers(a, b){
    // 
    return a + b;
}

// let sum = addNumbers(5, 10);
// console.log("sum: ", sum);
function loginUser(username){
    if(!username){
        return "Please enter a valid username";
    }
    return `Welcome ${username}`;
}
loginUser("Ashutosh");//you just called it but not to store it
//  in a variable or print it to the console
// let user = loginUser("Ashutosh");
// console.log(user);
// now learning rest operator..
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,800));//it prints 200 only so we use ... this rest and also called spread operator depends on the use case;
const user = {
    username : "Ashutosh",
    price : 1999
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);



