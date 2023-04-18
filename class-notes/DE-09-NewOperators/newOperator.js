//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car={
    title:"BMW",
    model:1990,
    engine:1.6
}

//* 1. Klasik yol
console.log(car.title);
console.log(car["model"]);

//* 2. yol destructuring 

const{title,model}=car
console.log(title,model,car.engine);

//! NESTED OBJECT example:

const arabalar = {
    car1: {
      marka: "BMW",
      model: 1990,
      renk: "red",
    },
    car2: {
      marka: "MERCEDES",
      model: 1980,
      renk: "white",
    },
    car3: {
      marka: "AUDI",
      model: 2000,
      renk: "gray",
    },
  };

console.log(arabalar.car1.marka);

const{car1,car2,car3}=arabalar
console.log(car1);
console.log(car1.marka);

const{marka,renk}=car1

console.log(marka);

//! car1 için marka model ismini kullandık, o yüzden car2 de yeni isimler verdik

const{marka:marka2,renk:renk2}=car2

console.log(marka2);

//*** Object-Object gezinme ****/
for (let i in arabalar){

    console.log(arabalar[i].marka);
}

//* ornek: Array-Object gezinme-DEST
const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];