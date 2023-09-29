// Primitive data or Call By Value

// Changing in copied data reflects to main data
// 7 types : String, Number, Boolean, null, undefined, Symbol
// const score = 100
// const scoreValue = 100.3

// const isLoggeIn = false
// const outsideTemp = null
// const id = Symbol('123')
// const anoterId = Symbol('123')

// console.log(id === anoterId) // false



// Refrance (Non-primitive)

// works on memory refrence
// Arrays, objects, Functions

const heros = ["Saktiman", "Naagraj", "Doga"]
const myObj ={
    name : "Vikas",
    aga : 22,
    isMarridge : false
}

console.log(heros)
console.log(myObj)


const myFunction = function(){
    console.log("Hello World!!!")
}
myFunction();