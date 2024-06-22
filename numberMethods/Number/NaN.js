// Nan is a reserved word indicating that a number is not a legal number.
//Arithmetic operation with a non-numeric string will result in NaN (Not a Number)

let a= 90
let b = "gun"
let x = a/b
console.log(x) //Output = NaN
console.log(typeof x) //Output = NaN


//typeof NaN is : number
// let app = NaN
// console.log(typeof app); // number



// However, if the string is numeric, the result will be a number:
// let x = 100 / "5";
// console.log(x); //result:- 20




/*  //You can use the global JavaScript function isNaN() to find out if a value is a not a number:
let f=10*"ball"
let g= 2+5
let ch= isNaN(g)
let check = isNaN(f) //checking Whether it is NaN or NOT
console.log(check) //Output = true
console.log(typeof check) //Boolean
console.log(ch)//Output = false */


// let ap = null
// console.log(typeof ap); // object