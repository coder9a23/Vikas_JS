console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false;    it conver null to 0
console.log(null == 0); // false;   it won't conver null to 0
console.log(null >= 0) // treu;     it will again conver null to 0

console.log(undefined == 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0) ; // false

// == (double equal) and  >, >=, <=(inequality) both works different in JavaScript


// === it not only cheks its value but also checks its data type

