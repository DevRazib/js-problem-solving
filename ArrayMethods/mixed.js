function double(number){
return number * 3;
}
const numbers = [1,2,3,4,5];
const cube=numbers.map(double);
console.log(cube);

function five(num){
return num * 5;
}
const nums=[5,10,15,20]
const pwrFive=nums.map(five);
console.log(pwrFive);

function isLong(name){
return name.length > 6;
}
let names=['Razib', "Alam",'Nur','Rahed Ahmed','Rabbi'];
const longer=names.filter(isLong);
console.log(longer);

let newNumber=[1,2,3,4,5];
const doubleNewNumber=newNumber.map(newNums=>newNums*2);
console.log(doubleNewNumber);
let add =(a,b) => a+b;
console.log(add(5,5));

function add2(c,d){
   let output=c+d;
   return (output);
}
console.log(add2(5,10));



let number1=[1,2,3]
let number2=[4,5,6]
let number3=[...number1,...number2];
console.log(number3);

let person ={name:"razib", age:24}
let newPerson={...person, city:"Sylhet"}
console.log(newPerson);

let numberDest=[1,2,3]
let [a,b,c]=numberDest;
console.log(numberDest);
console.log(a,b,c);

let person3={name:'Razib', age:24};
let {name,age}=person3;
console.log(name,age);

function sum(...args){
return args.reduce((a,b)=>a+b);
}
console.log(sum(1,2,3,4,5,45));