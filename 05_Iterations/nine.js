const myNum = [1, 2, 3, 4]

//const myTotal = myNum.reduce( function (acc, currval) {
    //console.log(`acc : ${acc} and currvall ${currval}`)
    //return acc + currval
//}, 0) // 0 means the initial value of acc and this function is working as  s = s+1;

//  ruduce method on arrow function

const myTotal = myNum.reduce( (acc, curr) => acc+curr ,0)
console.log(myTotal)


const shoppingCart = [
    {
        cource :'Python',
        price : 2999
    },
    {
        cource :'Java',
        price : 999
    },
    {
        cource :'Mobile Application',
        price : 5999
    },{
        cource :'Full statck Web Dev',
        price : 19999
    },
]

const pricePay = shoppingCart.reduce( (acc, item) => acc + item.price ,0) 
console.log(pricePay)