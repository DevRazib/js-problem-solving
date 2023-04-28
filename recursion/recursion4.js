//Nisha singla

//normal way
function countDown(n){
    for(let i=n; i>0; i--){
      console.log(i);
    }
}
countDown(3);

//recursion way
function recursionCountDown(n){
  if(n===0) return ;
    console.log(n);
  recursionCountDown(n-1);
}
recursionCountDown(3);

var factorial=function fact(n){
  if(n===1) return 1;
  return n * fact(n-1)
}
console.log(factorial(4))

function fact(n){
  if(n===1) return 1;
  return n*fact(n-1);
}
console.log(fact(5))


//normal way
function total(n){
  let totalNumber=0;
  for(let i=0; i<=n; i++){
    totalNumber += i;
  }
  return totalNumber;
}
console.log(total(4))

//recursion way
function totalSum(n, totalRecursion=0){
 
  //baseCase
  if(n===0) return totalRecursion;
  return totalSum(n-1, totalRecursion+=n);
}
console.log(totalSum(3))