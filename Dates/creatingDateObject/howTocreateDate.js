/*By default, JavaScript will use the browser's time zone and display a date as a full text string:  */
//UTC (universal, or GMT) time.

/* //There are 9 ways to create a new date object:
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)  */


/* //new Date() creates a date object with the current date and time:
let dates= new Date()
console.log(dates) //2024-03-12T12:52:56.705Z
console.log(typeof dates) //Object because of new keyword  */


/* //creating Static Date 
let dates = new Date("2021-03-31")
console.log(dates); //2021-03-31T00:00:00.000Z
console.log(typeof dates); //Object */