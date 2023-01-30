/* 
Create an array of even numbers and an array of odd numbers from the numbers 1 to 100 using for or while loop.
*/

let evenNumbers = [];
let oddNumbers = [];
for(let i = 1; i <= 100; i++){
  if(i % 2 === 0){
    evenNumbers.push(i);
  } else {
    oddNumbers.push(i);
  }
}
console.log(evenNumbers);
console.log(oddNumbers);

//sum of 1 to 10
let sum = 0;
for(let i = 1; i <= 10; i++){
  sum += i;
}
console.log(sum);

//sum of 1 to 100
let total=0;
for(let i = 1; i <= 100; i++){
  total += i;
}
console.log(total);


/*  Write an array with the prices of all the books you have. You have to skip the books that cost 200 taka or more. And have to return the cost of the rest of the books.
*/

let bookPrices = [100,,150,190, 200, 300, 400,300];
let bookPricesCostUnderTwoThousand = [];
for(let i = 0; i < bookPrices.length; i++){ 
    const price = bookPrices[i];
if(price < 200){
    bookPricesCostUnderTwoThousand.push(price);
}
}
console.log(bookPricesCostUnderTwoThousand);

/* 
Write a function that takes the price of two books you have and returns the total price of the books.
 */
function totalPrice(price1, price2){
    return price1 + price2;
}
console.log(totalPrice(100, 200));