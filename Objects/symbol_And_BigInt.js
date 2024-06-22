//Note :-The BigInt() and Symbol() constructors throw an error when called with new
/* to prevent the common mistake of creating a wrapper object instead of the primitive value. The only way to create a wrapper object for these types is to call Object() with them: */


const numberObj = new Number(1);
console.log( numberObj); // [Number: 1]
console.log(typeof numberObj); // "object"

const bigintObj = Object(1n);
console.log( bigintObj); // [BigInt: 1n]
console.log(typeof bigintObj); // "object"

const symbolObj = Object(Symbol("newid"));
console.log( symbolObj); // [Symbol: Symbol(newid)]
console.log(typeof symbolObj); // "object"
