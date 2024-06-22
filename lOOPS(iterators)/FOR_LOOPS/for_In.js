//For in loop prints key values of Objects


//1)With Object
const user = {
    name : "Jack",
    id : 104,
    selfTaught : true
}
for(const jack in user){
    // console.log(`His ${jack} is ${user[jack]}`)

    //Output:-
    //  His name is Jack
    //  His id is 104
    //  His selfTaught is true
}


//2)with Array
const arr = ['uday','shrijan','hritish','sachin']
for(const index in arr){
    // console.log(`index ${index} is ${arr[index]}`);

    // Output:-
   // index 0 is uday
   // index 1 is shrijan
   // index 2 is hritish
   // index 3 is sachin 
}