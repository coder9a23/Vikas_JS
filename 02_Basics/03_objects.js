// Singleton
// Object.creates -> this is how objects create with a constructor

// object literals

// Symbol declaration
const mySym = Symbol("key1")

// How to add symbol to an object
const JSobject = {
    firstName : "Vikas",
    "Last Name" : "Jaiswal",      // Java considers key of any object as a string automatically here key is "name"
    [mySym] : "myKey1",
    age : 18,
    location : "Indore",
    email : "vikas@google.com",
    isLoogedIn : false,
    lastLoginDay : ["Mon", "Tue", "Wed", "Thr"]
}

// how to access an object

console.log(JSobject.email)
console.log(JSobject["email"])

//console.log(JSobject.Last Name)// error will generate because key is explicitly defined as string
//console.log(JSobject["Last Name"])
//console.log(JSobject[mySym])
//console.log(typeof JSobject[mySym])

// how to change value of object 
JSobject.email= "hitesh@chatgpt.com"
//console.log(JSobject[email])

// In order to restrict changes in object we can use freez
//Object.freeze(JSobject)
JSobject.age = 20
//console.log(JSobject)

// How to add key and value to an object value as a function

JSobject.degree = "B.tech"
console.log(JSobject)


JSobject.greeting = function(){
    console.log("Hello JS user")
}

JSobject.greetingTwo = function(){
    console.log(`Hello JS user, ${this.firstName}`)
}

console.log(JSobject.greeting())
console.log(JSobject.greetingTwo())
console.log(JSobject)