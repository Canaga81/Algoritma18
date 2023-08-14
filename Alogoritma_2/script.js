let sen = "fun&!! time";

let arr = sen.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");

let arrLength = arr.sort((a,b) => {return b.length - a.length});

console.log(arrLength[0]);

/* 
!Rules

    ! 1) Noktalama isaretlerini kaldir
    ! 2) Cumleyi bosluklardan bolup, kelimelerle bir Array olusturmak
    ! 3) Kelimelerle olustudugumuz arrayi, kelimelerin karakter sayilarina gore azalan bir sekilde siralamak
    ! 4) En basta yani 0. indekste yer alan kelimeyi return etmek
*/