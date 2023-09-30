const score = 100
// console.log(score)

// explicite define a variable as Number type
// This being a proper nuber balance has different properties

const balance = new Number(100)
// console.log(balance)


// First method -> tostring()

// console.log(balance.toString())
// console.log(typeof balance) // string or object
// Now here we can use sting properties
// console.log(balance.toString().length)

// toFixed() -> used to fix a numbers after decimal
// console.log(balance.toFixed(2))// 100.00


const otherNumber = 45.77
const otherNumber1 = 223.666
const otherNumber3 = 3455.343
// toPrecision() -> gives precised value and also make the values round figure
// console.log(otherNumber.toPrecision(3)) // 45.8

// console.log(otherNumber1.toPrecision(3)) // 224
// console.log(otherNumber3.toPrecision(3))

const hundreds = 100000000

// toLocalString -> make a number more readable like 100000 -> 1,000,00
// console.log(hundreds.toLocaleString('en-IN'))


// ++++++++++++ Maths +++++++++++++

// console.log(Math.abs(-4)) // makes a number positive 
// console.log(Math.round(3.5)) // 4
// console.log(Math.round(45.22)) // 45
// console.log(Math.floor(34.99)) // 34
// console.log(Math.ceil(45.3)) // 46

// rendom() -> returns a number between 0-1
console.log(Math.random()) // return any number between 0-1

console.log((Math.floor(Math.random()*10) + 1)) // will return between 1 - 10 not a decimal


console.log((Math.floor(Math.random()*100) + 1)) // will return between 1 - 100 not a decimal

// If i want to get number between min to max 
const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min) + 1 ) + min))
 
