function myFunction() {
    var localVar = "I'm local";
    console.log(localVar); // Accessible here
}
console.log(localVar); // ReferenceError: localVar is not defined
