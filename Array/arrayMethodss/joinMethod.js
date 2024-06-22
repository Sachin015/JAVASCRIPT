//The join() method also joins all array elements into a string.It behaves just like toString(), but in addition you can specify the separator:


// const books = ['rocketScience','psychology','science']
// let join = books.join("?") 
// console.log(join);//rocketScience?psychology?science
// console.log(typeof join);//string


const num = [0,1,3,4,6,9]
let add = num.join("/")
console.log(add) // 0/1/3/4/6/9
console.log(typeof add) //string