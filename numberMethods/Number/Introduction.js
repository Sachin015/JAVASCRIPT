//1)Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
//2)The maximum number of decimals(float) is 17.


 // Note:- The JavaScript interpreter works from left to right.
//First 10 + 20 is added because x and y are both numbers.
//Then 30 + "30" is concatenated because z is a string.
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
console.log(result) // 3030
console.log(typeof result) //string


/* //using new keyword it converts numbers to an object
let number = 100
let change = new Number(number)
console.log(typeof change); //object
console.log(change); // [Number: 100] */


/* // Better way to simplyfy numbers is By using paranthesis ()let 
let simplify= (550/25)*3
console.log(simplify) */