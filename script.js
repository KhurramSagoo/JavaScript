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

// for each short cut method

numbers.forEach(value => {
    console.log(value)
    
});


// map method
const mapNumbers = [ 1,2,3,5,4];
const newArray = mapNumbers.map(updated)
function updated(n){

    return n*15
    
}
console.log(newArray);

// map an other method 
const nmapNumbers = [ 1,2,3,5,4];
const nnewArray = nmapNumbers.map((n) => n*12);


console.log(nnewArray);

// // map an other one
// const mmapNumbers = [ 1,2,3,5,4];
// const mnewArray = nmapNumbers.map((n) => n*12);
// const users=[
//     {name: "Farhan" , country:"USA"},
//     {name:"Aslam", country:"Pakistan" },
//     {name:"Ali", country:"KSA" },
//     {name:"Waqar", country:"UK" },
// ]

// const country= users.map(user=>user.country)
// const nameArray= users.map(user=>user.name)
// console.log(country,nameArray)


const mmapNumbers = [ 1,2,3,5,4];
const mnewArray = nmapNumbers.map((n) => n*12);


// map on condition and ternary operation
const users=[
    {name: "Farhan" , country:"USA"},
    {name:"Aslam", country:"Pakistan" },
    {name:"Ali", country:"KSA" },
    {name:"Waqar", country:"UK" },
]

const country= users.map(user=>user.country)
const nameArray= users.map(user=>user.name==="Farhan"? "Khurram":user.name)
// "?" is used for true and ":" used for false.
console.log(country,nameArray)


// get the index of current item
const nusers=[
    {name: "Farhan" , country:"USA"},
    {name:"Aslam", country:"Pakistan" },
    {name:"Ali", country:"KSA" },
    {name:"Waqar", country:"UK" },
]
// here get the index of 2nd parameter
const ncountry= nusers.map(user=>user.country)
const nnameArray= nusers.map((user,index)=>
index!== 2? user.name : "new name");
// "?" is used for true and ":" used for false.
console.log(ncountry,nnameArray)


// conclusion Map Method
// used to update an array
// and fetch array from existing array
// but remember always return new array , it will not change original array
// map is not same as for-each loop. it works for each item/element

