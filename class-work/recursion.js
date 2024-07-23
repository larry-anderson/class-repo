function sumRange(n) {
    if (n == 0){
        return 1;
       } else {
        return n + sumRange(n - 1);
    }
}


function power(b, x) {
    if (x == 0){
        return 1;
    } else {
       return b * power(b, x - 1);
    }
}
console.log(power(3,2));

// function factorial(n) {
//     if (n == 1) {
//         return 1
//     } else { 
//         return n * factorial(n - 1)
//     }
// }
// console.log(factorial(6))

// function all(arr, cb){
//     if (c)
// }

function productOfArray(ar){
    if(ar.length === 0){
        return 1
    } else {
        return ar.shift() * productOfArray(ar);
    }
}
console.log(productOfArray([1,2,3,4]))