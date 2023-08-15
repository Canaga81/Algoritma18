let str = "lane borrowed";

let arr = str.toLowerCase().split("");

let controlArr = [];

arr.forEach((word) => {
    if(arr[arr.indexOf(word)] === "a" && arr[arr.indexOf(word) + 4] === "b") {
        controlArr.push(1);
    }
});

if(controlArr.includes(1)) {
    console.log(true);
}
else {
    console.log(false);
}