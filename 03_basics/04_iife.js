(function chai(){
    console.log(`DB Connected`)
})(); //this is iife for next immediately invoked function exp use ';'.

((name) =>{
    console.log(`db 2 is connected, ${name}`)
})('Ashutosh')