// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1. YÖNTEM (Array Literal) - tercih edilen yöntem

const yaslar = [30, 24, 55, 78, 12];

console.log(yaslar);
console.log(yaslar.length);

//!hata const keyword ü ile tanımlanmış bir diziyi tamamıyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir
// yaslar=[1,2,3,4]

//! 2. YÖNTEM (Array Constructor)

const cars = new Array("BMW", "Mercedes", "Volvo");
console.log(cars);

//!10 elemanlı bir Array tanımlama
const sayilar = new Array(10);

console.log(sayilar);
sayilar[4] = 256;
sayilar[9] = "Ayse";

console.log(sayilar);

console.log("**********************************");

const birth = 1979;

const isimler = [
  "Halit",
  "İrfan",
  "Emirhan",
  2023 - birth,
  "Esra",
  true,
  23,
  yaslar,
];
console.log(isimler);

isimler[5]=false
isimler[8]=58

console.log(isimler);
console.log(isimler[3]);
console.log(isimler[7][2]);
console.log(isimler[isimler.length-2][yaslar.length-3]);


console.log(--isimler[7][2]);//elemanı 1 eksilttik
console.log(isimler[7][2]);//kalıcı eksilmiş oldu


// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür

const meyveler=["Elma", "Erik","Armut", "Muz","Kivi"]

meyveler.pop()

console.log(meyveler);
console.log(meyveler.pop());

//*shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür

console.log(meyveler.shift());
console.log(meyveler);

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.push("Çilek", "Kavun", "karpuz"));
console.log(meyveler);

//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.unshift("Ayva"));
console.log(meyveler);


//*reverse() dizinin tamamını ters çevirir
meyveler.reverse()
console.log(meyveler);

console.log(meyveler[3].split("").reverse());

// dizinin 3. string elemanını Array e çevirip reverse metodu ile ters dönmüş dizi yaptık. tekrar ters dönmüş dizi olsun istersek join("") kullanabiliriz
console.log(meyveler);

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz


// ["karpuz", "Kavun", "Çilek", "Armut", "Erik", "Ayva"];
meyveler.splice(2,0,"Mango")
console.log(meyveler);

meyveler.splice(1,1,"Ananas")//=meyveler[1]="Ananas"
console.log(meyveler);