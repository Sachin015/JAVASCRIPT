//javascripy supports multipe nesting inside a single Object


//nesting objects
const person = {
    name:"sachin",
    add:"Bungamati",
  
    Education : {
      SEE :"A.S.Y.H.S.School",
      SLC :["A.S.Y.H.S.School","Management"],
      Bachelor : ["A.I.M.S","B.C.A"],
      fvrtThings :{
        color:"blue",
        fruit:"apple",
        hobby:"coding",
      },
    },
  }

  /*
const object2 = person["Education"]
const object3 = person["Education"]["fvrtThings"]
console.log(object3);//{ color: 'blue', fruit: 'apple', hobby: 'coding'  */