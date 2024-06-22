//The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const game = [[1,3,5,6],[1,5,7,3,0],[5,7,8]]
let x = game.flat()
console.log(x); /* [
    1, 3, 5, 6, 1,
    5, 7, 3, 0, 5,
    7, 8 ] */
    console.log(typeof x); //object