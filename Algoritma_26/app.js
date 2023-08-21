let str = "88Hello 3World";

//! 1 Yol

// let strArr = str.split('');

// let numberArr = [];

// for(i=0; i<strArr.length; i++) {

//     let lastI = numberArr.length - 1;

//     if((/[^0-9]/).test(strArr[i])) {
//         numberArr.push(strArr[i]);
//     }
//     else {
//         if(numberArr.length === 0) {
//             numberArr.push(strArr[i]);
//         }
//         else if((/[0-9]/).test(numberArr[lastI])) {
//             numberArr[lastI] = numberArr[lastI] + strArr[i];
//         }
//         else if((/[^0-9]/).test(numberArr[lastI])) {
//             numberArr.push(strArr[i]);
//         }
//     }

// }

// calculateSum(numberArr)

// function calculateSum(arr) {

//     let sum = 0

//     for(let j=0; j<arr.length; j++) {
//         if(arr[j].match(/\d+/)) {
//             sum += parseInt(arr[j]);
//         }
//     }

//     console.log(sum);

// }


//! 2 Yol

function NumberAddition(str) {

    let sum = 0;

    str = str.replace(/[^0-9\.]+/g, " ").split(" ");

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    console.log(sum);

}

NumberAddition(str);