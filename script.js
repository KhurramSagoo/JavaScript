function sayHello () {
    console.log("Hello Javascript world!");
}

sayHello();


// arrow function
const greet = () => {
    console.log("hello from arrow function");
}

greet();


// another easy way
const greetNew = () => 
    console.log("hello from arrow function in other way");


greetNew();

// other method  by passing argument
const byPass = (lang="Javascript") => 
    console.log("hello from arrow function "+ lang+ " in other way");


byPass();



// for each item
const numbers =[10, 20, 30, 40, 50];
numbers.forEach((value) => {
    console.log(value);
    
});

// for 2nd value
const numbersSecond =[10, 20, 30, 40, 50];
numbers.forEach((value, index) => {
    console.log(index + ":" + value);
    
});


// // for loop
// for (let i=0; i<numbers.length; i++){
//     // write your logic here
//     console.log(numbers[i]);
// }



