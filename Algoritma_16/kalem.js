let isim = "racecar";

let yeniIsim = isim.replace(/ /g, "").toLowerCase();


console.log(yeniIsim.split('').reverse().join('') === yeniIsim ? true : false);