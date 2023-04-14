//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) 
//! terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.
//*======================================================

//*----------ORNEK-----------

const prices1=[100,50,250,90]

prices1.forEach((a)=>console.log(a))

let toplam=0
let terminal= prices1.forEach((b)=>console.log(toplam+=b))
console.log(terminal);  // undefined

//*********************************ORNEK******* */
//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir.

const prices=[100,250,50,90]
let toplam1=0

prices.forEach((p,i,prices)=>{
    toplam1 += p
    console.log(`${i}. toplam ${toplam1}`);
    prices[i] = p * 2    // prices[i] = prices[i]*2
    //! bu sekilde diziyi kalici olarak degistirdik
})

console.log(prices);

//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp , bunu döndürebilir,  forEach gibi tüketmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names=["kubilay","irfan","fatih","özlem","nihal","yunus","emirhan","halit","esra","hüseyin"]

const yeniIsim = names.map((isim)=>isim.toUpperCase())

console.log(yeniIsim);


//*örnek
//* fiyatlar dizisindeki ürün fiyatlarin 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 150 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

const fiyatlar = [100,250,50,90];

fiyatlar.map((p,i,array)=>{
    if (p < 250) {
        array[i] = array[i] * 1.5
    } else {
        array[i] = array[i] * 1.2
    }
})

console.log(fiyatlar);

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const tlPrices = [100,150,200,80,50]
const dolar = 19.20
const euro = 21.20

const dolarPrices = tlPrices.map((a) => +(a/dolar).toFixed(2))
//! Number a cevirmek icin + koyduk, toFixed stringe cevirir cunku. Number() olarak da kullanilabilir
console.log(dolarPrices);

const euroPrices = tlPrices.map((i) => Number((i/euro).toFixed(2)))
//! Number() kullanilirsa ekstra parantezlere dikkat
console.log(euroPrices);

//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 100 TL den az olanlari ayri
//* bir diziye saklayalim.

// const prices=[200,500,100,180]

const yeniDizi = prices.filter((a) => a < 200)
console.log(yeniDizi);   // [100,180]


//* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.
const tlFiyatlar = [100, 150, 100, 50, 80];

const degerler = tlFiyatlar.map((d) => {
  if (d > 100) {
    d = d*1.1
  } else {
    d = d * 1.15
  }
  return d
});
console.log(degerler);

//?-------------- Ikinci cözum -------------------

const bir = tlFiyatlar.filter((a) => a > 100).map((c) => c * 1.1)
const iki = tlFiyatlar.filter((a) => a <= 100).map((c) => c *1.15)
console.log(bir.concat(iki));