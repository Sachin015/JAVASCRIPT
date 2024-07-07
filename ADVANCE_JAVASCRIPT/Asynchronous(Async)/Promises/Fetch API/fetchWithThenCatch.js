fetch("https://api.github.com/users/hiteshchoudhary")
.then((data) =>{
   return data.json()
})
.then((jsonData) =>{
    console.log(jsonData);
})
.catch((err) =>{
    console.log(err);
})
