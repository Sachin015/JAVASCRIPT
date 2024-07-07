// Class keyword is  intoduce just for syntaxy sugar

//Using class keyword
class users{
    constructor (name, id ,password){
        this.name = name;
        this.id = id;
        this.password = password;
    }

    userGreeeting(){
        return `hello dear new eployee , ${this.name}`
    }
}

const user1 = new users('sachin',1447,"sachin@123")
// console.log(user1.userGreeeting());


// ------------------------------behind_the_scene--------------------------------


function JsUsers(Name , Uid , Password){
    this.Name = Name ; 
    this.Uid = Uid ; 
    this.Password = Password ;
}

JsUsers.prototype.Greeting = function(){
    return `hello me ${this.Name}`
}

const firstUser = new JsUsers('Bhim', 155 , "ILoveJavascript")
console.log(firstUser.Greeting());