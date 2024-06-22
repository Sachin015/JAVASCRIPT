//Normal Function
console.log(sum(5,10)); //Output: 15
function sum(num1,num2){
    let add = num1 + num2;
    return add;
}

//Hoisting Function
console.log(myFun(5)); //ReferenceError: Cannot access 'myFun' before initialization
const myFun = function(num){
    return num + 3;
}
console.log(myFun(5)); //8 