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

  people.forEach((kisi)=>{

    // console.log(kisi.name);
    // console.log(kisi.surname);
    // console.log(kisi.job);
    // console.log(kisi.age);
    const{name,surname,job,age}=kisi
    console.log(name);
    console.log(surname);
    console.log(job);
    console.log(age);
  })

  //? Fonksiyonlar object olarak gelen parametreleri destructuring yapabilir.

  const kontrol=(veri)=>{
    // console.log(veri);
    // console.log(veri.adi);
    const{adi,renk,yildiz}=veri  //! destructuring
    console.log(adi);
    console.log(renk);
    console.log(yildiz);
  }

  const data = {adi:"GS",renk:"sari-kirmizi",yildiz:4}
  kontrol(data)
  // **********************(2.tercih)

  const kontrol2=({adi,renk,yildiz})=>{
    console.log(adi);
    console.log(renk);
    console.log(yildiz);    
  }

  const data2 = {adi:"GS",renk:"sari-kirmizi",yildiz:4}
  kontrol2(data2)

//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,
//? (object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel={
    pName:"Johny",
    surname:"DEEP",
    job:"actor",
    age:55
}

const{pName,age, ...gerisi}=personel
console.log(pName);
console.log(personel.job);
console.log(gerisi);
console.log(gerisi.job, personel.job);  // actor actor 

//* OBJECT KOPYA
//? Orjinal diziyle ayni sartlarla bir kopya olusturdum.
const ikizPersonel=personel;

//? orjinal diziden farkli bir kopya olusturduk
const{...personel2}=personel
console.log(personel2);


//** orjinal diziden farkli bir kopya olusturdugumuz icin bu kopyaya yapilan degisiklik orjinal diziyi bozmaz */
personel2.age=45
// console.log(personel);
// console.log(ikizPersonel);
// console.log(personel2);

//** orjinal diziyle ayni sartlarda bir kopya olustsurduk bu yuzden kopyada yapilan degisiklik orjinal diziyi de etkiledi */
ikizPersonel.age=100
console.log(personel);
console.log(ikizPersonel);
console.log(personel2);