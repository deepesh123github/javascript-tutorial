// https://www.w3schools.com/jsref/jsref_getdate.asp

/* getDate() 
The getDate() method returns the day of the month (1 to 31) of a date.
*/ 
    
const mybirthday =  new Date('August 26  ,1976 23:16:20' ) ;
const  birthday = mybirthday.getDate();

console.log(birthday);
// output : 26

/* getDay()
The getDay() method returns the day of the week (0 to 6) of a date. */
const birthofday = mybirthday.getDay();
console.log(birthofday);
// output : 4

/* getFullYear() 
getFullYear() returns the full year (4 digits) of a date.
*/
const year = new Date() ;
let  chkyear = year.getFullYear() ;
console.log(chkyear);
// output :  2023

/* getHours()
getHours() returns the hour (0 to 23) of a date.*/ 
const hours = new Date() ;
let chkhours = hours.getHours ;
console.log(hours) ;
// output :     date&time.js:31 Thu Oct 26 2023 23:32:04 GMT+0530 (India Standard Time)

/* getMilliseconds()
getMilliseconds() returns the milliseconds (0 to 999) of a date.
*/ 

const Milli = new Date() ;
let milliseconds = Milli.getMilliseconds();
console.log(milliseconds);

/* toLocaleDateString()
 The toLocaleDateString() method returns the date (not the time) of a date object as a string, using locale conventions.*/

 const d = new Date() ;
 let text = d.toLocaleDateString(); 
console.log(text) ;
// output :   10/26/2023