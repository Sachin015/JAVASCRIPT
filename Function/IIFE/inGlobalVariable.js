(function() {
    var localVariable = "I'm local!";
    console.log(localVariable); // Works
})();
console.log(localVariable); // Error: localVariable is not defined
