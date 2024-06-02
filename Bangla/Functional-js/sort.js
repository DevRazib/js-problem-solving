const array=[67, 34, 21, 45, 6, 29, 38, 55, 76, 10];
// very basic way  or normal way there is problem with number six 
array.sort();
console.log(array);

// chuto theke boro - there is no any issue (a-b)
array.sort((a,b)=>a-b);
console.log(array);
// boro theke chuto (b-a)
array.sort((a,b)=>b-a);
console.log(array);
// 2jaigai e minus 