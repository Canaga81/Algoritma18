//! 1-Cumledeki harflerin buyutulmesi

let str = "bugun hava cok sicak, denize gide biliriz.";

let newStr = [];

let arr = str.split(' ');

arr.forEach((word) => {
    newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
});
console.log(newStr.join(' '));

//! Sozdeki harfin buyutulmesi

let soz = "baku";

let ilkHarf = soz.charAt(0).toUpperCase();
let kalanHarfler = soz.slice(1, soz.length);

console.log(ilkHarf + kalanHarfler);