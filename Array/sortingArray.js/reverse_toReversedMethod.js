/* The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array. */



//1) The reverse() method reverses the elements in an array:
/*const num = [1,2,3,4,5]
let reverse = num.reverse()
console.log(reverse);//[ 5, 4, 3, 2, 1 ]
console.log(typeof reverse);// Object*/


//2) the toReversed() method as a safe way to reverse an array without altering the original array.
const num = [1,2,3,4,5]
let toReversed = num.toReversed()
console.log(toReversed);//[ 5, 4, 3, 2, 1 ]
console.log(typeof toReversed);// Object