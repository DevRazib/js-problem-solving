//fibonacci 0 1 1 2 3 5 8 13 21 34 etc

const fibonacci=(num, array=[0,1])=>{
  while(num>2){
    const [nextToLast, last] =array.slice(-2);
    array.push(nextToLast + last);
    num-=1;
  }
  return array;
}
console.log(fibonacci(12))

//with recursion
const fib=(num, array=[0,1])=>{
  if(num<=2) return array;
  const [nextToLast, last]=array.slice(-2);
  return fib(num-1,[...array,nextToLast + last])
}
console.log(fib(10))


// position of fibonacci

//normal way
const fibonacciPos=(pos)=>{
  if(pos <=1) return pos;
  const seq =[0,1];
  for(let i=2; i<=pos;i++){
    const [nextToLast, last]=seq.slice(-2);
    seq.push(nextToLast+last);
  }
  return seq[pos]
}
console.log(fibonacciPos(8))

//with recursion way

/* const fibPos=(pos)=>{
  if(pos<2) return pos;
  return fibPos(pos-1) + fibPos(pos-2);
} */
//with ternary operator
const fibPos=pos=> pos<2? pos:fibPos(pos-1) + fibPos(pos-2)
console.log(fibPos(8))