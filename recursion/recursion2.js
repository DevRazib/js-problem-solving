//All Things JavaScript,LLC
/* 
A recursive function calls itself
A recursive function has two main parts
              1. A terminating condition(baseCase)
              2.Recursive case.
*/
//4factorial 4!=1*2*3*4

var factorial= function fact(n){
    if(n===1){
      return 1
    }
  return n* fact(n-1);
}
var finalresult=factorial(5);
console.log(finalresult);