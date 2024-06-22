const a = Number(prompt('Enter value of A'))
const b = Number(prompt('Enter value of B'))
if(a>b){
    console.log(`A is greater than B`);
}
else if(a<b){
    console.log(`B is greater than A`)
}
else if(a==b || b==a){
    console.log(`A aand B are equal`)
}
else{
    console.log(`Invalid`)
}