/*## Note: All Non-Primitive Datatypes are Object in js so we can directly inheritence properties of Non-Primitive DataTypes such as Array , function or Object Using 
# Object.prototype  Mehod
        // And 
#Array.prototype Method only inherit properties from Array type
*/ 


//Example - 2
//creating prototype on Non-Primitive Datatypes

const  user = {
    Name : "Bablu",
    Gender : "Male",
    Age : 25
}

// this Trick allows to inheritencing the value of any Object
 Object.prototype.userMessage = function()
{
    console.log(`Hello My Name is ${this.Name} And my age is ${this.Age} And i am a 
        ${this.Gender}`);
}
user.userMessage()

//Output :-
//Hello My Name is Bablu And my age is 25 And i am a Male


// --------------------------------Next Example----------------------------------
// simillarly Array is also an Object type so we can inherit

const rollNo = [1,2,3,4,5,6,7,8,9]

Object.prototype.rollNumbers = function(){
    for (const iterator of rollNo) {
        console.log(iterator);
    }
}
rollNo.rollNumbers()

// --------------------------------Next Example----------------------------------
//Note :-  #Array.prototype Method only inherit properties from Array type

const obj = {
    uName : "Matrix",
    uId : 21
}

// Not valid 
Array.prototype.Names = function(){
    console.log(`hello i am sachin}`);
}
//Valid
/*Object.prototype.Names = function(){
    console.log(`hello i am sachin}`);
}*/

//obj.Names(); // Error because array can't inherit object Property
