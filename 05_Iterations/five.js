//      foreach loop

const codingLang = ["Java", "Ruby", "Javascript", "Cpp"]

//foreach with simple function
codingLang.forEach(function (items) {
    //console.log(items)
})


// foreach with arrow function
codingLang.forEach((item) => {
    //console.log(item)
})

// foreach with function refrance
function printMe(i){
    console.log(i)
}

codingLang.forEach(printMe)
codingLang.forEach(function (its, index, fullArray) {
    //console.log(its, " ", index, " ", fullArray)
})


const myCoding =[ 
    {
        langua : 'Java',
        languaExt : 'java'
    },
    {
        langua : 'Python',
        languaExt : 'py'
    },
    {
        langua : 'Javascript',
        languaExt : 'js'
    }
]


myCoding.forEach( (items)=> {
    console.log(`${items.languaExt} is the extension of ${items.langua}`)
})