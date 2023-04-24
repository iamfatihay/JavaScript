const liste=document.querySelector("#todo-ul")
const newTask=document.querySelector("#todo-input")
const total=document.querySelector("#toplam")
let totalTask=0

document.querySelector("#todo-button").onclick=()=>{

    liste.innerHTML=`<li><div><i class="fa-solid fa-check fa-2xl"></i>${newTask.value}</div><div class="ikinci"><i class="fa-solid fa-trash fa-xl"></i></div></li>`+liste.innerHTML
    //* ekle ye basinca input un ici tekrar bosalsin
    newTask.value=""
    totalTask++
    total.textContent=totalTask
     
}
document.querySelector(".ikinci").onclick=()=>{
    liste.remove()
} 
