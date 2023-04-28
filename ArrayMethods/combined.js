var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];
/*   var totalJediScore = personnel
  .filter(function (person) {
    return person.isForceUser;
  })

  .map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })

  .reduce(function (acc, score) {
    return acc + score;
  }, 0); */

  //with arrow function

  const totalJediScore = personnel
  personnel.filter(person => person.isForceUser)
  personnel.map(jedi => jedi.pilotingScore + jedi.shootingScore)
  personnel.reduce((acc, score) => acc + score, 0);
  console.log(personnel);

  let newArr=[1,2,3,4,5,6,8,9,11];

  //   const nwArr=newArr.map(a=>a%2===0);
  //   const nwArr2=newArr.filter(a=>a%2===0);
  //   console.log(nwArr);
  //   console.log(newArr)
  //   console.log(nwArr2);
  //   console.log(newArr)
  let result=newArr.filter(n=>n%2===0);
  console.log(result);
  let result2=newArr.map(n=>n*2);
  console.log(result2);
  let result3=newArr.reduce((a,b)=>a+b)
  console.log(result3);

  let fruits=['Apple','PineApple','Mango','Banana', 'Orange'];

  const[first, second, ...restOfAll] =fruits;
  console.log(first);
  console.log(second);
  console.log(restOfAll);

  let person={
    name:'Razib',
    age:23,
    prof:'Js Developer'
  }
  const{name,age,prof}=person;
  console.log(name);
  console.log(prof);