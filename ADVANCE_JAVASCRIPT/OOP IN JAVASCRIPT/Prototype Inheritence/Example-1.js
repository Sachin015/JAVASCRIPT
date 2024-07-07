//Example - 1
// Creating a Constructor function
function userData(name, userid){
    this.name  = name;
    this.userid = userid;
}

// Inheriting value from constructor function
userData.prototype.Person = function () {
    console.log(`Hello my name is ${this.name}`)
}

// creating Instances using constructor keyword (new)
const user1 = new userData("sachin", 221)
const user2 = new userData("Arman", 107)

console.log(user1);
console.log( user2);

// //Output :-
// userData { name: 'sachin', userid: 221 }
// userData { name: 'Arman', userid: 107 }

