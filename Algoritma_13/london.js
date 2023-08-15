let str = "Akif";

let i = 0;

[...str].forEach((sait) => {
    if((/a|e|i|o|u|o|A|E|I|O|U/).test(sait)) {
        i = i+1;
    }
});
console.log(i);