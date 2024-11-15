/* const res=(function(a,b){
  const sum=a+b;
  return sum;
})(5,5);
console.log(res); */


function createCounter(){
  let value=0;//hidden state 

 function increment(){
    return ++value;
  }
  return {
    increment :increment
  }
}

const counter1=createCounter();
const counter2=createCounter();
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter2.increment())

function add(...args){
  console.log(args[0] + args[1]);
}
(add(8,2))