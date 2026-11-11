const useremail = ""
if(useremail){
    console.log("User email exists");
} 
else {
    console.log("User email does not exist");
}
// falsy values = false, 0, "", null, undefined, NaN
// truthy values = true, 1, "string", [], {}, function(){}
// also ?? is called as null coalescence operator, null or undefined is omly where it works and 
// shows the non empty value ? is similar to c++. 