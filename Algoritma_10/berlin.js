let num = Number(prompt("Bir rakam giriniz: "));

let hour = Math.floor(num / 60);
let minute = num % 60;

console.log(hour + ":" + minute);

console.log(Math.floor(num / 60) + ":" + num % 60);

console.log(`${Math.floor(num / 60)}:${num % 60}`);