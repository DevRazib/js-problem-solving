//syntax
//reduce((previous, current, index, array) => { ... }, initialValue)
//https://dev.to/nehal_mahida/oops-in-javascript-with-easy-to-understand-examples-2ppn
const users = [
    {
      name: "Van Batchelder",
      city: "London",
      birthYear: 1998
    },
    {
      name: "Winter Rubino",
      city: "Madrid",
      birthYear: 1992
    },
    {
      name: "Yusuf Shea",
      city: "Paris",
      birthYear: 1990
    },
    {
      name: "Zion Shively",
      city: "Alabama",
      birthYear: 2002,
    }
  ];
  
const currentYear = new Date().getFullYear();
const userNames = users.reduce((filterUsers, user) => {
  if (user.birthYear && (currentYear - user.birthYear) > 25) {
    filterUsers.push(user.name);
  }
  return filterUsers;
}, []);

console.log(userNames);

/* 
In a nutshell,

filter: When you need to remove some unwanted element from array.
map: Convert one array into another.
reduce: When you need to boils down the array
*/
//link - https://dev.to/nehal_mahida/filter-map-and-reduce-in-js-when-and-where-to-use-281c


//geeksforgeeks
function product(a,b){
    return a*b;
}
const arr4=[1,2,3,6,5,4];
const productArray=arr4.reduce(product);
console.log(productArray);

let numbers=[1,2,3,4,5];
total=0;
numbers.forEach(function(number){
    total+=number;
});
console.log(total);

//with reduce
const total2=[10,20,30,40].reduce(function(previous,current){
    return previous + current;
},0);
console.log(total2);

const total3=numbers.reduce((previous, current)=> previous+current);
console.log(total3);

let array_of_arrays = [[1, 2], [3, 4], [5, 6]];
const concatenated = array_of_arrays.reduce( function (previous, current) {
        return previous.concat(current);
});
  
console.log(concatenated);

var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];
  /* var totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
  }, 0);
  console.log(totalYears); */

  //with arrow function
  const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
  console.log(totalYears); 

  var mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
  }, {});
  console.log(mostExpPilot);

  const numbers2=[1,-1,2,3];
// a=0, c=1 => a=1
//a=1, c=-1 =>a=0
//a=0, c=2 =>a=2
//a=2, c=3 =>a=5

  const sum=numbers2.reduce((accumulator,currentValue)=>accumulator + currentValue);
  console.log(sum);

  const numbers5 = [1, 2, 3, 4,5];
// const sum5 = numbers5.reduce(function (result, item) {
//   return result + item;
// }, 0);
//with arrow function
const sum5=numbers5.reduce((result,item)=>result + item)

console.log(sum5); // 10



var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 
let arrNum = [15, 39, 20, 32, 30, 45, 22]
function sumOfElement(num,id){
    return num + id;
}
let reduceArrElement=arrNum.reduce(sumOfElement);
console.log(reduceArrElement);


//with arrow function 
let reduceArr=arrNum.reduce((ele,arr)=>ele+arr)
console.log(reduceArr);