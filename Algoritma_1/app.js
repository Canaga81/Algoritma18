let str = "Canaga_19";

if(

    str.length >= 4 && str.length <= 25 &&
    (/[a-zA-Z]/).test(str.slice(0,1)) &&
    (/^\w+$/).test(str) &&
    (/[a-zA-Z0-Z]/).test(str.slice(-1))
    
) {
    console.log(true);
}
else {
    console.log(false);
}