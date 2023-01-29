/* 
 You are given three numbers 13, 79, and 45. Write a program that will print the largest 
    number using if-else.
*/
const Num1=13;
const Num2=79;
const Num3=45;
if(Num1>Num2 && Num1>Num3){
  console.log('The largest number is', Num1);
} 
else if(Num2>Num1 && Num2>Num3){
  console.log('The largest number is', Num2);
}
else{
  console.log('The largest number is', Num3);
}


//try another way

const numOne=134, numTwo=79, numThree=45; numFour=546;
const manNumber =Math.max(numOne,numTwo,numThree,numFour);
console.log(manNumber);

