// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinasi
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortaminda kullanicidan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algilanir. sayi olsun istiyorsak önüne ya Number yazmaliyiz ya da + koymaliyiz
// const sayi1 = +prompt("1.sayiyi giriniz");
// const islem = prompt("+,-,*,/ işlemlerinden birini giriniz");
// const sayi2 = Number(prompt("2. sayiyi giriniz"));

// let sonuc = 0;

// if (islem == "+")
//   sonuc = sayi1 + sayi2;

//  else if (islem == "-")
//   sonuc = sayi1 - sayi2;
//  else if (islem == "*") {
//   sonuc = sayi1 * sayi2;
// } else if (islem == "/") {
//   if (sayi2 != 0) {
//     sonuc = sayi1 / sayi2;
//   } else {
//     alert("payda 0 olamaz");
//   }
// } else {
//   alert("yanliş işlem girdiniz");
// }
// console.log(sonuc);

//*ORNEK
const yas = 12;
const cinsiyet = "erkek";
const saglik = true;

if (yas >= 20 && cinsiyet == "erkek" && saglik == true) {
  console.log("askerlik yapabilir");
} else {
  console.log("askerlik yapamaz");
}

//!ternary (2.yol)
yas >= 20 && cinsiyet == "erkek" && saglik == true
  ? console.log("askerlik yapabilir")
  : console.log("yapamaz");

console.log("-------------------------------------");
console.log(" ==SWİTCH-CASE== 4 Islem Hesap Makinesi ");
console.log("-------------------------------------");

const s1 = +prompt("1.sayiyi giriniz");
const islem2 = prompt("+,-,*,/ işlemlerinden birini giriniz");
const s2 = Number(prompt("2. sayiyi giriniz"));

let sonuc2 = 0;

switch (islem2) {
  case "+":
    sonuc2 = s1 + s2;
    break;

  case "-":
    sonuc2 = s1 - s2;
    break;

  case "*":
    sonuc2 = s1 * s2;
    break;

  case "/":
    if (s2 != 0) sonuc2 = s1 / s2;
    else alert("payda 0 olamaz");

    break;

  default:
    alert("yanliş işlem girdiniz");
    break;
}
console.log(` ${s1} ${islem2} ${s2} = ${sonuc2} `);

//**************** */ TERNARY

//? ornek: maasiniz asgari ücretten düşük ve eşitse maaşiniza %25 zam yapilsin, değilse maaşiniza %10 zam yapilsin.

const asgariUcret=8000
const maas=+prompt("maasini gir")

 const zamliMaas= maas<= asgariUcret ? maas*1.25 : maas*1.10  

console.log(zamliMaas);

//?Ornek:10 aylik maasiniz borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsiniz

const Schuld=+prompt("borcunuzu giriniz")

const Gehalt= +prompt("Lütfen maasinizi giriniz")

console.log(Gehalt * 10 - Schuld >= 5000 ? "kredi alabilir 🥳" : "kredi alamaz 😞"); 