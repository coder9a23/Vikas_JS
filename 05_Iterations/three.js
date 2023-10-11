// for of loop

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }

const greetings = "Hello World"
// for(const i of greetings){
//     console.log(i)
// }
console.log(greetings.length)
console.log(greetings.charAt(9))


// Map

const map = new Map() // -> it doesn't contan duplicate value and it retuns values in entered orderd

map.set("IN" , "India")
map.set("Fr","France")
map.set("USA", "United State of America")
map.set("IN" , "India")

//console.log(map)

// To retrive both key and value of map
for(const [key, value] of map){
    console.log(key,':-', value)
}
 

const myObj = {
    game1 : 'NSF',
    game2 : 'Spriderman'
}

for (const [key, value] of myObj) {
    console.log(key, ':-', value)
}