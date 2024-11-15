// =========== Day -2(closure) ============ //
/* 
@param {number} n
@return {function} counter 

*/

var createCounter=function(n){
  let count =n;
  return function(){
    return count++;//hidden state 
  };
}
class Coutner{
  constructor(n){
    this.n=n;
  }
 increment(n){
  return this.n++;
 } 
}
const counter= Counter(10);
counter.increment;


const counters=createCounter(10);
counter()
counter()
counter()
console.log(counters)