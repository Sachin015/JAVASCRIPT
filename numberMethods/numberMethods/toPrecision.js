//The toPrecision() method returns a string, with a number written with a specified length:
//It means it gives more priority to non-decimal(left-side numbers) accordingly given length


// let num = 23.3654
// console.log(num.toPrecision(2)); //23 : because ddecimal 1st number is >=0.5
                //OR

// let num = 23.6654
// console.log(num.toPrecision(2)); //24: because ddecimal 1st number is <=0.5
                //OR

// let num = 23.6500
// console.log(num.toPrecision(4)); //23.65: because ddecimal 1st number is ==0.5
                    //AND

// let num = 23.6500
// console.log(typeof num.toPrecision(4)) //string