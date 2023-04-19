const baslik= document.querySelector("h1")
baslik.style.textAlign=("center")
baslik.style.color=("red")

const main = document.getElementsByClassName("main")
main[0].style.textAlign=("center")

//! ************* Buttons-Basics ****************************
const buton=document.querySelectorAll(".btn")
for (let i = 0; i < buton.length; i++) {
    buton[i].style.width="90px"
    buton[i].style.height="40px"
    buton[i].style.marginTop="30px"
}

const btn1=document.querySelector(".btn1")
btn1.style.color="yellow"
btn1.style.border="2px solid yellow"

const btn2=document.querySelector(".btn2")
btn2.style.color="blue"
btn2.style.border="2px solid blue"

const btn3=document.querySelector(".btn3")
btn3.style.color="pink"
btn3.style.border="2px solid pink"

//! *********** image ****************************************
const img=document.querySelector("#img")
img.onmouseover=()=>{
    img.src="./img/aslan1.jpeg"
}
img.onmouseout=()=>{
    img.src="./img/aslan2.jpeg"
}

//! ************** Audio / Buttons ****************************
let audio=document.querySelector("#myAudio")
const playSound=()=>{
    audio.play()
}
const stopSound=()=>{
    audio.pause()
    audio.currentTime=0
}
const changeImage=()=>{
    if (img.src.match("telefon")) {
        img.src="./img/telfirlat.gif"
    } else {
        img.src="./img/telefon.gif"
    }
}
btn1.onclick=()=>{
    img.src="./img/img.gif";
    playSound()
}
btn2.onclick=()=>{
    img.src="./img/telbagla.gif";
    stopSound()
}
btn3.onclick=()=>{changeImage()}

