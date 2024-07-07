class user{
    constructor(username){
        this.username = username;
    }
    hello(){
        return console.log(`hello new user ${this.username}`);
    }
}
class teacher extends user{
    constructor(username , teacherId , email){
        super(username) ;
        this.teacherId = teacherId ; 
        this.email - email ;
    }

    helloTeacher(){
        return console.log( `hello i am new teacher , my name is ${this.username}`);
    }
}
const newUser = new teacher("priyanka",132, "priyanka@122gmail.com")
// console.log(newUser.hello());
newUser.hello()

const users = new user("Javascript")
console.log(users === teacher); //false
console.log(newUser instanceof teacher); //true 