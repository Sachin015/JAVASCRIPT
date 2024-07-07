//setTimeout Metho() Execute the function after completing the given time

//1)Handler
function sayHello() {
    console.log("Hello, world!");
}

// Call sayHello after 1000 milliseconds (1 second)
let timeoutId = setTimeout(sayHello, 1000);
console.log(timeoutId)

// To cancel the timeout, you can use clearTimeout
// clearTimeout(timeoutId);

//2) using SetTimeout direct with call back function
const exe = setTimeout(()=> {
    console.log('hello')
},1000)

console.log(exe);


//clear time
clearTimeout(exe);