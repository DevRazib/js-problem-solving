//syntax
//Array.filter((element, index, array) => { ... } )
/* 
The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array. */
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

  /* const findingName=users.map(task=>task.name);
  console.log(findingName); */

  const currentYear = new Date().getFullYear();
  const filteredUsers = users.filter((user) => (currentYear - user.birthYear) > 25);
  
  console.log(filteredUsers);
  console.log(typeof users);

  arr = new Array(1, 2, 3, 6, 5, 4);
  var new_arr = arr.filter(function (x){
      return x % 2==0;
  });
    
  console.log(new_arr)

const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const result = words.filter(word => word.length < 8);
console.log(result);


var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];

//   var repels=pilots.filter(function(pilot){
//     return pilot.faction==='Rebels';
//   });

//with arrow function
const rebels=pilots.filter(pilot=>pilot.faction=== 'Rebels');
  console.log(rebels);

//   var empire=pilots.filter(function(pilot){
//     return pilot.faction==='Empire';
//   })

const empire=pilots.filter(pilot=>pilot.faction==='Empire');
  console.log(empire);

 
const numbers3=[1,2,3,4]
const evens=numbers3.filter(item=>item %2 ===0);
console.log(evens);

const students = [
    { name: 'Rahed', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Nowshad', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Rabbi', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
 //return studentGrades; 
  console.log(studentGrades);

  let arrNum=[15,39,20,32,30,45,22]
 /*  function divByFive(num){
    return num % 3 ===0
  }
  let arrNewNum=arrNum.filter(divByFive); */
  //with arrow function
let arrNewNum=arrNum.filter((item)=>item % 3===0)
console.log(arrNewNum);
