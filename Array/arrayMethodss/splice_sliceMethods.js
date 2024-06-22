/* The splice() method adds new items to an array.
The slice() method slices out a piece of an array. */



/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items: */

//1) splice() Method
//The splice() method adds new elements to an array:
/*const fruits = ["Banana", "Orange", "Apple", "Mango"]
let splice = fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(typeof splice);// object
console.log(splice);//Banana,Orange,Lemon,Kiwi,Apple,Mango  */




//2) slice() Method 
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2,4);  // stared  from 3 to 4
console.log(citrus); //[ 'Lemon', 'Apple' ]


