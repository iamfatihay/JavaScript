// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanimlama
//* ---------------------------------------------------------

//! 1. YÖNTEM (Array Literal) - tercih edilen yöntem

const yaslar = [30, 24, 55, 78, 12];

console.log(yaslar);
console.log(yaslar.length);

//!hata const keyword ü ile tanimlanmiş bir diziyi tamamiyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir
// yaslar=[1,2,3,4]

//! 2. YÖNTEM (Array Constructor)

const cars = new Array("BMW", "Mercedes", "Volvo");
console.log(cars);

//!10 elemanli bir Array tanimlama
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


console.log(--isimler[7][2]);//elemani 1 eksilttik
console.log(isimler[7][2]);//kalici eksilmiş oldu


// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanini siler, yazdirirsak sildiği elemani döndürür

const meyveler=["Elma", "Erik","Armut", "Muz","Kivi"]

meyveler.pop()

console.log(meyveler);
console.log(meyveler.pop());

//*shift() dizinin ilk elemanini siler, yazdirirsak sildiği elemani döndürür

console.log(meyveler.shift());
console.log(meyveler);

//*push() dizinin sonuna eleman ekler, yazdirirsak dizinin güncel eleman sayisini döndürür

console.log(meyveler.push("Çilek", "Kavun", "karpuz"));
console.log(meyveler);

//*unshift() dizinin başina eleman ekler, yazdirirsak dizinin güncel eleman sayisini döndürür

console.log(meyveler.unshift("Ayva"));
console.log(meyveler);


//*reverse() dizinin tamamini ters çevirir
meyveler.reverse()
console.log(meyveler);

console.log(meyveler[3].split("").reverse());

// dizinin 3. string elemanini Array e çevirip reverse metodu ile ters dönmüş dizi yaptik. tekrar ters dönmüş dizi olsun istersek join("") kullanabiliriz
console.log(meyveler);

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemani sağa ittir, artik orada yeni yazdiğim olsun
//*2.parametre=1 ise belirttiğim index teki elemani sil üstüne yaz


// ["karpuz", "Kavun", "Çilek", "Armut", "Erik", "Ayva"];
meyveler.splice(2,0,"Mango")
console.log(meyveler);

meyveler.splice(1,1,"Ananas")//=meyveler[1]="Ananas"
console.log(meyveler);


//* sort(), string ifadelerde alfabetik siralar(ascii değerlerine göre)
//* sort metodu diziyi iterasyona uğratir ve parametre olarak aldiği arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanina uygular.
//* Bu sayade küçük sayilar ile büyük sayilari yer değişirerek siralama işlemini gerçleştirir.
meyveler.sort()
console.log(meyveler);

const number=[3,5,1,35,10,22,55,77,231]
number.sort()
console.log(number);

number.sort((a,b)=>a-b)
console.log(number);

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1= [3,5,2,"2","uc",2,"bes",5,"6"]

//* includes *********

console.log(sayilar1.includes("5"));  //false
console.log(sayilar1.includes(5));  //true

//* indexof(), lastIndexOf() ************

console.log(sayilar1.indexOf("2"));  // 3
console.log(sayilar1.indexOf(2,3));  // 5
// index i 3 ten sonraki 2 yi bul diyor
console.log(sayilar1.lastIndexOf(5));  // 7
// sondan baslayarak bakiyor, ilk gordugunu aliyor

//* ORNEK *********
//* kullanicidan sayi isteyin.
//* girilen sayinin hem string hem number hali sayilar dizisinde var mi araştir, varsa index ini döndür.
// const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

// const sayiString = prompt("lütfen bir sayi giriniz"); //"5"
// const sayiNumber = Number(sayiString); //5
// let varMi=false;

// if (sayilar1.includes(sayiString)) {
//   console.log(
//     "aradiğiniz sayinin String hali dizide var ve index i:",
//     sayilar1.indexOf(sayiString)
//   );
//   varMi=true
// }
// //  else console.log("aradiğiniz sayinin string hali bulunamadi");
// if (sayilar1.includes(sayiNumber)) {
//   console.log(
//     "aradiğiniz sayi dizide var ve index i:",
// sayilar1.indexOf(sayiNumber)
//   );
//   varMi=true
// }
// // else console.log("aradiğiniz sayinin number hali bulunamadi");

// if(!varMi){   //unlem yerine varMi==false da diyebilirdik
//   console.log("aradiğiniz sayi bulunamadi");
// }

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil,
//? elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

console.log(sayilar1.join(","));
console.log(sayilar1.join("A "));

// const meyveler=["Elma", "Erik","Armut", "Muz","Kivi"]
 //* dizinin 2.elemanini tersten string olarak yazdir

 console.log(meyveler[2].split("").reverse().join(""));  // avyA

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());


//* ********* SLICE *********
const arabalar=["bmw","mercedes","audi","ferrari","lamborgini"]

console.log(arabalar.slice(3));
console.log(arabalar.slice(1,3));
console.log(arabalar.slice()); //! diziyi kopyalamak icin de kullanilabilir

const arabalar2=arabalar.slice();
console.log(arabalar2);

//* ********* CONCAT *********

const ksiiler=["özlem","esra","nihal","fatih","hüseyin"]
const rakamlar=[1,2,3,4,5,6]

const birlesik=ksiiler.concat(rakamlar,true,"halit","emirhan",["irfan","yunus"],[["a","b","c"]])

console.log(birlesik);

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18,23,35,44,57,89,15]
console.log(yas.every((a)=>a>=18)); // false

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

console.log(yas.some((a)=>a>70)); // true
console.log(yas.some((a)=>a>90)); // false