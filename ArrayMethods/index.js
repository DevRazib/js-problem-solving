//to string

const fruits=['Banana','Apple','Orange','Mango','PineApple'];

// console.log(fruits.toString());

// fruits.join(' * ')
// console.log(fruits);
// console.log(fruits.push('Apple-2'));
// console.log(fruits.pop());

fruits[0]='Guava';
console.log(fruits);
delete fruits[3];
console.log(fruits);

//splice
fruits.splice(2,0, 'lemon', 'kiwi');
console.log(fruits);
fruits.splice(2,2, 'lemon', 'kiwi');
console.log(fruits);

//remove using splice
fruits.splice(0,1);
console.log(fruits);

//concat
let num=[10,20,30];
let name=['Razib','Rahed', 'kamal']
let letter=['A','B','C']

console.log(num.concat(name));
console.log(num.concat(name,letter));