const user = {
    userName : "don",
    userId : 123 ,
    userMail : "don77@gmaul.com",

    get _userId(){
        return this.userId
    },
    set _userId(userID){
        return this.userId = userID
    }
}

//factory function
const getSet = Object.create(user)
console.log(getSet._userId);