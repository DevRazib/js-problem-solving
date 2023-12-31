// ----------- stack learner --------------

//A function can be stored in a variable 

function sayName(name){
  return `Hello ${name}`;
}
var hello=sayName;//just reference set kora 
/* var fun=sayName('razib');
console.log(hello)
console.log(fun) */
// var res=hello('Razib ahmed');
// console.log(res);
var anotherHello=hello('Mohammad Razib Ahmed');
console.log(anotherHello);


// A function can be stored in an array 
var arr=[1,2,3,anotherHello];
arr.push(sayName);
console.log(arr);

// A function can be stored as a object field or property 
var person={
  name:'Hm Nayem',
  sayName:'hellow',
  print:function(){
    console.log(`hi`)
  }
}
console.log(person)