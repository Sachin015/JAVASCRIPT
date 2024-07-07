//Lexical scope is a default/static scope in Javascript
/* ## Every child function has access to the properties of parent function ,And their parents don't have access to their children Or neither Siblings have access to each other's property */

function outerFun(){
    // console.log(val1);//Invalid
    // console.log(val2);//Invalid
    const greet = `Hello MY World`
    function innerFun(){
        const val1 = 10;
       console.log(greet); //Valid
    }
    innerFun();//calid function calling
    function innerFunTwo(){
        const val2 = 20;
       console.log(greet); //Valid
    }
    innerFunTwo();//valid function calling

    // return val1 + val2 ; //Invalid
}
// innerFun();//Invalid
// innerFunTwo();//Invalid
outerFun(); // Valid