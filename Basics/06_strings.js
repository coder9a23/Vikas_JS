let name = "Vikas "
let age = 10

//console.log(name + age + " total")

// String interpolation
console.log(`Hello my name is ${name} and  i am ${age} years old`)

const gameName = new String("Fast And Furious")
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(7))
// console.log(gameName.indexOf('A'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(1,4)
console.log(anotherString)

const url = "https://vikas.com/gaming%20jaiswal"
console.log(url.replace('%20', " "))