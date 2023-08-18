let num_1 = [123456789];
let num_2 = [10000];

let division = Math.floor(num_1 / num_2).toString();

if(division < 4) {
    console.log(division);
}

let divisionArr = division.split('').reverse();

let arr = [];
let j = 0;

for(i=0; i<divisionArr.length; i++) {

    if(j != 0 && j % 3 === 0) {
        arr.push(divisionArr[i] + ",");
    }
    else {
        arr.push(divisionArr[i]);
    }

    j++;

}

console.log(arr.reverse().join(''));