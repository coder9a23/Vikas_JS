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