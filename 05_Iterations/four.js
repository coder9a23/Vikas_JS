const myObject = {
    js : "Javascript",
    cpp : "C++",
    swift : "swift by apple "
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const myArray =['js', 'java', 'python', 'c++']

for(const key in myArray){
    console.log(myArray[key])
}

// * for in loop is not applicable for Map
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'Fraces')


// for(const key in myObject){
//     console.log(key)
// }