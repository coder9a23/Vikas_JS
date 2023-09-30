const marvel_heros = ["Ironman", "Thor", "Spirderman"]
 
const dc_heros = ["Superman", "Flash", "Batman"]
// marvel_heros.push(dc_heros) // if we push one array to another array than "Array ke andar Array" ho jaye ga

// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

// Concat method and Spread method(...)

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros)

const all_new_heros  = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros)

// flat() mathod  -> It make multiple array in a an array to a single array

const another_array = [1, 2, 3, [3, 5], 6, [7, 8, [9, 10]]]
const real_another_array = another_array.flat(Infinity) // infinity defines how many arrays are preseint in an array
console.log(real_another_array)

// from() -> to conver an array form
console.log(Array.isArray("Vikas"))
console.log(Array.from("Vikas"))