// closure-https://blog.bitsrc.io/collection-of-closure-problems-in-javascript-fcd38ac1c765
var globalName='Razib ahmed';

function sayName(){
  console.log(`Hello, ` + globalName);//aikane akta closure hoye gese karon globalName akta global variable jeita functional scope a dewa hoisee
}
sayName();



var b=10;
const foo=()=>{
  b=200;
  return ()=>{
    console.log(b);
  }
}
foo()();