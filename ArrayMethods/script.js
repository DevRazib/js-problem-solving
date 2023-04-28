let a=[10,20,30,40]
// a[3] = 80;
// a[4] = 90;
// a[5] = 100;
// a[7] = 120;
// delete a[6]
//  for(i=0;i<a.length;i++){
//     console.log(a[i])
//  }
// console.log(typeof a);
//  let checkedArray=Array.isArray(a);
//  console.log(checkedArray);


//join() --------    ArrayName.join("delimit")
//sort() --------    ArrayName.sort()
//reverse() -----   ArrayName.reverse();
//push()   ------    ArrayName.push("element");  //inserted at last position
//pop()   ------    ArrayName.pop("element");  //Delete the last element
//shift() ------    ArrayName.shift();  //Delete the first element
//unshift() ------    ArrayName.unshift("element);  //inserted at first position

//splice() ----------  ArrayName.splice(index, numberOfDeletion, elements)
let b=[10,20,30,40,50]
// b.splice(0,0,5);
// console.log(b);
b.splice(1,1,15,20);
console.log(b);

a.splice(1,2);//it's take first 2 (index and numberOfDeletion)
console.log(a);



//slice() ---  ArrayName.slice(StartingIndex, StopIndex)

const Arr=[2,4,6,8,10,12,14];
const newArr=Arr.slice(2,5);
console.log(newArr);
console.log(Arr);

const ArrayofSlice=[10,20,30,40,50]
console.log(ArrayofSlice.slice(2,4));
