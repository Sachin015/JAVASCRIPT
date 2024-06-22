//The reduce method in JavaScript is a powerful array method that allows you to reduce an array to a single value by executing a reducer function on each element of the array. The reduce method takes two arguments: the reducer function and an optional initial value.
const arr = [1,2,3]
const value = arr.reduce( function(accumulator,currentValue){
    console.log(`value of acc is ${accumulator} and current value is ${currentValue}`); 
    return accumulator + currentValue;
},0); // Accumulator starts feom 0
console.log(value);

// value of acc is 0 and current value is 1
// value of acc is 1 and current value is 2
// value of acc is 3 and current value is 3
// Output:- 6