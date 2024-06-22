//1) On Array
const arr = [5,6,7,8,9,10]

for(const numbers of arr){          
    // console.log(numbers);  
    //Output :-
//  5
//  6 
//  7 
//  8 
//  9 
//  10      
}

//2) In String
const str = "Sachin Mali"
for(const characters of str){
    // console.log(characters);
    //Output :- 
    //  S 
    //  a 
    //  c 
    //  h 
    //  i 
    //  n 
    //    
    //  M 
    //  a 
    //  l 
    //  i 
}


//3) On object using Array
//Note ;- Object directly can't be iteratable
const USER = [{
    name:"sachin",
    uID:100,
    domain:"web"
}]

for(const userDetails of USER){
    console.log(userDetails); //{ name: 'sachin', uID: 100, domain: 'web' }
}
