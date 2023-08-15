let str = "Canaga Memmedov";

//! Cumlede olan butun herflerin sayini tapmaq ucun duzeldilen program 

let i = 0;

[...str].forEach((herf) => {
    if((/[a-zA-Z]/).test(herf)) {
        i = i+1;
    }
});
console.log(i);

//! Cumlede olan butun sozlerin sayini tapmaq ucun duzeldilen program (bosluqlari cixardaraq!)

console.log(str.trim().split(' ').length);