let array = [2,4,6,8,10];

let fark = array[1] - array[0];
let aritmetic = true;

let nisbet = array[1] / array[0];
let geometric = true;

for(i=2; i<array.length; i++) {
    if(array[i] - array[i-1] != fark) {
        aritmetic = false;
    }

    if(array[i] / array[i-1] != nisbet) {
        geometric = false;
    }
}

if(aritmetic === true) {
    console.log("Aritmetrik Sayilardir !");
}
else if(geometric === true) {
    console.log("Geometrik Sayilardir ! ");
}
else {
    console.log("Hic biri Degil !");
}