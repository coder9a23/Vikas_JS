const myNum = [1, 2, 3, 4]

const myTotal = myNum.reduce( function (acc, currval) {
    console.log(`acc : ${acc} and currvall ${currval}`)
    return acc + currval
}, 0)

console.log(myTotal)