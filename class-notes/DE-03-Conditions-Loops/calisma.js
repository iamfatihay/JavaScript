//* ****** ILK SORU ************************************************************
// const not = +prompt("Notunuzu giriniz..: ")

// if (not<0 || not>100) {
//     alert("Yanlis numara girdiniz!")
// }
// else if (not <= 25) {
//     console.log("FF");
// }
// else if (not<=45) {
//     console.log("DD");
// } 
// else if (not<=65) {
//     console.log("CC");
// } 
// else if (not<=75) {
//     console.log("BB");
// } 
// else if (not<=90) {
//     console.log("BA");
// } 
// else if (not<=100) {
//     console.log("AA");
// } 
// else alert("Yanlis numara girdiniz!")

//*  ******** 2.SORU ***************************************************************
// const ay = prompt("Lütfen ay ismini giriniz:");

// let siraNumarasi;

// switch (ay.toLowerCase()) {
//   case "ocak":
//     siraNumarasi = 1;
//     break;
//   case "şubat":
//     siraNumarasi = 2;
//     break;
//   case "mart":
//     siraNumarasi = 3;
//     break;
//   case "nisan":
//     siraNumarasi = 4;
//     break;
//   case "mayis":
//     siraNumarasi = 5;
//     break;
//   case "haziran":
//     siraNumarasi = 6;
//     break;
//   case "temmuz":
//     siraNumarasi = 7;
//     break;
//   case "ağustos":
//     siraNumarasi = 8;
//     break;
//   case "eylül":
//     siraNumarasi = 9;
//     break;
//   case "ekim":
//     siraNumarasi = 10;
//     break;
//   case "kasim":
//     siraNumarasi = 11;
//     break;
//   case "aralik":
//     siraNumarasi = 12;
//     break;
//   default:
//     siraNumarasi = "Geçersiz ay ismi!";
// }

// console.log(`${ay} ayi ${siraNumarasi}. siradadir.`);

//*  ******** 3.SORU *************************************************************************

// const sayi1 = +prompt("1.sayiyi giriniz: ")
// const sayi2 = +prompt("2.sayiyi giriniz: ")
// const sayi3 = +prompt("3.sayiyi giriniz: ")

// const islem = prompt("+|*|min|max bu islemlerden birini seciniz:")
// let sonuc = 0;

// switch (islem.toLowerCase()) {
//     case "+":
//         sonuc = sayi1+sayi2+sayi3
//         break;
//     case "*":
//         sonuc = sayi1*sayi2*sayi3
//         break;
//     case "min":
//         sonuc = Math.min(sayi1,sayi2,sayi3)
//         break;
//     case "max":
//         sonuc = Math.max(sayi1,sayi2,sayi3) 
//         break;
//     default:
//         alert("Invalid input")
//         break;
// }
// console.log(`Bu islemin("${islem}") sonucu: ${sonuc}`);

//*  ******** 4.SORU *********************************************************************
// const n = +prompt("Sayi giriniz:")
// const cikti = n%2==0 ? "Bu bir cift sayidir" : "Bu bir tek sayidir"

// console.log(cikti);

//*  ******** 5.SORU *********************************************************************+
//! 1-     °F = °C * 1.8 + 32
//! 2-     °C = (°F − 32) × 5/9

// const choose = prompt("Seciniz: 1-Fahrenheit to Celsius 2-Celsius to Fahrenheit (1/2):")
// const derece = +prompt("Dereceyi giriniz..:")

// let output = 0;

// switch (choose) {
//     case "1":
//     output = (derece-32)*(5/9)    
//         break;
//     case "2":
//     output = (derece*1.8) + 32 
//         break;
//     default:
//         alert("Invalid input")
//         break;
// }
// console.log(output)

