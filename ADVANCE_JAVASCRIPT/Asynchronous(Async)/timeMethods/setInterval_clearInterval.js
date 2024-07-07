//setInterval Method sets a timer which executes a function or a specified piece of code repeatedly with a fixed time delay between each call.

//Handler
function user(){
    console.log('sachin Mali');
}
const repeat = setInterval(user,1000)

clearInterval(repeat);


//2) with callback fucntion
const timer = setInterval( ()=>{
    const tm = new Date();
    console.log(tm.toLocaleString());
},1000);

//ClearInterval
clearInterval(timer);