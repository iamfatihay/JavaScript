//? *************************** Assignment ****************************
// //* Question-1
// const fiyatlar = [100,250,50,89]
// fiyatlar.forEach((item,i,fiyatlar)=>{fiyatlar[i] = (item * 1.1).toFixed(2)})
// console.log(fiyatlar);

// //* Question-2
// fiyatlar.filter((a)=> a > 90).forEach((a)=> console.log(a))

// //* Question-3
// fiyatlar.filter((a)=>a<110).map((a)=>a * 1.1).forEach((a)=>console.log(a.toFixed(2)))

// //* Question-4
// const maaslar = [3000,5000,4000,6000,6500]
// const yeniZam = maaslar.filter((a)=>a<4000).map((a)=>a*1.5)

// //* Question-5
// maaslar.filter((a)=>a>4000).map((a)=>a*1.25).forEach((a)=>console.log(a))


// //* ******************** TEAMWORK ****************************+
// var v = 1;
// var f1 = function () {
//  console.log(v);
// };


// var f2 = function () {
//  var v = 2;
//  f1();
// //  console.log(v);  
// };
// f2();
//* ******************** denemeler ****************************+
// var a = ['dog', 'cat', 'hen'];
// a[100] = 'fox';
// console.log(a);

// let animals = [{ type: 'lion' }, 'tiger'];
// let clones = animals.slice();

// clones[0].type = 'bear';
// clones[1] = 'sheep';

// console.log(animals);
// console.log(animals[0].type, clones[0].type);
// console.log(animals[1], clones[1]);


// let cat = { type: "lion" };
// cat.size = "large";
// console.log(cat);

// let copyCat = { ...cat };
// cat.type = "tiger";
// console.log(copyCat.type, copyCat.size);



// let cat = Object.create({ type: 'lion' });
// cat.size = 'large';
// console.log(cat);

// let copyCat = { ...cat };
// console.log(copyCat);
// cat.type = 'tiger';
// console.log(copyCat.type, copyCat.size);

// console.log(sum(10, 20)); 
// diff(10, 20);
// function sum(x, y) {
//   return x + y;
// }

// let diff = function (x, y) {
//   return x - y;
// };


// let arr = [1,3,-1,-3,5,3,6,7]
// let result=[]
// const k=3

// for (let i = 0; i < array.length-(k-1); i++) {
  
//   let maks = Math.max(...array.slice(i,k+i))
//   result.push(maks)

// }
// console.log(result);

let arr = [1,3,-1,-3,5,3,6,7]

function takeMax(array) {
  let result=[] 
  let k = +prompt("Please enter a number: ")

  if (k < 1 || k > array.length) {
    console.log("Invalid value!");
    return;
  }

  for (let i = 0; i < array.length-(k-1); i++) {
    let maks = Math.max(...array.slice(i,k+i))
    result.push(maks)
  }
  console.log(result);
}

takeMax(arr)