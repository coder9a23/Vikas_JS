 const myDate = new Date()
//  console.log(myDate)
//  console.log(myDate.toString())// return seprate day, month, date, year
//  console.log(myDate.toISOString())
//  console.log(myDate.toJSON())
//  console.log(myDate.toDateString())
//  console.log(myDate.toLocaleDateString()) // return mm/dd/yyyy
//  console.log(myDate.toLocaleString())
//  console.log(myDate.toTimeString())

 // In order to set our own date
 // let myCreatedDate = new Date(2023, 0, 5)
 // let myCreatedDate = new Date(2023, 0, 23, 5, 3)
 // let myCreatedDate = new Date("2023-01-14")
 let myCreatedDate = new Date("01-14-2023")
 // console.log(myCreatedDate.toDateString())
  
 let myTimeStamp = Date.now()
 //console.log(myTimeStamp)// returns millisecond

 // In order to get millisecond from any date object than

 //console.log(myCreatedDate.getTime())

 let newDate = new Date()
 console.log(newDate.getFullYear())
 console.log(newDate.getHours())
 console.log(newDate.getMonth()+1)