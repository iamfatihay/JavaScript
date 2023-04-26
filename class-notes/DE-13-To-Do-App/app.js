// const liste=document.querySelector("#todo-ul")
// const newTask=document.querySelector("#todo-input")
// const total=document.querySelector("#toplam")
// let totalTask=0

// document.querySelector("#todo-button").onclick=()=>{

//     liste.innerHTML=`<li><div class="birinci"><i class="fa-solid fa-check fa-2xl"></i></div>${newTask.value}<div class="ikinci"><i class="fa-solid fa-trash fa-xl"></i></div></li>`+liste.innerHTML
//     //* ekle ye basinca input un ici tekrar bosalsin
//     newTask.value=""
//     totalTask++
//     total.textContent=totalTask
//     document.querySelectorAll(".ikinci").forEach((item) => {
//         item.onclick = () => {
//             (item.parentElement).remove() //alttaki yorum kisimlarina kisa yol olarak kullanilabilir
//         //   const li = item.parentElement;
//         //   li.remove(); 
//           totalTask--;
//           total.textContent = totalTask;
//         };
//       });
//       document.querySelectorAll(".birinci").forEach((item) => {
//         item.onclick = () => {
//             (item.parentElement).style.backgroundColor="lightgreen",
//             (item.parentElement).style.textDecoration = "line-through";
//         };
//       });        
// }
//? ******************************************************************************************
//? *************** UST TARAF BENIM ODEV OLARAK YAPTIGIM KISIM *******************************
//? *************** ALT TARAF HOCAYLA YAPILAN KISIM ******************************************
//? ******************************************************************************************

//! boş liste hem database işini kolaylaştırır, hem ul ye eklenen verinin aynısı tekrar eklenmesin demek için
//! bütün p leri çağır içeriğinde input.value varsa ekleme, demeli ama p oluşmadan bunu diyemeyiz,
//!  bu şekilde liste dizisine eklenen veri globalde old için içeriğine (includes) her yerden bakılabilir

let liste = []
let total=0
let completed=0

const listeInput=document.querySelector("#todo-input")
const listeUl=document.querySelector("#todo-ul")
const listeButon=document.querySelector("#todo-button")
const toplam=document.querySelector("#toplam")

//! add butonuna basildiginda:
listeButon.onclick=()=>{
  if (!listeInput.value) {
    alert("Please enter something to do")
  } else if(liste.includes(listeInput.value)){
    return
    // return=if in icindeki sart true ise hicbirsey yapma alt satirdan devam et
  }else{
    liste.push(listeInput.value);
    total++

    listeUl.innerHTML=`<li class="ayse">
    <i class="fa-solid fa-check fa-lg"></i>
    <p>${liste[liste.length-1]}</p>   //!<p>${listeInput.value}</p> bu da kullanilabilir
    <i class="fa-solid fa-trash fa-lg"></i>
    </li>`+listeUl.innerHTML;

    toplam.textContent=total
    listeInput.value=""
    listeInput.focus() //! her li girisinde cursor inputta olsun 
  }
//!silme metodu, ekrana basıldığı süslü de olmalı, dışarıda fa-trash lara tıklayınca,
//! remove mantıklı değil, ortada fa-trash daha oluşmadan (add butonuna basılmadan) js ye çağırmak gibi oluyor
// trash butonuna tıklanınca
createSilButon()

//!check
// createCheckButon()

};

const createSilButon=()=>{
  //? ul deki butun fa-trash lara ulas
  document.querySelectorAll(".fa-trash").forEach((a)=>{
    a.onclick=()=>{
      
    }
  })
}
// const createCheckButon=()=>{}