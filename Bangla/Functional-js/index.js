// ----------- stack learner --------------


// first class function 
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

// we can pass function as needed 
var sum=10+(function(){ return 50})();
console.log(sum)


// forEach
const arr2=[5,9,1,2,3,4,5]

//first do it normally 
function loop(arr){
  for (var i=0; i<arr2.length;i++){
    console.log(arr2[i])
  }
}
loop(arr2);

// ============== now with forEach

arr2.forEach(function(ele,ind,arr){
  console.log(`Element is ${ele} . Index is ${ind}`)
})
