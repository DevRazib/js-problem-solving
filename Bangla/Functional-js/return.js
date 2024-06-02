function host(){
  console.log(`I'm host function`);
  return function(){
    console.log(`I'm child`)
  }
}
var a=host();
console.log(a);


// function return - normal function create kore akta return lagaidilei hobee
function greeting(msg){
  return function(name){
    console.log(msg + " " + name)
  }
}
var gMorning=greeting('Good Morning')
var hello=greeting('Hello Coder ')

console.log(gMorning)
console.log(hello);
hello('Hello is calling');
gMorning('Morning is calling')