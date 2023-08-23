let ad_1 = "leman";
let ad_2 = "limon";

let ferqliHerfler = 0;

for(let i=0; i<ad_1.length; i++) {
    if(ad_1[i] != ad_2[i]) {
        ferqliHerfler += 1;
    }
}

console.log(ferqliHerfler);