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

let liste=[]
