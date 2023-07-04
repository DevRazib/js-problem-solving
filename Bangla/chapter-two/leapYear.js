// leap year is divided 4 and 400 and not divided 100

/* let leapYear=2024;
if(leapYear % 4 === 0 && leapYear% 400==0){
  console.log(`Your year ${leapYear} is leap year`)
}else{
  console.log(`Your year ${leapYear} is not  leap year`)
} */


function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
let result=leapYear(2022);
console.log(result);

// The function checks if February has 29 days. If it does, then we have a leap year. ES5

function isLeap(year) {
  return new Date(year, 1, 29).getDate() === 29;
}
console.log(isLeap(2024));
// ES6
const leapYearES6 = year => new Date(year, 1, 29).getDate() === 29;
console.log(leapYearES6(2020))

