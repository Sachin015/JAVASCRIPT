const user = {
    name :"Sachin Mali",
    id:244
}

function details(anyobject){
    console.log(`Username is ${anyobject.name} and Id is ${anyobject.id}`);
}
details(user); //Username is Sachin Mali and Id is 244
                // OR

//can also pass directly object into call
details({
    name:"babloo",
    id:500
}); //Username is babloo and Id is 500