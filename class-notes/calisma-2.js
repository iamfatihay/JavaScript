//? *************************** Assignment ****************************
//* Question-1
const fiyatlar = [100,250,50,89]
fiyatlar.forEach((item,i,fiyatlar)=>{fiyatlar[i] = (item * 1.1).toFixed(2)})
console.log(fiyatlar);

//* Question-2
fiyatlar.filter((a)=> a > 90).forEach((a)=> console.log(a))

//* Question-3
fiyatlar.filter((a)=>a<110).map((a)=>a * 1.1).forEach((a)=>console.log(a.toFixed(2)))

//* Question-4
const maaslar = [3000,5000,4000,6000,6500]
const yeniZam = maaslar.filter((a)=>a<4000).map((a)=>a*1.5)

//* Question-5
maaslar.filter((a)=>a>4000).map((a)=>a*1.25).forEach((a)=>console.log(a))


//* ******************** TEAMWORK ****************************+
var v = 1;
var f1 = function () {
 console.log(v);
};


var f2 = function () {
 var v = 2;
 f1();
//  console.log(v);  
};
f2();