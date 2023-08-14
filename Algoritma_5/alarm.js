let strArr = ["1, 3, 5, 4, 7", "1, 2, 5, 4, 15"];

let a = strArr[0].split(", ");
let b = strArr[1].split(", ");

let result = a.filter(x => b.find(a => a === x));


console.log(result.length > 0 ? result.join(", ") : false);