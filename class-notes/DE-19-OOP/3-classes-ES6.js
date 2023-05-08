//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  ayni zamanda ES5 syntax indan farkli bazi syntax and semantics e sahiptir .
//? Aslinda  class keyword ü  ES6 da tanitilmiştir, 
//?but is syntactical sugar (yalnizca dili kullanmanin bazi yönlerini daha kolay 
//?ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanilan bir terimdir.), 
//?JavaScript  prototype-based dir.

class Book{
    constructor(a,b,c){
        this.title=a,
        this.author=b,
        this.year=c,
        this.özetFunction=function(){
            return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmiştir`;
        }
    }
    //?bu alt süslüye yazdiklarimiz direk kalibin prototype alanina gider (ES6 ile biz belirtmeden)
    yilHesapla(){
        return 2023-this.year;
    }
}

const book1=new Book("safahat","M.Akif Ersoy",1910)
console.log(book1);
console.log(book1.yilHesapla());

//?INHERITANCE  
//* Book object kalibindan Dergi object ine kalip getir

class Dergi extends Book {
    constructor(author,title,year,d){
        super(author,title,year)
        this.mounth=d
    }
}

const dergi1=new Dergi("kasagi","Ömer Seyfettin",1932,"aralik")
console.log(dergi1);
console.log(dergi1.yilHesapla());

class Gazete extends Book {
    constructor(author, title, year, d,e) {
  
      super(author, title, year);
      this.mounth=d;
      this.fiyat=e
    }
  }
   const f=new Gazete("kasagi","", 1932, "aralik",19);
   console.log(f);

   //! extends edildiği zaman, atadan gelen her veriyi kullanmak zorundayiz,
   //! en fazla value kismini boş " " birakabiliriz.