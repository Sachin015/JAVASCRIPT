const userDetails = {
    userName : "Sachin",
    userId : 1994,
    userAddress : "Bungamati"
}

function users(userObject){
    let user = `Hi My name is ${userObject.userName} And My address is ${userObject.userAddress}`
    return user;
}
// const firstUser = users(userDetails)

    //OR Shorthand is 
   const first = users({
        userName:"sachin",
        userAddress:"Bunga"
    })

    console.log(first);

