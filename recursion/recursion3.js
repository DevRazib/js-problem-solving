//whatsdev

function fact(num){
  let total=1;
  for(let i=1;i<=num;i++){
    total*=i;
  }
  return total
}
console.log(fact(5))
//5! = 1*2*3*4*5

//with recursion way

function factorial(numbers){
  if(numbers===1) return 1;//base case 
  return numbers * factorial(numbers-1);//recursive call 
}
//5 * 4
//    4* 3
//      3* 2
//       2*1
//           1

console.log(factorial(5))


function sumList(arr){
  let total2=0;
  for(let item of arr){
    total2 +=item;
  }
  return total2;
}
console.log(sumList([1,2,3,4,5]));

//with recursive way

function sum(arr){
  if(arr.length===0) return 0;
  return arr[0] + sum(arr.slice(1))
}
console.log(sum([1,2,3,4,5]))

// sum all the digits in a number. example 345=12 and 456=15
//456 % 10--->6   // 456 /10 --->.floor(45.6)

function addDigits(num){
  if(num<10) return num;
  return num % 10 + addDigits(Math.floor(num/10));
}
console.log(addDigits(456))


function countDown(count){
    console.log(count);
    let id=setTimeout(function()
    {
      if(count ===0){
        clearTimeout(id);
      }else{
        countDown(count-1);
      }
    },1000)
}
countDown(10);