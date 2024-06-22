//The parentheses can only be omitted if the function has a single simple parameter

//Example-1
//Arrow functions are always unnamed. so can also assign the arrow function to a variable so it has a name.
const bob2 = (a) => a + 100;
// console.log(bob2(20)); //120



//Example-2
//The parentheses can only be omitted if the function has a single simple parameter
const value = a =>{
    return `helo world`
}
// console.log(value());//helo world


//Example-3
/*Note :- while using curly braces  must include return keyword
Or if we use paranthesis () don't need write return keyword */

//i)known as explicit return
const braces1 = (num1,num2) =>{return num1 + num2; }
console.log(braces1(10,5));//15

//ii)implicit return
const braces2 = (n1,n2) => (n1+n2)
console.log(braces2(5,20)); //25