function sayMyName(){
    console.log("V")
    console.log("i")
    console.log("k")
    console.log("a")
    console.log("s")
}

//sayMyName -> Refrance of a function
sayMyName() // calling of a function


// Addition of two numbers

// function add(number1, number2){
//     console.log(number1 + number2)
// }

// add(1, 4)// 5 will be answer
// add(1, "s") // 1s output
// add(1, null) // 1 output

function add(number1, number2){
    return number1 + number2
}

console.log(add(45,2))

function loggedIn(userName){
    if(!userName){
        console.log("Please enter a username")
        return
    }

    return `${userName} just logged in`
}

console.log(loggedIn("Vikas"))

// Default parameter

function newLoggedIn(username = "Sam"){
    return `${username} just logged in`
}

console.log(newLoggedIn());
console.log(newLoggedIn("Vikas"))

// Rest operator in function (...)

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(1, 2, 3, 4))

// How to pass an object to a function 
const user = {
    userName : "Vikas",
    prince : 1000
}

function handleObject(objects){
    console.log(`Username is ${objects.userName} and price is ${objects.prince}`)

}

//handleObject(user)

handleObject({
    userName : "Same",
    prince : 4534
})


// How to pass array to a function

const myArray = [12, 34, 24, 14, 98]

function returnSecondArray(myArray){
    return myArray[1]
}

console.log(returnSecondArray(myArray))
console.log(returnSecondArray([12, 34, 53, 66, 23]))