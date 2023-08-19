let str = "Hello World";


//! Yol 1

// let newArr = [];

// str.split('').forEach((herf) => {
//     if((/[^a-zA-Z]/).test(herf)) {
//         newArr.push(herf);
//     }
//     else if((/[a-z]/).test(herf)) {
//         newArr.push(herf.toUpperCase());
//     }
//     else if((/[A-Z]/).test(herf)) {
//         newArr.push(herf.toLowerCase());
//     }
// });


// console.log(newArr.join(''));


//! Yol 2

let arr = str.split('');

let newArr = [];

for(let i=0; i<arr.length; i++) {
    if((/[^a-zA-Z]/).test(arr[i])) {
        newArr.push(arr[i]);
    }
    else if((/[a-z]/).test(arr[i])) {
        newArr.push(arr[i].toUpperCase());
    }
    else if((/[A-Z]/).test(arr[i])) {
        newArr.push(arr[i].toLowerCase());
    }
}

console.log(newArr.join(''));