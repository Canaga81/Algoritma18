//! Vurma

let num = +prompt("Faktorialini bulmak istediginiz Rakami Giriniz: ");

let factorial = 1;

for(i=2; i<=num; i++) {
    factorial *= i;
}

console.log(factorial);


//! Toplama

let num_2 = +prompt("Rakam Giriniz: ");
let toplama = 0;

for(i=0; i<=num_2; i++) {
    toplama += i;
}

console.log(toplama);


//! Ferq

let num_3 = +prompt("Rakam Giriniz: ");
let ferq = 1;

for(i=0; i<=num_3; i++) {
    ferq -= i;
}

console.log(ferq);


//! Bolme

let num_4 = +prompt("Faktorialini bulmak istediginiz Rakami Giriniz: ");

let bolme = 1;

for(i=2; i<=num_4; i++) {
    bolme /= i;
}

console.log(bolme);