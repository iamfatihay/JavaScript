// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//! Global Scope

let birinci =5;
let ikinci =12;
let ucuncu =123;

console.log(birinci,ikinci,ucuncu);

const scopeDeneme=function(){
    birinci=8
let ikinci=45
console.log(ikinci);

let dorduncu=1234
// return dorduncu => yazılır fonksiyon dışına dorduncu yandaki gibi yazarsak dönmüş olur=>  console.log(scopeDeneme())=1234
}

scopeDeneme()
console.log(birinci);
console.log(ikinci);
console.log(dorduncu);