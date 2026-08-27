const user = {
    username: "Ashutosh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
//console.log(this);// ()=> is called as arrowfunction;
const chai = ()=>{
    let username = "Ashutosh";
    console.log(this.username); //prints undefined
}
//chai();
const addtwo = (num1, num2) => {
    return num1 + num2;
}
const adtwo = (num1, num2) => (num1 + num2);// just a way of arrow functions.
console.log(adtwo(15 , 45));
