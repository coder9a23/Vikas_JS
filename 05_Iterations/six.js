
const codingLang = ["Java", "Ruby", "Javascript", "Cpp"]

// foreach doesn't return anything
// const values = codingLang.forEach( (items) => {
//     // console.log(items)
//     return items
// })

// console.log(values)


const myNum = [1, 2, 3, ,4 ,5, 6, 7, 8, 9, 10]

const out = myNum.filter( (num) => {
  // return  num>4
})
console.log(out)


const books = [
    {
        title: 'Book One', genre: 'Friction', publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Firction', publish: 1992,
        edition: 2008
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999,
        edition: 2010
    },
    {
        title: 'Book Four', genre: 'Science', publish: 1989,
        edition: 2007
    },
    {
        title: 'Book Five', genre: 'Friction', publish: 2009,
        edition: 1995
    },
]


let userBook = books.filter( (bk) => bk.genre === 'Friction')

//console.log(userBook)

userBook = books.filter( (bk) => bk.publish > 2000)
console.log(userBook)