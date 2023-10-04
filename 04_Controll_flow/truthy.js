const userEmail = "vikas.ai"
const isLoggedIn = []

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Dont have user email")
}

// Truthy and Falsy values

// false values :
//          false, 0, -0, BigInt 0n, "", null, undefined, Nan

// Truthy values :
//          "0", "false", " ", [], {}, function(){},  


 if(isLoggedIn.length === 0){
    console.log("Array is empty")
 }


 const emptyObj = {}
 if(Object.values(emptyObj).length === 0){
    console.log("Object is empty")
 }

 // Nullish Coalescing Operator (??): null undefined

 let val1;
 //val1 = 5 ?? 10 // 5 will be output

 // in this case except to null if there is any other valu available than that value will be assing or else null will be assigned
 val1 = null ?? 10 
 

 console.log(val1)
 // Terniary Operator 
 
 // condition ? true : false

 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80")

 


