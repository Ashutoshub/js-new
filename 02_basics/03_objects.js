// Objects are collections of key-value pairs.
//  The keys are strings (or Symbols),
//  and the values can be any type, including other objects.
// Also they are of two types by construction: Object literals and Object constructors. 
// singleton is made by constructor function and object literal is made by using {}.
const mysym = Symbol("key1");
const Jsuser = {
    name: "John",
    age: 30,
    [mysym]: "value1",//symbol key is called in[]
    email: "john@example.com",
    isLoggedIn: true,
    location : "USA"
};
// object.create(Jsuser);//constructor function
// console.log(Jsuser.name); // Output: John
// console.log(Jsuser["email"]);
// console.log(Jsuser[mysym]); // Output: value1 and is accesses by [].
Jsuser.email = "john@microsoft.com"; // Update the email property
console.log(Jsuser["email"]); // Output: john@microsoft.com
Jsuser.greeting = function() {
    console.log(`Hello, my name is ${this.name}.`);
}
Jsuser.greeting(); // Output: Hello, my name is John.
