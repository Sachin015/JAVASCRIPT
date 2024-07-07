class user{
    constructor(userName){
        this.userName = userName ; 
    }

    Me(){
        return `hello me ${this.userName}`
    }

    // static keyword  can only be called on the class itself, not on instances of the class
    static hello(){
        return ` NO no not me`
    }
}
const newUser = new user("such")
// ---use of static 
// console.log(newUser.hello()); //error
// console.log(user.hello()); //NO no not me

class teacher extends user{
    constructor(userName,email){
        super(userName)
        this.email = email;
    }
}

const sach = new teacher("sachin","sachin804@gmail.com")
// console.log(sach.hello());//can't acces it