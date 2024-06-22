//The JavaScript prototype property allows you to add new properties to object constructors:


function student(name,roll,address){
    this.Sname = name;
    this.Sroll = roll;
    this.Saddress = address;
}

//prototyping
student.prototype.class= 12;

const student1 = new student("ram",24,"balkhu")
const student2 = new student("gyan",5,"sankhamul")
console.log(student1);
console.log(student2);
