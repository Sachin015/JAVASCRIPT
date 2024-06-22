/* The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array. */



/* 1) sort()  method alters the original array.
The sort() method sorts(list) an array alphabetically: */
/*const choco = ['lacto','mango','dairymilk']
let sort = choco.sort()
console.log(sort); //[ 'dairymilk', 'lacto', 'mango' ]
console.log(typeof sort); //Object */



/* 2) toSorted() method as a safe way to sort an array without altering the original array. */
const choco = ['lacto','mango','dairymilk']
let toSorted = choco.toSorted()
console.log(toSorted); //[ 'dairymilk', 'lacto', 'mango' ]
console.log(typeof toSorted); //Object