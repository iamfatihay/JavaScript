const sucuk=250;
const cola=20;
const peynir=200;

let toplam=sucuk+cola+peynir;
console.log(toplam);

//! bir arttir

toplam++;
// toplam=toplam+1
console.log(toplam);

//! 10 arttir

toplam+=10;
// toplam=toplam+10
console.log(toplam);

//?  + operatörü String Concatination işlemi de yapar.

const ad="esra"
const soyad="fatih"

console.log("adim ve soyadim: "+ad+" "+soyad);
console.log(`adim ve soyadim: ${ad} ${soyad}`);
//! backtick(`) isareti ile bu sekilde kisaca da yazilabilir.

//*bir sayı ve string toplanırsa alttaki gibi concatination yapar
const s1=5;
const s2="7";

console.log(s1+s2); //57
//* çıkarma işleminde verilerden biri number ise diğeri tırnaklı number olsa bile çıkarma yapar
console.log(s1-s2); //-2

const s3="iki";
console.log(s1-s3);
// NaN uyarisi aliriz, (Not a Number)


const dogumTarihi=1979;
const name1="Ashley";
console.log(name1 + " " + (2023-dogumTarihi) + " "+ "yasindadir");

//! template literals (backticks)

console.log(`${name1} ${2023-dogumTarihi} yasindadir`);

//* ARTTIRMA AZALTMA

let a=5;
console.log("ilk", a++);
console.log("ikinci", a);
let b = a++;
console.log(a); //7
console.log(b); //6


console.log("*********************************");

let c=10;

console.log(++c); //11
console.log(c); //11

let e=33;

console.log(--e); //32
console.log(e--); //32
console.log(e); //31

//!  e yi 5 arttirma

e += 5;
console.log(e); //36

//!

// e = e*10
e *= 10;
console.log(e); //e*10=360

//? CARPMA VE ÜS ALMA

const pi = 3.14;
const r = 3;

const alan = pi * r ** 2;
console.log(alan);

const cevre = 2 * pi * r;
console.log(cevre);
console.log(Math.ceil(cevre));

//? Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

const ab = -1.3;
console.log(Math.trunc(ab));
console.log(Math.floor(ab));


//*********** MOD ALMA ********** */

const number = 456;

const birler = number % 10;
console.log(birler);  //6

const onlar = Math.trunc(number/10)%10;
console.log(onlar);  // 5

const yuzler = Math.floor(number/100);
console.log(yuzler);  //4

//* KARSILASTIRMA ++++++++++++ //

const sayi1=4;

console.log(sayi1==4);//true
console.log(sayi1===4);//true
console.log(sayi1=="4");//true
console.log(sayi1==="4");//false

console.log(sayi1!=4);//false
console.log(sayi1!="4");//false

console.log(sayi1>4);
console.log(sayi1<=4);


//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false


