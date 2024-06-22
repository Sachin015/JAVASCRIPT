//The copyWithin() method copies array elements to another position in an array:

/*const arr = ['Android','linux','ios']
let copy  = arr.copyWithin(2,0)
console.log(copy); //[ 'Android', 'linux', 'Android' ] : index 2 is replaced  */

const arr = ['Android','linux','ios','banana','apple']
let copy  = arr.copyWithin(2,0,4) // Copy to index 2, the elements from index 0 to 4:
console.log(copy); // const arr = ['Android','linux','ios']