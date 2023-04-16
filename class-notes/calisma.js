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
//     alert("Geçersiz ay ismi!")
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

// let notes=0 ;
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
//* Program 1 ile 20 arasinda rasgele bir sayi tutacak ve 
//* kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. 
//* Her yanlişta hakkini bir düşürecek ve ARTTIR/AZALT diyerek kullaniciyi yönlendirecektir.
//* Sonuç olarak kullanicinin hakki 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktir.
//* Oyun sonunda tekrar oynamak isteyip istemedigi sorulacaktir.


// function tahminOyunu() {
//     const rastgele = Math.ceil(Math.random() * 20);
//     console.log(rastgele);
//     let hak = 5;

//     while (hak > 0) {
//         const tahmin = +prompt("sayi tahmin ediniz");
//         hak--;
//         if (tahmin == rastgele) {
//             console.log("tebrikler bildiniz🥳");
//             let ask1 = prompt("Do you want to play again?(Y/N)");
//             if (ask1.toLowerCase() == "y") {
//                 tahminOyunu()
//             } else {
//                 alert("Thanks for your play!")
//                 break;
//             }
//             break;// tahmin doğruysa ve ask1=="n" ise
//         } else if (tahmin < rastgele) {
//             console.log("ARTTIR📈");
//             console.log(hak + "hakkiniz kaldi");
//         } else {
//             console.log("AZALT📉");
//             console.log(hak + "hakkiniz kaldi");
//         }
//         if (hak == 0) {
//             console.log("üzgünüz bilemediniz");
//             ask1 = prompt("Do you want to play again?(Y/N)");
//             if (ask1.toLowerCase() == "y") {
//                 tahminOyunu()
//             } else {
//                 alert("Thanks for your play!")
//                 break;
//             }
//         }
//     }
// }
// tahminOyunu()
// //*  ************************* 3.Assignment *******************************************************
// //!  ************************* Question-1 **************************************
// const ucgen=(t,h)=> (t*h/2)
// console.log(ucgen(5,6));  //answer=15
// //!  ************************* Question-2 **************************************
// const square=(x)=>x*x
// const cube=(x)=>x**3
// const power=(x,y)=>x**y

// const calculation=(calculation,x,y)=>{
//     let result;
//     if (calculation=="square") {
//         result=square(x)
//     } else if(calculation=="cube") {
//         result=cube(x)
//     }else if(calculation=="power"){
//         result=power(x,y)
//     }
//     return result
// }
// console.log(calculation("square",6));   // 36
// console.log(calculation("cube",3));    // 27
// console.log(calculation("power",2,3));   // 8
// //!  ************************* Question-3 **************************************
// const leapYear=function(year) {
//     return year%4==0 && (year%100!=0 || year%400==0) ? `${year} is a leap year.` : `${year} is not a leap year.`
// }
// console.log(leapYear(100),leapYear(4),leapYear(2000));  // (false,true,true)
// //*  ************************* TeamWork *******************************************************

const isString = x =>{ 
    return (typeof x == 'string') ? 'Input is a string' : 'Input is not a string' 
} 
 
console.log(isString('Clarusway')) 
console.log(isString(2019)) 
//! **********************************************************************
let avengers = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk', 'Hawkeye'] 

const newArray1 = avengers.slice(-2)
console.log(newArray1);  // ['Hulk', 'Hawkeye']

const newArray2 = avengers.slice(2)
console.log(newArray2);  // ['Black Widow', 'Hulk', 'Hawkeye']


const newArray3 = avengers.slice()
console.log(newArray3);  // ['Iron Man', 'Captain America', 'Black Widow', 'Hulk', 'Hawkeye']
//! **********************************************************************
let avengers2 = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk', 'Hawkeye'] 
avengers2.splice(2,6,'Thor', 'Hawkeye')
console.log(avengers2)  // ['Black Widow'] 


//! **********************************************************************

const capitalizeFirstLetter = (inputString) => { 
    let newText = inputString.split(" ");
    console.log(newText); // ['Lorem', 'ipsum', 'Dolor', 'sit', 'amet,', 'conde', 'elit.']

    for (i in newText) { 
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1); 
    } 
    return newText.join(" ") 
}
console.log(capitalizeFirstLetter("Lorem ipsum Dolor sit amet, conde elit."))

//! ************** VAR ile LET farklari *********************************

function example() {
  var x = 1; // Fonksiyon kapsamında tanımlandı
  let y = 2; // Blok kapsamında tanımlandı

  if (true) {
    var x = 3; // Değer değiştirildi
    let y = 4; // Yeni bir değişken oluşturuldu
    console.log(x); // 3
    console.log(y); // 4
  }

  console.log(x); // 3 - Değişken fonksiyon kapsamında olduğundan burada da erişilebilir
  console.log(y); // 2 - Değişken blok kapsamında olduğundan burada değişkenin ilk değeri olan 2'ye erişilebilir
}
example()
//! **********************************************************************
var x = 1;
var x = 2; // Aynı isimle tekrar değişken tanımlanır

console.log(x); // 2 - Son tanımlanan değeri yazar

let y = 3;
// let y = 4; // SyntaxError: Identifier 'y' has already been declared

console.log(y); // Uncaught ReferenceError: y is not defined

//! ********************* HOISTING ***********************************
console.log(x); // sonucu: undefined
var x = 5;

myFunction();

function myFunction() {
  console.log("Hello World!");
}

