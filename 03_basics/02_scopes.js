//var c = 300 //this is called as global scope
let a = 300
if(true) {
    let a = 10
    const b = 20
    // console.log("Inner a : ",a);
    
    //var c = 30
}// this is called as block scope;
// console.log(a);// now this is in global scope.
// console.log(b);// but c is printed that is the reason we dont use var .
// console.log(c);//you might be thinking this is all same but ...
// this {} is known as scope, 
function one(){
    const username = "Ashutosh"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two();
    
}

// one();
// +++++++++++ interesting +++++++
