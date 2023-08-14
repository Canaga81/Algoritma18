let str = prompt("Bir Soz Giriniz: ");

let newStr = str.replace(/[a-z]/gi, (char) => {
    if(char === "z") {
        return "a";
    }
    else {
        return String.fromCharCode(char.charCodeAt() + 1);
    }
});

alert("Yazdiginiz sozun harflerinin bir sonraki harflerle deyisilmis formasindan yaranan soz: " + newStr);