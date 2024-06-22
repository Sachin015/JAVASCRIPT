//constructor function are used to create multiple instances of an object with same structure and behaviour.
//It is defined using function as a blueprint(backup).
//Instances are created using new keyword otherwise function return & empty object must be declare.

//Examples


//1)Without using new keyword
function employee(name,age,post){
    let employeeObj = {};
    employeeObj.name = name
    employeeObj.age = age
    employeeObj.post = post
    return employeeObj;
}
//instances
/*const ep1 = employee('john',27,'QA')
const ep2 = employee('Ben',24,'Develoer')
const ep3 = employee('Michel',32,'Designer')
console.log(ep1);
console.log(ep2);
console.log(ep3); */



//2)Instances using new keyword : this is called Constructor Function
/*Note:- new keyword replacing manually created object(newObj) because it is made for conveting to Object datatype which auto convets following properties*/   
function cricketPlayer(name,age,role,score){
    // let newObj = {}; // new keyword replaced it
    this.name = name;
    this.age = age;
    this.role = role;
    this.score = score;
    // return cricketPlayer; // new keyword replaced it
}


//Instances
const player2 =  new cricketPlayer("sachin",20,"defender",100)
const player3 =  new cricketPlayer("ram",23,"defender",60)
const player4 =  new cricketPlayer("krish",25,"defender",73)

// console.log(player2);
// console.log(player3);
// console.log(player4);
