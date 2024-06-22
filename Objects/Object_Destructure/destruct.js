const person = {
    name :"sachin",
    id : 9990,
    address : "lalitpur"
}

//Destructuring

const {id} = person ;
console.log(id);//9990

        // OR

//renaming
const{id:userId} = person;
console.log(userId);; // 9990