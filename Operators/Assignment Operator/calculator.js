let a = Number(prompt("enter number"))
let b = Number(prompt("enter number"))
let calc ;
let ope = Number(prompt(`Select A number`))

switch(ope){
    case 1:
    calc = a+b;
    console.log(`Sum of A,B is ${calc}`);
    break;

    case 2:
    calc = a-b;
    console.log(`Subtraction of A,B is ${calc}`);
    break;
    case 3:
    calc = a*b;
    console.log(`Multiplication of A,B is ${calc}`);
    break;

    case 4:
    calc = a/b;
    console.log(`Division of A,B is ${calc}`);
    break;

    case 5:
    calc = a%b;
    console.log(`Modulus(reminder) of A,B is ${calc}`);
    break;

    default:
        console.log(`Invalid`)
}