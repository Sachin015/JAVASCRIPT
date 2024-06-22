let user = { // belongs to another code
    name: "John",
    phone: 9863719920,
    email:" malisachin99@gmail.com",
    dob:"2060/03/06"
  };
  
  let id = Symbol("id"); 
  
  user[id] = 1;
  
  console.log(user[id] ); // we can access the data using the symbol as the key