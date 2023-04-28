//recursive function call it's self by own

//stack learner
function sayHi(n) {
  if (n === 0) {
    return;
  }
  console.log("Hi, I am calling");
  sayHi(n - 1);
}
sayHi(4);

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(5));

//factorial in recursion
function fact(numbers) {
  if (numbers === 1) {
    return 1;
  }
  return numbers * fact(numbers - 1);
}
console.log(fact(5));

var arr = [1, 2, 3, 4, 5];
function sumOfArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
}
console.log(sumOfArray(arr, arr.length - 1));

const num2 = 5;
var fact2 = 1;
var i = 1;
while (i <= num) {
  fact2 = fact2 * i;
  i++;
}
console.log(fact2);

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let output = factorial(6);
console.log(output);
