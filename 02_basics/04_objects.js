// we will make object using constructor fn here.
// const tinderuser = new Object(); //is a singleton object.
const tinderuser = {} //this is non singleton object. we can make multiple objects using this.
tinderuser.name = "Jane";
tinderuser.age = 25;
tinderuser.id = "abc123";
tinderuser.isLoggedIn = false;
// console.log(tinderuser);
const regularUser ={
    email : "some@gmail.com",
    fullname : {
        username : {
            firstname : "John",
            lastname : "Doe"
        }
    }
}
// console.log(regularUser.fullname.username.firstname); // Output: John
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// const mergedObj = Object.assign({}, obj1, obj2);
const mergedObj = { ...obj1, ...obj2 }; // Using spread operator to merge objects
// console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }
// console.log(tinderuser);
// console.log(Object.keys(tinderuser)); // Output: [ 'name', 'age', 'id', 'isLoggedIn' ]
// console.log(Object.values(tinderuser)); // Output: [ 'Jane', 25, 'abc123', false ]
// console.log(Object.entries(tinderuser)); // Output: [ [ 'name', 'Jane' ], [ 'age', 25 ], [ 'id', 'abc123' ], [ 'isLoggedIn', false ] ]

const course = {
    title: "JavaScript Basics",
    instructor: "John Doe",
    duration: 10,
    level: "Beginner"
}
// console.log(course.instructor);
const {instructor : inst} = course;
console.log(inst); // Output: John Doe
// this is called destructuring of object. we can also destructure nested objects.

