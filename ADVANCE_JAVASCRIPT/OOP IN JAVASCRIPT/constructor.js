function user(Name , Age , id){
    this.Name = Name ; 
    this.Age = Age ; 
    this.id = id; 
    // return this ; //doesn't required
}

const userOne = new user("Sachin", 20 , 104);
const userTwo = new user("Jack", 45 , 32 );
const userThree = new user("Tom", 30 , 14);
const userFour = new user("Sam", 32 , 97 );
console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userFour);