// Immediately Invoked Function Expression (IIFE)
 
// We use IFFE in order to restrict Global scope polution in an function and also I want ki immediately execute ho jaye function


// function chai(){
//     console.log(`DB connected`)
// }
// chai()

// Note once IIFE gets end put ";" at the end 
(function chai(){
    // named IFFE
    console.log(`DB connected`)
})(); // Don't forget to use ";" else furter code will generate error

((name) => {
    // un-named  IFFEE
    console.log(`DB connected Two ${name}`)
})("vikas");