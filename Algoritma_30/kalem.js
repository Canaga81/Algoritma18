let arr = ["1","2","4","6","4","3","1"];
// let arr = ["10","9","8","7","6","12","13"];
// let arr = ["1","2","4","6","7","3","1"];
// let arr = ["1","2","4","3","6","12","7"];

let tendency = "Artir";
let newArr = [];

for(let i=1; i<arr.length; i++) {
    newArr.push(arr[i] - arr[i-1]);
}

if(newArr[0] < 0) tendency = "Azalir";

if(tendency === "Artir") {
    for(let i=0; i<newArr.length; i++) {
        if(newArr[i] < 1) console.log(i);
    }
}

if(tendency === "Azalir") {
    for(let i=0; i<newArr.length; i++) {
        if(newArr[i] > 0) console.log(i);
    }
}

console.log(-1);


//! Kodda Bezi Yanlisliqlar Var