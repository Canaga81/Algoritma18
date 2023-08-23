let arr = [3, 6, 5, 10, 20, 7, 30];

let sortedArr = arr.sort((a, b) => a-b);

let newArr = [];

for(let i=1; i<sortedArr.length; i+=2) {
    newArr.push(sortedArr[i]);
    newArr.push(sortedArr[i-1]);
}

// console.log(newArr);

if(sortedArr % 2 != 0) {
    newArr.push(sortedArr[sortedArr.length - 1]);  //! Yeni bir Reqem elave etmek istesek bu kod yazilar <==
}

console.log(newArr);