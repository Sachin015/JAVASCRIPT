//Note Map Doesn't entry two same Ky,values

const Map1 = new Map() 

Map1.set("name","sachin")
Map1.set("id","01")
Map1.set("Address","Bungamati")
Map1.set("Address","Bungamati") // Not Allowed
// console.log(Map1);

//output :-
// Map(3) { 'name' => 'sachin', 'id' => '01', 'Address' => 'Bungamati' }


//using for of loop in map()
for(const [key , value] of Map1){
    console.log(`key is ${key} and value is ${value}`)
}
//Output :-
// key is name and value is sachin
// key is id and value is 01
// key is Address and value is Bungamati  