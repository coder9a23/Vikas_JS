// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Iron Man", "Capten Marvel", "Thor", "Dr.Strange", "Spider Man"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myHeros)

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // Used  to add element at the last of the array

myArr.unshift(9) // Used to add element at the first of array
myArr.shift() // Used to delete element at the first of array
// console.log(myArr)

// console.log(myArr.includes(5)) // true check weater given data is presend in array or not
// console.log(myArr.indexOf(4)) // returns the index number of given data 

const newArr = myArr.join();
// console.log(newArr) // it joins the arry and conver array to the string 

// Slice and Splice
console.log("A ", myArr)

//Slice
console.log("S ", myArr.slice(1,4))
console.log("A ", myArr)

// Splice

console.log("Sp ", myArr.splice(1, 4)) // it will remove given range of array 

console.log("A ", myArr)