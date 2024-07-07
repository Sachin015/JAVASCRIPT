// async/await is particularly useful for handling asynchronous operations without resorting to nested callbacks or chaining promises.

//try function as then() & catch is userd to handle error

//Await: Used inside async functions, await pauses the execution of the function until the promise passed to it resolves. It only works within async functions.


const promiseMe = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err = true; //Output:- ERROR: Something went wrong
        if(!err){
            resolve({username: "sachin",uid : 12, Address: "Bungamati"})
        }else{
            reject("ERROR: Something went wrong")
        }
        
    },1000)

})
async function userData(){
    try {
        const value = await promiseMe;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}
userData()