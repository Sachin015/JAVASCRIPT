 //An exponent refers to how many times a number is multiplied by itself. Example: 2^3(2*2*2) = 8
 

//toExponent() Method returns Numbers in string
 let a = 10.2563;
 let change = a.toExponential(4);
 console.log(typeof change); //string
 console.log(change); //Output => 1.003e+2
 //exponent showed 3 digit after (.)dot and +2 means remaning digits 