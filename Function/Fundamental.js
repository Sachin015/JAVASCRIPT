
//function with parameter and arguement
function sum(firstNum,secondNum)/*parameter*/{
    return firstNum + secondNum;
}
const add = sum(12,8); // function call or arguement
const add2 = sum(4,6); // function call or arguement
// console.log(add);//20
// console.log(add2);//10
// console.log(typeof add2);//number



//using if else
function sum(firstNum,secondNum)/*parameter*/{
    // if(firstNum,secondNum===undefined)
                //OR
    if(!firstNum || !secondNum){
        console.log("please enter a number");
        return;
    }
    else{
        return firstNum + secondNum;
    }
}
// console.log(sum(12,8));//20
// console.log(sum());//please enter a number



//By default anonymous and replacing default value
function user(name="anonymous"){
    if(!name){
        console.log("please enter your name")
        return;
    }
    else{
        return `staff name is ${name}`;
    }
}
console.log(user());//staff name is anonymous
console.log(user("sachin"));//staff name is sachin