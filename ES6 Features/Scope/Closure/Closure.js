//Closure means when we return function inside function(callback) , it also return its Lexical scope,which is default scope of js function  


function Parent(){
    let a = 10;
    let b = 20;
    const sum = a+b;

    function child1(){
        //children can access parent's properties
    console.log(`The value of sum is : ${sum}`);
    }
    return child1(); //returning its scope
}

Parent(); // The value of sum is : 30 