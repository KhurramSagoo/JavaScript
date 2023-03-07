// filter is used to filter arrray 
// in simple words, filter is used to remove items from existing array
// it always return a new array

// const ages= [5,23,14,30,22];
// console.log(ages);

// const adults= ages.filter((age)=>{
// return age>18;
// })
// console.log(adults)

// to simplify
const ages= [5,23,14,30,22];
console.log(ages);

const adults= ages.filter((age)=>
 age!==30)
console.log(adults)

// note which element pass this condition , that will add in new array
const nadults= ages.filter((age)=>
 age>18)
console.log(nadults)