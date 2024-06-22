//using (...) rest operator
//returns in array  form
function user(...name1){
    return name1;
}
console.log(user("sachin","sach","fang"));//[ 'sachin', 'sach', 'fang' ]
console.log(typeof user("sachin","sach","fang"));//object

//Or we can,
function user(id1,id2,...id){
    return id;
}
console.log(user(133,190,302,772,200));//[ 302, 772, 200 ] :because id is returning  and other stored in id1 , id2