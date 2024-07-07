const myObject = {
    faherName: "sachin",
    job: "software Engineer",
    Qualification: "Bca graduate",
    Contact : 9786782103
}

const proto =Object.getPrototypeOf(myObject)
console.log(proto);


function MyConstructor() {
    this.property = 'value';
  }
  
  const myInstance = new MyConstructor();
  const prototype = Object.getPrototypeOf(myInstance);
  console.log(prototype); // Logs the prototype of `myInstance`, which is `MyConstructor.prototype`
  