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