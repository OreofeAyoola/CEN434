/*let A = [1,2,3,4,5,6,7,8,9,10];
 let sum = 0;
 for (let n=0;n<A.length;n++){
    sum+=A[n];
}
let Average = sum/A.length;
console.log ("Average: ", Average);
*/
 
//Factorial 
function Factorial(n){
    if (n<=1){
        return 1;
    }
    else {
        return n*Factorial(n-1);
    }
    
}
console.log(Factorial(92));


function combination(x,y){
 if (x>y){
    return Factorial(x)/(Factorial(x-y)*Factorial(y));
 }
if (x<y){
    return Factorial(y)/(Factorial(y-x)*Factorial(x));
}
else {
    return Factorial(x+1)/(Factorial((x+1)-y)*Factorial(y));
}
}
console.log(combination(9,9));