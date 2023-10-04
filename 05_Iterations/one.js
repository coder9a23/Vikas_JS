// for

 for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
    
 }

 for(let i =1 ; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(i + " * " + j + " = " + i*j)
    }
 }


 // for loop on arrary

//  let myHero = ["Irom man", "spider Man", "Thor", "Hulk"]

//  for (let i = 0; i < myHero.length; i++) {
//     console.log(myHero[i])    
//  }



 // break and continue

//  for(let i=1; i<= 20; i++){
//     if(i == 5){
//         console.log(`Detected 5`)
//         break
//     }
//     console.log(`Value of i is ${i}`)
//  }


 for(let j=1; j<8; j++){
    if(j == 4){
        console.log(`Detected 4`)
        continue
    }

    console.log(`value of i is ${j}`)
 }