//syntax
// Arrays.map((element, index, array) => { ... })
//The map() method is used for creating a new array from an existing one,
// applying a function to each one of the elements of the first array.
const bitcoinList = [1, 3, 5, 4, 2];
const dollarList = [];

const bitcoinValue = 62953.10; // It's not a constant check it later!! :)

for (let i=0; i<bitcoinList.length; i++) {
    dollarList[i] = bitcoinList[i]*bitcoinValue;
}

console.log(dollarList);

const num=[10,20,30,40];
const sumOfNumber=[];
const addNumber=10;
for(let i=0; i<num.length; i++){
    sumOfNumber[i] = num[i]+addNumber;
}
console.log(sumOfNumber);

//using map
const num2=[10,20,30,40];
const addNumber2=10;
const sumOfNumber2=num2.map((ele)=> ele + addNumber2);
console.log(sumOfNumber2);

const arra3=[1,2,3,4,5,6];
function triple(n){
    return n*3;
}
const newArra3=arra3.map(triple);
console.log(newArra3);

//Envato tuts
// Durations are in minutes 
const tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];
/* const task_names=tasks.map(function(task,index,array){
    return task.name;
});
console.log(task_names); */

//with arrow function
const task_names=tasks.map(task=>task.name);
console.log(task_names);

// What you have
var officers = [
    { id: 20, name: 'Razib Ahmed' },
    { id: 24, name: 'Rahed Ahmed' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  // What you need  [20, 24, 56, 88]
/* 
  const officersId=[]
  officers.forEach(function(officer){
    officersId.push(officer.id)
  })
console.log(officersId);

let officerName=[];
officers.forEach(function(oName){
    officerName.push(oName.name);
});
console.log(officerName); */

//using map
var officersId=officers.map(function(officer){
    return officer.id;
})
console.log(officersId);
//more simple with arrow function 
var officerName=officers.map(officer=>officer.name)
console.log(officerName);

const numbers3=[1,3,4];
const doubled=numbers3.map(ele=>ele*2);
console.log(doubled);


const arrOne=[32,45,63,36,24,11]
let add8=(num)=>{
    return num + 8;
}
let arrTwo=arrOne.map(add8);
console.log(arrTwo);
//with arrow function 
const multFive=arrOne.map(ite=>ite*5);
console.log(multFive);