// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Ornek1 3 ün katı mı diye kontrol etme
//************************************ */

const katMi=(sayi)=> {return sayi%3==0 ? "3 un katidir" : "3 un kati degildir"}


console.log(katMi(25));

//* Örnek2:Menu fonksiyon
  // ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu=()=>{
    console.log("===========================");
    console.log("     JAVASCRİPT DERSİ      ");
    console.log("===========================");
    
    }
    
menu();

//****** */  Ornek3 yas hesaplama

 // new Date()= bize şu anın tüm tarih bilgilerini verir.Mesela .getFullYear() bu şekilde . ile istediğimiz tarihi çağırabiliriz (dakika saat gün ay vs)

 const yasHesapla=(yil)=> new Date().getFullYear() -yil

 
 console.log( yasHesapla(1979))

//   console.log(new Date().getHours());

