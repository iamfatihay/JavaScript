// const baslik= document.querySelector("h1")
// baslik.style.textAlign=("center")
// baslik.style.color=("red")

// const main = document.getElementsByClassName("main")
// main[0].style.textAlign=("center")

// //! ************* Buttons-Basics ****************************
// const buton=document.querySelectorAll(".btn")
// for (let i = 0; i < buton.length; i++) {
//     buton[i].style.width="90px"
//     buton[i].style.height="40px"
//     buton[i].style.marginTop="30px"
// }

// const btn1=document.querySelector(".btn1")
// btn1.style.color="yellow"
// btn1.style.border="2px solid yellow"

// const btn2=document.querySelector(".btn2")
// btn2.style.color="blue"
// btn2.style.border="2px solid blue"

// const btn3=document.querySelector(".btn3")
// btn3.style.color="pink"
// btn3.style.border="2px solid pink"

// //! *********** image ****************************************
// const img=document.querySelector("#img")
// img.onmouseover=()=>{
//     img.src="./img/aslan1.jpeg"
// }
// img.onmouseout=()=>{
//     img.src="./img/aslan2.jpeg"
// }

// //! ************** Audio / Buttons ****************************
// let audio=document.querySelector("#myAudio")
// const playSound=()=>{
//     audio.play()
// }
// const stopSound=()=>{
//     audio.pause()
//     audio.currentTime=0
// }
// const changeImage=()=>{
//     if (img.src.match("telefon")) {
//         img.src="./img/telfirlat.gif"
//     } else {
//         img.src="./img/telefon.gif"
//     }
// }
// btn1.onclick=()=>{
//     img.src="./img/img.gif";
//     playSound()
// }
// btn2.onclick=()=>{
//     img.src="./img/telbagla.gif";
//     stopSound()
// }
// btn3.onclick=()=>{changeImage()}
// //* ****************************************************************
// //! ************** BURAYA KADAR OLANLAR ****************************
// //! ************** BENIM ODEV OLARAK KENDI *************************
// //! ************** YAPTIKLARIM; DEVAMI HOCAYLA YENIDEN *************
// //! ************** YAPILANLARDIR ***********************************
// //* ****************************************************************
document.querySelector("h1").style.color="red";
document.querySelector("h1").style.textAlign="center";

let resim=document.querySelector(".resim")
let ses1=document.querySelector(".ses1")
let ses2=document.querySelector(".ses2")

//? ara butonu tiklandiginda
document.querySelector(".ara").onclick=()=>{
    resim.src="./img/img.gif"
    // play() komutu html de audio etiketini js de calistirir.
    ses1.play()
    // sesin volumunu 0 ile 1 arasinda deger vererek ayarlayabilirsiniz
    ses1.volume=0.1
}

//? baglat butonu tiklandiginda
document.querySelector(".baglat").onclick=()=>{
    resim.src="./img/telbagla.gif"
    // pause() komutuyla calan audio sesini durdurabilirsiniz
    ses1.pause()
}

//? konus butonu tiklandiginda
document.querySelector(".konus").onclick=()=>{
    resim.src="./img/telefon.gif"
    ses1.pause()
}

//? mouse ile resmin uzerine gelince
// resim.onmouseover=()=>{}  boyle de olur asagidaki gibi de
resim.addEventListener("mouseover",()=>{
    resim.src="./img/aslan1.jpeg"
    // ses2.play()
})

//? mouse ile resmin uzerinden ayrilinca
resim.addEventListener("mouseout",()=>{
    resim.src="./img/aslan2.jpeg"
    // ses2.play()
})

//!klavyeden inputa veri girişi yapılırken elimizi tuştan çektiğimizde varolan değişiklik
const textInput= document.querySelector(".textbox")
const tikInput= document.querySelector(".checkbox")

//? onkeyup = klavyeden elini cektiginde
// checked=metodu checkbox inputun tikli olup olmadığını kontrol eder. tıklanmışsa true döndürür
textInput.onkeyup=()=>{
   if (tikInput.checked) {
    textInput.value=textInput.value.toUpperCase()
   } else {
    textInput.value=textInput.value.toLowerCase()
   } 
}
//inputa veri girişi yaptığımızda, küçük input tikliyse benim büyük inputa girdiğim harfleri büyüt, aksi durumda küçült

//! listemin basina "Programlama Dilleri" h1 etiketi eklemek
//! ********** Uzun yol ************************************
//? HTML de h1 elementi olusturmak
const baslik= document.createElement("h1") //<h1></h1>

//? baslik2 class ismi atayalim
baslik.className="baslik2";  // class="baslik2"

//? Programlama Dilleri seklinde text olusturduk
const yazi=document.createTextNode("Programlama Dilleri") 

//? h1 elementi icin olusturdugum text i h1 e child yapalim
baslik.appendChild(yazi) // <h1>Programlama Dilleri</h1>

//? input-div in sonrasina h1 i ekledim
document.querySelector(".input-div").after(baslik)

//! ******************* Kisa yol ***************************
const bolum= document.querySelector("section")
bolum.innerHTML=`<h1 class="baslik2">Programlama Dilleri</h1>`+bolum.innerHTML


//! languages inputuna girilen degerleri, ul ye eklemek 
//! uzun yol

const dil=document.querySelector(".languages")

 //* yeni girilen satiri saklamak icin bir li olusturduk.
// const yeniLi= document.createElement("li")

  //* yeni li icin textnode olusturduk
// const text= document.createTextNode(dil.value)
  
  //*olusturdugumuz texnode'u yeni li'ye bagladik.
// yeniLi.appendChild(text)

  //* yeni eklenen satiri var olan listeye (ul) baglayalim.
const liste=document.querySelector(".liste")
// liste.appendChild(yeniLi)

document.querySelector(".ekle").onclick=()=>{
    //? kisayol
    liste.innerHTML+=`<li>${dil.value}</li>`

    //* ekle ye basinca input un ici tekrar bosalsin
    dil.value=""
}

//! Sil butonuna basilinca ul listesinden li elemanini silmek icin removeChild metodunu kullanacagiz
document.querySelector(".sil").onclick=()=>{
    liste.removeChild(liste.lastElementChild)  //* son cocugu siler
    // liste.removeChild(liste.firstElementChild)  //* ilk cocugu siler
    // liste.removeChild(liste.children[2])  //* 2 indeksli cocugu siler
}