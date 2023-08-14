let soz = prompt("Bir soz giriniz: ");


let arr = soz.replace(/[^a-zA-Z0-9 ]/g, "").split("").reverse().join("");


console.log(arr);