//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const car1 = new Object({name:"BMW",engine:"1.6",model:"2000"})
console.log(car1);
console.log(car1.name);
console.log(car1["engine"]); //? Square bracket
//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

const car2= new Object({})
car2.name="Mercedes"
car2.motor=2.0
car2.model=2001

console.log(car2);

//* ---------------------------------------------------------
//* 2-   Object Constructor (OOP ile ayrintili gorecegiz)
//* ---------------------------------------------------------

function Calisanlar(id,isim,maas){
    this.calisanId=id;
    this.calisanName=isim;
    this.calisanMaas=maas;
    console.log(this);
}
//! eğer object constructor kullanacaksak this gerekli,
//! arrow function da this kullanımı sağlıklı olmadığından burada decleration functionu kullandık
//! this keyword'u icinde bulundugu scope'daki objeyi refere eder
console.log(this); //? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window'u gosterir

const kisi1 = new Calisanlar(101, "Mehmet", 80000)
const kisi2 = new Calisanlar(102, "Osman", 90000)
const kisi3 = new Calisanlar(103, "Nergis", 100000)

// console.log(kisi1);
// console.log(kisi2);

//* ---------------------------------------------------------
//* 3-   Object Literal (en cok kullanilan yol)
//* ---------------------------------------------------------

const person ={
    name:"Jonny",
    surname:"Deep",
    birth:1970,
    job:"actor",
    hasDriverLicense:true,
    languages:["C","C++","JAVA","PYTHON"]

}
console.log(person);
console.log(person.name);
console.log(person["job"]);
console.log(person.languages[2]);

//? WRITE 

person.birth += 5
console.log(person.birth);

person.languages.map((a)=>a.toLowerCase()).forEach((x)=>console.log(x))

//? yeni bir property ekleyebiliriz

person.location="America"
console.log(person.location);

//* ---------------------------------------------------------
//* 4-   Objects teki Yöntemler 
//* ---------------------------------------------------------
const mensch ={
    name:"Jonny",
    surname:"Deep",
    birth:1970,
    job:"actor",
    hasDriverLicense:true,
    languages:["C","C++","JAVA","PYTHON"],

    yasHesapla:function(){
        console.log(this);
        return new Date().getFullYear()-this.birth;
    },
    özet:function(){
        return `${this.name} oyuncusu ${this.yasHesapla()} yasindadir.`
    }
};
//! yasHesapla daki this keyword ünü yazmazsak global deki birth değişkenini kastettiğimi düşünebilir.

console.log(mensch);
console.log(mensch.yasHesapla());
console.log(mensch.özet());

console.log(Object.values(mensch));
console.log(Object.keys(mensch));

//? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir.
//? Bu sebeple, dogrudan global scope'a baglidir.
//!NOTE: arrow functions ın sözcüksel bağlamı vardır.
//! Yani this keyword ü bir arrow function içinde kullanırsak beklenmedik değerler alabiliriz.
//! arrow kullanınca,  object in içindeki this keyword ü, global scope u (window) ifade ettiği için,
//! this value nun global scope a bağlanmasını önlemek için, object yöntemi içinde normal function u kullanın.

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için,
// diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır.
// Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır,
// bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

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
    },]

//* Ornek1: People dizisindeki job lari goster
people.forEach((a)=>console.log(a.job))

//* Ornek2: yaslari 1 er arttir ve sonucu yeni diziye aktar.
const yaslar = people.map((a)=>a.age+1)
console.log(yaslar);
console.log(people[0].age); // kalici degismedi

//* Ornek3: yaslari 1 er arttir ve sonucu dizide kalici degistir.

people.map((kisi,i,array)=>array[i].age = array[i].age+1)
// people.map((kisi,i,array)=>array[i].age = kisi.age+1)   bu sekilde de yazilabilir.

console.log(people);

//* Ornek4: people (object li) dizisinden yaslari degismis olarak yeni bir objeli dizi olusturalim.
const yeniPeople = people.map((kisi) => ({
    name1: kisi.name,
    surname1: kisi.surname,
    job1: kisi.job,
    age1: kisi.age + 5,
  }));
  
  console.log(yeniPeople);
  console.log(people);

//* Ornek5: yasi 33 un ustunde olan kisilerin name lerini listele.
people.filter((kisi)=>kisi.age>33).forEach((kisi)=>console.log(kisi.name))

//* Ornek6: people dizisine yeni object veri ekleyelim.
people.push({name:"Ali", surname:"GEL", job:"developer", age:50})
console.log(people);

//* Ornek7: her elemanin name ini buyuk harf olarak yaz, yaslarini iki kat yap,
//* mesleklerinin onune senior yazilsin ve bunlari yeni bir diziye atalim.

const updatePeople = people.map((kisi)=>({
    name:kisi.name.toUpperCase(),
    age:kisi.age * 2,
    job:"senior " + kisi.job
}))

console.log(updatePeople);







