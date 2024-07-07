function prototype(userName){
     this.userName = userName; //reference prototype
}


//passing the value by inheriting
function inheritence(userName,userID,userPassword){
    prototype.call(this,userName);//Explicitly calling function
    this.userID = userID;
    this.userPassword = userPassword;
}

const userOne = new inheritence('sachin',13,"userDead")
const userTwo = new inheritence('Binod',4,"IamBinod")

console.log(userOne);
console.log(userTwo);