 // 1)match()Method
//match() method returns an array containing the results of matching a string against a string
/*let note = " I was disapointed. I was Broken. I was feeling numb And I was the takecarer"
let search = note.match("was") 
console.log(search) // convert was to array and out  will return as object
console.log(typeof search) //object



/* // 1.1)match() Method
// using flag /g for global search 
let note = " I was disapointed. I was Broken. I was feeling numb And I was the takecarer"
let search = note.match(/was/g)
console.log(search)  */




// 1.2)match() Method
// using flag /gi for global search {g(all)+i(insensitive)} 
/*let note = " I was disapointed. I WAS Broken. I was feeling numb And I was the takecarer"
let search = note.match(/was/gi)
console.log(search) 
console.log(typeof search) // Object */



/* // 2)matchAll() Method
// matchAll() method returns strings as an Objects
let drinks = "I love coca-cola. I love pepsi . I love Fanta And i don't love sprite"
let search = drinks.matchAll(/love/gi)
console.log( search) */