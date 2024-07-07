//Mordern syntax

class user{
    constructor(username, userId , Password){
        this.username = username
        this.userId = userId  
        this.Password = Password
    }

    get username(){
        return `${this._username}`
    }

    set username(USERNAME){
        this._username = USERNAME
    }


    get userId(){
        return `${this._userId}`
    }

    set userId(ID){
        this._userId = ID
    }


    get Password(){
        return `${this._Password}`
    }

    set Password(PASSWORD){
        this._Password = PASSWORD
    }
}

const newUser = new user("sachin",123 , "pass")
console.log(newUser);