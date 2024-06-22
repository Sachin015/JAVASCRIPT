//Object is used to store various keyed collections and more complex entities.
//Spaces and line breaks are not important. An object definition can span multiple lines:
//the term (keyed) means {name,age,address etc} of below: And by default js will make it String type




/* -----------------!!!!-----------------*/

//Basically js Object treat object like this : keys as a string 
const wrestler = {
  "firstName": "great",
  "lastName": "khali",
  "id": 1,
  "fullName": function(){
    return this.firstName + " " + this.lastName;
  },
}; 
// console.log(wrestler)s


/* -----------------!!!!-----------------*/
const key1 = Symbol("lock1");

let user = {
  name: "sachin", //string
  age: 20, //number
  address: "Bungamati", //string
  [key1]: "keylock", //symbol
  marriage: false, //boolean
};

 /* //accesing properties by its key
console.log( user['marriage']); //false
console.log( user.name); //sachin 
console.log( user); */


/* -----------------!!!!----------------- */

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function(){
    return this.firstName + " " + this.lastName;
  },
};

// console.log(typeof person);//object
// console.log(person.id);//5566
// console.log(person["fullName"]);//John Doe



//overwrite
person["id"]= 1432
// console.log(person);



//adding new property into Object
person.home = 'sweetHome'
// console.log(person.home)



//freezing Object
Object.freeze(person)

person['id'] = 9000;
// console.log(person)




/* -----------------!!!!-----------------*/

// delete property
/*The delete keyword deletes both the value of the property and the property itself.
  The delete operator should not be used on predefined JavaScript object properties. It can crash your application. */


const Ob = {
  name :"badboy",
  nationality : "nepali"
}

delete Ob.name; // it deleted name property
//  console.log(Ob); //{ nationality: 'nepali' }


