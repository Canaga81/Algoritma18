let str = "454793";

let arr = [];

for(i=0; i<str.length; i++) {
    if((/^1-9/).test(str[i])) {
        arr.push(str[i]);
    }
    else {
        if(
            str[i] % 2 != 0 &&
            str[i+1] % 2 != 0 &&
            str[i+1] != undefined &&
            (/[1-9]/).test(str[i+1])
        ) {
            arr.push(str[i] + "-");
        }
        else {
            arr.push(str[i]);
        }
    }
}

console.log(arr.join(''));