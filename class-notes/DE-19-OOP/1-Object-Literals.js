//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================

//*object literals

const book1 = {
    title: "Karamazov Kardesler",
    yazar: "Dostyevski",
    year: 1980,
   
    özetFunction: function () {
    console.log(
      `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmiştir`
    );
    },
  };
  console.log(book1);
  book1.özetFunction();
  
  const book2 = {
    title: "Yaprak Dokumu",
    yazar: "Resat Nuri",
    year: 1950,
  
    özetFunction: function () {
      console.log(
        `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmiştir`
      );
    },
  };
  console.log(book2);
  book2.özetFunction()
  
  //? object literals yöntemi ile fazla sayida yeni  Object ler oluşturmak oldukça zahmetlidir, ayrica programcilik yaklaşimi açisindan da çok tekrar içerdiği için uygun değildir
    // DRY (Dont Repeat Yourself) Prensibi için uygun değildir
  //? SOLUTION:  Object Constructor kullan (ES5 and ES6)