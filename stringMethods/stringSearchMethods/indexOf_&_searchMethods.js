
 // 1) indexOf() Method
//indexOf() method returns the index (position) of the first occurrence of a string
/*let para = "Hello! I'm a good web developer"
let index = para.indexOf("good")
console.log(typeof index) */  



  // 1.1) indexOf() Method
//it returns -1 if the string is not found:
/*let para = "Hello! I'm a good web developer"
let index = para.indexOf("Bad") // Bad is not written in para so It returns -1
console.log(typeof index)  */


  // 2)lastIndexOf() Method
 //lastIndexOf() method returns the index (position) of the last occurrence of a string
 /*let para = "Hello! I'm a good web developer. And I am also a good Leader "
let index = para.lastIndexOf("good") 
console.log(index)    */
 

// A)The search() => method cannot take a second start position argument.
//B) The indexOf() => method cannot take powerful search values (regular expressions).



 //3)search() Method
//method cannot take a second start position argument.
let choice= "I love apple. I love momo . I love you"
let index = choice.search("love")
console.log(index) // 2
console.log(typeof index) //number