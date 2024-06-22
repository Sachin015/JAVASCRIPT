//The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.


const user = {
    name:"Sachin",
    coder:true,
    address:"lalitpur",
    email:"malisachin437@gmail.com",
    fun : function() {
        console.log(`Hello I am ${this.name} And my mail is ${this.email}`);
    },
}


const newObj = Object.create()
newObj.name = "Hanuman"
newObj.email = "sachin123@gmail.com"
newObj.fun()
// console.log(newObj)