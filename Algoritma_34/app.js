let arr = ["1100", "0111"];

const p1 = arr[0];
const p2 = arr[1];

let sumBit = "";

for(let i=0; i<p1.length; i++) {
    if(p1.charAt(i) === "1" || p2.charAt(i) === "1") {
        sumBit += "1";
    }
    else {
        sumBit += "0";
    }
}


console.log(sumBit);