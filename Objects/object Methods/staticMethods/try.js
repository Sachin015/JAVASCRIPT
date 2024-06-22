const obj = {
    name: "sachin",
    roll: 12,
    myFun:function (){

    }
}

const toStr = obj.myFun.__proto__;

toStr.name = "sachin"
toStr.roll = 2
toStr.add = "lalit"

// console.log(toStr); 
// console.log(typeof toStr); //[object Object]


const newProto = {...toStr} 

newProto.class = 12
newProto.faculty = "Humanities"
newProto.score = "97%"


const check =Object.newProto.hasOwnProperty(score)
// console.log(newProto);
console.log(check);
