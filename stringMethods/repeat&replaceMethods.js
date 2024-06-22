/*// 1) repeat() Method
let name = "Sachin Mali"
let repeat = name.repeat(4)
console.log(repeat) */


/*  // 2) replace() Method
//It only replace a single word
let heart= "I love you"
let broke = heart.replace("love","hate") 
console.log(`sorry ${broke}`) */


/*
// 2.2) replace() Method
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let heart= "I love you"
let broke = heart.replace(/LOVE/i,"don't love") //using  /i flag
console.log(`sorry ${broke}`) */



/*  //2.3) replace() Method  /g flag
//It replace all same words 
let fruits = "Apple , Mango , Grapes , Apple"
let change = fruits.replace(/Apple/g,"Banana")
console.log(`My Fvrt Fruits are :-  ${change}`) */


 
/* //3) replaceAll() Method
//replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
let msg = "I love you . I love your Eyes. I love Your Lips. I Love You in Every Universe"
let replace = msg.replaceAll(/love/g,"can't love")
console.log(`sorry ${replace} Anymore`) */


