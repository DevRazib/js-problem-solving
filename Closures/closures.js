
/* 
function addSquars(a,b){
    function square(x){
        return x*x;
    }
    return square(a) + square(b);
} 

console.log(addSquars(4,4));


function outside(x){
    function inside(y){
        return x+y;
    }
    return inside;
}
res=outside(3);
res1=res(4);
console.log(res1);
//same result
console.log(outside(3)(4)) */


//using nested function
function a(x){
    function b(y){
        function c(z){
            console.log(x+y+z);
        }
        c(3)
    }
    b(4)
}
a(7)


