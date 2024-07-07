let promise_1 = new Promise (function(resolve , reject){
    const userData = {
        userName : "Sachin Mali",
        userID : 104,
        Password : "Promise Me"
    }
    if(userData){
        resolve(userData); 
    }else{
        reject("Error: Data not found");
    }
    resolve()

})

   .then((dataFromresolve)=>{
            console.log(dataFromresolve);
    })
   .catch((err)=>{
        console.error(err);
    })