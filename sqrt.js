

//take the input from the user
//Math.sqrt(number);

const number=64;
const result=Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);


//square root different data type

const num1=9;
const num2=-25;
const num3='Razib';

const result1=Math.sqrt(num1)
const result2=Math.sqrt(num2)
const result3=Math.sqrt(num3)

console.log(`The square root of ${num1} is ${result1}`)
console.log(`The square root of ${num2} is ${result2}`)//In square root negative number and string is showed NaN
console.log(`The square root of ${num3} is ${result3}`)//In square root negative number and string is showed NaN

/* 
Write a function that takes a number and returns its square.
 */
function square(number){
    return number*number;
}
console.log(square(5));

