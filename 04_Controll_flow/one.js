// if

 const temperature = 41

// if(2 == "2"){
//     console.log("executed ==")
// }
// if( 2 === "2"){
//     console.log("excuted ===")
// } 



// if(temperature === 40){
//     console.log("temperature is less than 50")
// }
// else{
//     console.log("temperature is greater tha  50")
// }

// console.log("Excuted")


// <, >, <=, >=, !=, ==, ===
// === -> strickely chacked which also checks data type of a variable

const score = 200

if(score > 100){
    let power = "fly"
    console.log(`User power : ${power}`)
}

//console.log(`User power : ${power}`) provide error

const userLoggdIn = true
const debitCard = true
if (userLoggdIn && debitCard) {
    console.log("Allow to buy course");
}

const loggedInFromEmail = true
const loogedInFromGoogle = true

if (loggedInFromEmail || loogedInFromGoogle) {
    console.log("User logged in")
}

