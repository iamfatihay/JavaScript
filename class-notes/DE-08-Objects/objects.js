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











