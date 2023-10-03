var a = 300 // it creates scope conflicts
const b = 200

if(true){
    //var a = 111
    a = 111
    const b = 123
    console.log("Innser a :"+a)
    console.log("Inner b :"+b)
}

console.log("Outer a :"+a) // 111 which is if block of scope is returing 
console.log("Outer b :" + b)

// nesting function and scope

function one(){
    const username = "vikas"

    function two(){
        const website = "youtube"
        console.log(username)
    }

   // console.log(website)// error not scope 

    two()
}
//one()

// +++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++
//                  Simple Function 
 
addOne(8) // will work fine

function addOne(num){
    return num + 1
}




//              Expression

addTwo(8) // give an error because a varialb is holding a function and variable can't be accessed before declaration 

const addTwo = function(num){
    return num +2
}



