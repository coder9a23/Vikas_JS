const user = {
    username : "Vikas",
    price : 999,


    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// this represents the current context or we can say current all variables 

console.log(user.welcomeMessage()) // Vikas output
user.username = "Sam"
console.log(user.welcomeMessage()) // Sam output


console.log(this) 
 /* Note :- When we run 17 number of code than output will be empty object like {}
    because we are in the node environment and here "this" is refring to empty object 
    because there is no context in Global

    when we run only 17 in browser the javascript enginne runs in browser than engine have 
    global object which is window object 
    and that is why "this" in brownser refers to window object in browser 

    */


    // Here I an unable to use "this" keyword


    // function char(){
    //     let username = "vikas"
    //     console.log(this.username);
    // }

    // char()


    // Expression 

    // const chai = function(){
    //     const username = "vikas"
    //     console.log(this.username);
    // }

    // chai();


    // Arrow function
    const chai = () => {
        const username = "Vikas"
        console.log(this.username);
    }

    chai();

    // Arrow function with implicit return 
    
    //const add = (num1, num2) => num1 + num2;

    //const add = (num1, num2) => (num1 + num2)

    // retun an object through arrow function

    const add = (num1, num2) => ({username : "Anmol"})

    console.log(add(1, 4));