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