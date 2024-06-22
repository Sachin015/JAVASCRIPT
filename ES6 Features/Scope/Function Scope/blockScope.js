//Note: let And const are both Block scope

function myFunction() {
    if (true) {
        let blockScopedVar = "I'm block scoped";
        console.log(blockScopedVar); // Accessible here
    }
    console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
}

myFunction();
