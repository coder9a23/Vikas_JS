// Creating an object using constructor and singaleton

const tinderUser = new Object()
console.log(tinderUser)

tinderUser.id = "1235abc"
tinderUser.name = "Sunny"
tinderUser.isLoogedIn = false

//console.log(tinderUser)

// Object inside object

const regularUser = {
    email : "Some@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Vikas",
            lastName : "Jaiswal"
        }
    }
}

// Acces object inside objec with "." notation
console.log(regularUser.fullname.userFullName)

// Adding more than one object
const obj1 = {
    1: "a",
    2: "b" 
}

const obj2 = {
    3: "c",
    4: "b"
}
const obj4 = {
    5: "d",
    6: "f"
}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2,...obj4}
console.log(obj3)

// How we get user data from database is like ojbect in the array

const user = [
    {
        id: 1,
        email: 'v@gamil.com'
    },
    {
        id: 2,
        email: 'i@gamil.com'
    },
    {
        id: 3,
        email: 'j@gamil.com'
    },
]

// to Access objects inside arry
//console.log(user[1])

// To conver keys and values of object to array form
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))// return all the keys of tinderUser
// console.log(Object.values(tinderUser))// return all the values of tinderUser

// To check weater a property exist or not in an object
// console.log(tinderUser.hasOwnProperty("isLoogedIn"))
// console.log(tinderUser.hasOwnProperty("age"))

// Destructure of Object

const cousrse = {
    courseName : "JS in Hindi",
    price : "999",
    courseInstructor : "Vikas"
}

// console.log(cousrse.courseInstructor)

const {courseInstructor} = cousrse

// I can rename keys of object to short name
const {courseInstructor : instructor} = cousrse
console.log(instructor)