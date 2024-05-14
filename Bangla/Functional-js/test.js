function add(x,y){
  return x+y;
}
console.log(add(20,30));

function outer(){
  function inner(){
    console.log(`I'm inner function `)
  }
  inner();
  console.log(`I'm outer function `)
}
outer()

// currying

// normal function 
function fsum (a,b) {
  return a+ b
}
fsum(10, 2)       // 12
//Currying
function fsum_curry (a) {
  return function(b) {
    return a + b
  }
}

fsum_curry(10)(2) // 12

function sum (a){
  return function(b){
    return a+b;
  }
}
console.log(sum(20)(80));

// Here's a non-functional example
const ages = [12,32,32,53]
for (var i=0; i < ages.length; i++) {
    finalAge += ages[i];
}
console.log(finalAge)

// Here's a functional example
const ages2 = [12,32,32,53]
const totalAge = ages2.reduce( function(firstAge, secondAge){
    return firstAge + secondAge;
})
console.log(totalAge)