let arr = [1,5,16,3,7];

//! Yontem 1

const newArr = [...arr];
let sum = 0;

let maxValue = Math.max(...arr);

newArr.splice(newArr.indexOf(maxValue), 1);

for(i=0; i<newArr.length; i++) {
    sum += newArr[i];
}

console.log(maxValue === sum ? true : false);

//! Yontem 2

// const newArr = [...arr];
// let sum = 0;

// let maxValue = Math.max(...arr);

// for(i=0; i<newArr.length; i++) {
//     sum += newArr[i];
// }

// if(sum / 2 === maxValue) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

//! Yontem 3

// arr.sort((a,b) => a-b);
// let sum = 0;

// let maxValue = arr[arr.length-1];

// for(i=0; i<arr.length-1; i++) {
//     sum += arr[i];
// }

// console.log(maxValue === sum ? true : false);

//! Yontem 4

// const maxValue = Math.max(...arr);
// let sum = 0;

// for(i=0; i<arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum / 2 === maxValue ? true : false);

//! Yontem 5

// const maxValue = Math.max(...arr);

// let sum = 0;

// arr.forEach((item) => {
//     sum += item;
// });


// sum -= maxValue;

// if(sum === maxValue) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }