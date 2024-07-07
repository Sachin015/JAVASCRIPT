-Asynchronous programming in JavaScript allows the execution of tasks to happen con-currently (without blocking the main thread), making it essential for handling operations such as I/O, network requests, and timers efficiently.

//Key concept of Async:
1)Event Loop
2)Call Back
3)Promises:-
    i.then(): For handling fulfilled promises.
    ii.catch(): For handling rejected promises.
    iii.finally(): For executing code regardless of the promise's outcome.
4)Async/Await:-
    Keywords:-
    `async`: Declares an asynchronous function.
    `await`: Pauses the execution of the async function, waiting for the promise to
    
    //Handling Multiple Asynchronous Operations:
    1)Promise.all():Waits for all promises to resolve or any to reject.
    2)Promise.race():Resolves or rejects as soon as one of the promises resolves or rejects.
