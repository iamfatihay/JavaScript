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
//*  ************************* 2.ODEV ********************************************************
//!  ************************* Question-1 **************************************

// let notes=0 ;122
// let counter=0 ;
// let ask ;

// do {
//     let input = +prompt("Please enter a note");
//     notes += input
//     counter++
//     ask = prompt("Do you want to continue?(y/q)")
    
// } while (ask.toLowerCase() != "q");

// console.log("Average of notes entered: ", notes/counter);

//!  ************************* Question-2 **************************************

//? : Tahmin Oyunu
//* Program 1 ile 20 arasında rasgele bir sayı tutacak ve 
//* kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. 
//* Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.
//* Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktır.

// const rastgele = Math.ceil(Math.random() * 20);

// console.log(rastgele);

// let hak = 5;

// while (hak > 0) {
//   const tahmin = +prompt("sayı tahmin ediniz");

//   hak--;

//   if (tahmin == rastgele) {
//     console.log("tebrikler bildiniz🥳");
//     break;// tahmin doğruysa hak kım olduğu halde döngüden çıkılsın
//   } else if (tahmin < rastgele) {
//     console.log("ARTTIR📈");
//     console.log(hak + "hakkınız kaldı");
//   } else {
//     console.log("AZALT📉");
//     console.log(hak + "hakkınız kaldı");
//   }
//   if (hak == 0) {
//     console.log("üzgünüz bilemediniz");
//   }
// }