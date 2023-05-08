//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalitim,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class in işlevselliğini child class a genişletmek (extend) için kullanilir..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramidir,bir variable in, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir 
//*(overriding=ayni ada sahip iki işlev tanimlarsaniz, tanimlanan sonuncusu önceden tanimlanmiş sürümü geçersiz kilar
//* ve işleve her çağri yapildiğinda, son tanimlanan işlev yürütülür.)(overloading=overloading demektir, 
//*javascriptte böyle denmez, ayni adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez,
//* manuel uğraşmak gerekir )

class Book {
    constructor(a, b, c) {
      this.title = a;
      (this.author = b), (this.year = c);
    }
    özetFunction() {
      return ` ${this.title} i ${this.year} yilinda ${this.author} yazmiştir`;
    }
}


//! ******************************************
//! OVERRIDING
//! ******************************************

class Dergi extends Book{
    constructor(title,author,year,mounth){
        super(author,title,year);
        this.mounth=mounth;
    }

    //! overriding yaptigimiz fonksiyon, fonksiyonun onceki islevi degisti
    özetFunction(){
        return`${this.title} cok guzel bir kitaptir`
    }
    
}

const dergi1=new Dergi("Stientific Essays","Einstein",1900,"eylül")
console.log(dergi1);
console.log(dergi1.özetFunction());



//! ******************************************
//! OVERLOADING 
//! ******************************************

// Diğer programlama dillerinden farklı olarak JavaScript , Function Overloading'i desteklemez . 
// İşte JavaScript'in Function Overloading i desteklemediğini gösteren küçük bir kod. 

function gel(arg1) {
    console.log(arg1);
}
function gel(arg1,arg2,arg3) {
    console.log(arg1,arg2,arg3);
}

gel("naber")  // naber undefined undefined
gel("naber","nasilsin","iyi misin") // naber nasilsin iyi misin

// Çıktıdaki "undefined" ifadesinin nedeni şudur: JavaScript'te aynı adla iki işlev tanımlanırsa, son tanımlanan işlev önceki işlevin üzerine yazar. 
// Bu durumda, gel(arg1) öğesinin üzerine gel(arg1,arg2) tarafından yazılmıştır, ancak 
// işleve yalnızca bir Argüman ("naber") ilettik. Bu, ikinci argümanın tanımsız olduğu anlamına gelir, yani ikinci argümanı yazdırmaya çalıştığımızda, "tanımsız" olarak yazdırılır.
// overloading işlevinin JavaScript'te desteklenmediğini gördük, ancak overloading işlevini kendi başımıza uygulayabiliriz; bu, daha fazla sayıda ve daha fazla türde argüman söz konusu olduğunda oldukça karmaşıktır. Aşağıdaki kod, JavaScript'te overloading işlevinin nasıl uygulanacağını anlamanıza yardımcı olacaktır.
//*https://www.geeksforgeeks.org/function-overloading-in-javascript/