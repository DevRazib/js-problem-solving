function isPrime(n){
 for(let i=2;i<n; i++){
  if(n%i==0){
    return `Your number ${n} is not prime.`;
  }
 }
 return `Your number ${n} is prime.`;
}

const output=isPrime(10);
console.log(output);
