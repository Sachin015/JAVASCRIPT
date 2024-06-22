// The forEach() method calls a function (a callback function) once for each array element.Bassically it seperates each elements into individual

// 1) Just Printing out a array elements
/*const prime = [2,3,5,7,11]

prime.forEach(function(pm){
    console.log(pm); // 2,3,5,7,11
})  */



//2) for each with Its 3 Parameters
const rank = [7,2,4,1,6,9]

rank.forEach(function(ranks,index,array){
    console.log(ranks,index,array); //7 0 [ 7, 2, 4, 1, 6, 9 ]
    console.log(typeof ranks,typeof index,typeof array); //number  //number // Object
})   
/* //Note:- In function Prameter
1)ranks => means breakdown element of array  // 2,3,5,7,11
2)index => means index number of each element of array
3) array => means our orginal array  //[7,2,4,1,6,9]   */

