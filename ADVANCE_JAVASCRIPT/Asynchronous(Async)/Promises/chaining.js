
//Chaining or reducing callback hell

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err = false;
        if(!err){
            resolve({username: "sachin",uid : 12, Address: "Bungamati"})
        }else{
            reject("ERROR: Something went wrong")
        }
        
    },1000)

})
//Chaining
.then((userData)=>{
    const {username} = userData;
    console.log(username)
    return userData;//passing value into then() 2
}).then((userData2)=>{
    const {uid} = userData2;
    console.log(uid);
    return userData2; //passing value into then() 3
}).then((userData3)=>{
    const {Address} = userData3;
    console.log(Address);
}).catch((errors)=>{
    console.log(errors); //from reject
})


//Output :-

//if err = false
/* sachin
    12
    Bungamati */

//else 
/* "ERROR: Something went wrong" */