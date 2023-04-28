function StringNow(string){
  return string.split('').reverse().join('');
}

const str='I love Bangladesh';
const now=StringNow(str);
console.log(now);