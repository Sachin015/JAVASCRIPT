An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that runs as soon as it is defined. It is a design pattern that is often used to create a local scope for variables to avoid polluting the global namespace.

Note:- must use (;)semicolon after ending IIEF function

Basic Syntax of IIFE:

(function() {
    // Your code here
})();


Why to use IIFE:-
1.Avoid Global Variables
=>Variables declared inside an IIFE are not accessible outside the IIFE, preventing conflicts with other scripts.

2.Encapsulation
=>Encapsulating code within an IIFE can help organize code and make it more modular.

3.can be use in Arrow function
