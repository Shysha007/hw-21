//task 1
function getFactorial(n){
  return n === 1 ? n : n * getFactorial(n-1);
}
console.log(getFactorial(3));

//task 2
function pow(num, degree){
    return degree === 1 ? num : num * pow(num, degree - 1);
}
console.log(pow(5,2));

//task 3 
function sum(a,b) {
    if (b == 0) return a;
    return sum(++a, --b)
}
console.log(sum(5,7));
console.log(sum(340,500));

