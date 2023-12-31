let sum = 0;
const numbers = [10, 25, 73, 84];
numbers.forEach(addNumbers);

function addNumbers(number) {
  sum += number;
}
console.log(sum);

const computers= [  
  { make: 'ASUS', model: 'CT-0019', type: 'PC', price: 25000}, 
  { make: 'DELL', model: 'DX-001', type: 'PC', price: 16800},  
  { make: 'ASUS', model: 'CT-0011', type: 'LAPTOP', price: 79800},  
  { make: 'ASUS', model: 'CT-0209', type: 'LAPTOP', price: 65400},  
  { make: 'DELL', model: 'DX-005', type: 'PC', price: 34500},  
  { make: 'DELL', model: 'DX-001', type: 'LAPTOP', price: 35000},  
  { make: 'HP', model: 'HP-003', type: 'PC', price: 36500},  
  { make: 'HP', model: 'HP-025', type: 'PC', price: 50000},  
  { make: 'DELL', model: 'DX-004', type: 'LAPTOP', price: 87000},  
  { make: 'HP', model: 'HP-324', type: 'PC', price: 46000}
 ];
 
 const averageComputerPrice = computers
   .filter(c => c.type === 'LAPTOP')  
   .map(c => c.price)  
   .reduce((sum, price, i, array) => sum + price / array.length, 0); 
 console.log(averageComputerPrice);

 // Here's an example of each
const array = [1, 2, 3];

const mappedArray = array.map(elem=>elem+1);
console.log(mappedArray)
// mappedArray is [2, 3, 4]

const reduced = array.reduce((firstElement, secondElement)=>firstElement+secondElement)
console.log(reduced)
// reduced is 6

const filteredArray = array.filter(function(element){
    return element !== 1;
});
// filteredArray is [2, 3]