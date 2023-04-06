// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************


//? ornek ekrana 10 kere merhaba yazdirin

for (let index = 1; index <= 10; index++) {
    console.log( index, "MERHABA");
    
}

//? 1 den N e kadar olan sayilarin toplami

// const N = +prompt("lütfen N i giriniz");

// let toplam=0
// for (let i = 1; i <= N ; i++) {
  
//     // toplam=toplam+i
//     toplam+=i

    
// }
// console.log(toplam);

//? ÖRNEK: Dişaridan girilen sayinin Asal olup olmadiğini tespit ederek sonucu yazdiran programi yaziniz.

// const sayi=+prompt("asallik kontrolü için bir sayi giriniz")
// let asal=true;

// for(let i = 2 ; i < sayi; i++){

//  if(sayi % i ==0 ) {
//     asal=false
//  }


// }
// console.log(asal ? " asaldir" : "asal değildir");
//! bu sekilde yazildiginda  asal==true gibi anlasilir, default olarak true alir


//? ORNEK: 0-100 arasinda 7 adet rastgele sayi ureten kodu for dongusu ile yaziniz

// for (let i = 1; i <=7; i++) {
//     console.log(Math.round(Math.random()*100));
// }

//****************** */ WHİLE*************
//*ORNEK1: while için 1-100  arasinda bir sayi giriniz. aksi durumlarda error msj i verip, tekrar sayi isteyiniz

// let number = +prompt("WHİLE için 1-100 arasinda sayi giriniz");

// while (number < 1 || number > 100) {
//   console.error("number 1-100 arasinda olmali");
//   number = +prompt("tekrar sayi girmeyi deneyin");
// }

// console.log("tebrikler", number);
//! while daki şart true old sürece altindaki süslü işler, false old anda süslünün dişina çikilir

//****************** */ DO-WHİLE*************
//*ORNEK1: while için 1-100  arasinda bir sayi giriniz. aksi durumlarda alert verip, tekrar sayi isteyiniz
// let number1;

// do {
//    number1 = +prompt("DO-WHİLE için 1-100 arasinda sayi giriniz");
//    alert(number1)
// } while (number1 < 1 || number1 > 100);

// console.log("döngüden çiktiniz");


// şarta bakmadan ilk etapta do nun içindeki istek yapilir, sonrasinda while içi true old sürece do içindeki istek yapilmaya devam edilir

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkasi için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.



// let devam;
// do {
//     let vize=+prompt("vize notunu isteyiniz")
//     let final=+prompt("final notunu isteyiniz")

//     let gecmeNotu=vize*0.4 +final*0.6
//     console.log(gecmeNotu);
//  devam=prompt("devam etmek istiyorsaniz e/E girin")

// } while (devam.toUpperCase()=="E");

// console.log("ciktik");

//? ORNEK2: klavyeden q karakteri girilene kadar sayı girişi yapan bir programı döngü kullanarak yazınız.
// let sayi1;
// do {
//   sayi1 = prompt("lütfen sayı giriniz") 

// } while (sayi1 != "q");

// console.log("bitti");