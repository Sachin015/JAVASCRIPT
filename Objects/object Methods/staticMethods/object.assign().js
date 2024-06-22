const storeHere = {
   1:37,
   2:45,
   3:60,
}

const fromHere = {
    ram : "lalitpur",
    shyam:"kathmandu",
    hari:"bhaktapur"
}

const spreadMethod = {...storeHere,...fromHere}; //Most useful Trick
            //OR 
//const joined = Object.assign(storeHere,fromHere); // storing second object into first
            //OR
//const joined = Object.assign({},storeHere,fromHere); //storing source object into Empty Object
            
// console.log(spreadMethod);


// Output :-
/*{
    '1': 37,
    '2': 45,
    '3': 60,
    ram: 'lalitpur',
    shyam: 'kathmandu',
    hari: 'bhaktapur'
  } */