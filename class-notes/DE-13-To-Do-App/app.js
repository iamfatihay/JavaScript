let liste = [];
//! boş liste hem database işini kolaylaştirir, hem ul ye eklenen verinin aynisi tekrar eklenmesin demek için ,bütün p leri çağir içeriğinde input.value deki değer varsa ekleme, demeli ama p oluşmadan bunu diyemeyiz, bu şekilde liste dizisine eklenen veri globalde old için içeriğine (includes) her yerden bakilabilir

let total = 0;
let completed = 0;

const listeInput = document.querySelector("#todo-input")
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

//! Add butonuna basildiğinda

listeButon.onclick = () => {
  if (!listeInput.value) {
    alert("lütfen bir not giriniz");

    //! input a girilen veri (Add e basinca) daha önce listeye girildiyse, tekrar girilmesin, boş dön, bu kontrolü mesela ekrandaki li leri çekerek yapamayiz, çünkü includes yada forEach ler dizi de çalişir
  } else if (liste.includes(listeInput.value)) {
    return;
    // return=if in içindeki şart true ise hiçbirşey yapma, koda alt satirdan devam et demek
  } else {
    liste.push(listeInput.value);

    total += 1;

    //!ekranda listeyi ve total i göster
    listeUl.innerHTML =
      `<li class="ayse">
    <i class="fa fa-check fa-lg"></i>
    <p>${liste[liste.length - 1]}</p>
    <i class="fa fa-trash fa-lg"></i>
    </li>` + listeUl.innerHTML;
    toplam.textContent = total;
    //! 2. p ekrana basma yolu
    // <p>${listeInput.value}</p>

    listeInput.value = ""

    //? her li girişinde cursor inputta olsun
    listeInput.focus()

  }

  //!silme metodu, ekrana basildiği süslü de olmali, dişarida fa-trash lara tiklayinca, remove mantikli değil, ortada fa-trash daha oluşmadan (add butonuna basilmadan) js ye çağirmak gibi oluyor
  // trash butonuna tiklaninca
  createSilButon()
  // burada querySelectorAll yolunu tercih ettik
  //!check
  createCheckButon()
  //burada da target yolunu tercih ettik
};

const createSilButon = () => {

  //?ul deki bütün fa-trash lara ulaş
  document.querySelectorAll(".fa-trash").forEach((a) => {

    a.onclick = () => {

      // console.log(a.parentElement);
      //!listeden silme
      // console.log(a.closest("li").querySelector("p").textContent);
      //! closest=herhangi bir elemanin istediğiniz uzakliktaki parent ina götürür. yani a.parentElement.parentElement.parentElement ile 3. babaya ulaşabilirken closest ile 3. babanin adini yazarak direk ulaşabiliriz


      liste = liste.filter((yapilacak) => yapilacak != a.closest("li").querySelector("p").textContent)
      console.log(liste);
      //!ekrandan silme, sadece ekrandan silersek sonrasinda diziyi bastirmaya kalkarsak, eleman hala dizide bulunduğu için yanliş cevap aliriz
      a.parentElement.remove()
      total = total - 1
      toplam.textContent = total;

      if (a.parentElement.classList.contains("checked")) {
        completed = completed - 1
        document.querySelector("#tamamlanan").textContent = completed;
      }

    }
  })

}

const createCheckButon = () => {
  //   //!2.yol
  document.querySelectorAll(".fa-check").forEach((a) => {
    a.onclick = () => {
      if (a.parentElement.className == "checked") {
        a.parentElement.className = "";
        completed = completed - 1;
      } else {
        a.parentElement.className = "checked";
        completed = completed + 1;
      }
      document.querySelector("#tamamlanan").textContent = completed;
    };
  });
  //! 1.yol Target özelliği, her zaman olay dinleyicisinin olayi tetiklediği öğeye başvuran currentTarget özelliğinin aksine, olayin orjinal olarak gerçekleştiği öğeyi alir .

  //    listeUl.onclick = (e) => {
  //     console.log(e.target);
  //      console.log(e.target.parentElement.classList);

  //      // if(e.target.parentElement.className=="checked"){
  //      // e.target.parentElement.className="ayse"

  //      // }else{e.target.parentElement.className="checked"}

  //      if (e.target.parentElement.classList.contains("checked")) {
  //        e.target.parentElement.classList.remove("checked");
  // completed=completed-1

  //      } else {
  //        e.target.parentElement.classList.add("checked");
  // completed = completed + 1;

  //      }
  //      document.querySelector("#tamamlanan").textContent=completed
  //    };

  // !! classList ve className sonuç istendiğinde ayni sonucu verir tek farkla; classList bir liste, className bir isim şeklinde verir. bunun tek dezavantaji, zaten class i olan bir elemana className="örnek" şeklinde eleman atamak istersek, varolan elemanlari silip sadece örnek class i ni atar. classList ile toggle ve contains kullanmaliyiz, className ile toggle kullanamiyoruz contains yerine includes kullanmaliyiz, javascriptte includes tercih edilir
}

