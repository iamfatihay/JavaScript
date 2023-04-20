//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------

//* alttaki satirlar HTML de bulunuyor
{/* <h1 onmouseover="style.color='blue'" onmouseout="style.color='red'" >JAVASCRIPT TE DOM</h1>*/}


//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
//* index.html deki kod
{/* <h1 class="H5" onmouseover=yesil() onmouseout=kirmizi()>DOM BASICS</h1> */}

//JAVASCRIPT

const baslik= document.querySelector(".H5")

const yesil=()=>baslik.style.color="green"
const kirmizi=()=>baslik.style.color="red"

//? METHOD-3 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//* example1
const js=document.querySelector("#js")
const badi=document.querySelector("#badi")

js.onmouseover=()=>{
    badi.style.backgroundColor="pink"
}
js.onmouseout=()=>{
    badi.style.backgroundColor="red"
}


//* example2 (onclick - ondblclick)
const birinci=document.querySelector(".bir")
const ikinci=document.querySelector(".iki")

birinci.onclick = () => {
    birinci.src = "./img/logo2.png";
    ikinci.src = "./img/js_logo.png";
      ikinci.onclick = () => {
      birinci.src = "./img/js_logo.png";
      ikinci.src = "./img/logo2.png";
    };
    //!alternatif olarak fonk ile de çağıradabiliriz
  //   icerde();
  };
  
  // const icerde = () => {
  //   ikinci.onclick = () => {
  //     birinci.src = "./img/js_logo.png";
  //     ikinci.src = "./img/logo2.png";
  //   };
  // };

ikinci.ondblclick=()=>{
    birinci.src = "./img/bir.jpg";
    ikinci.src = "./img/iki.webp";
}

//* example3
const buton=document.querySelector("#btn")

buton.onclick=()=>{
  badi.style.backgroundImage="linear-gradient(to right,purple,gray)"
  buton.textContent="SEARCH"
  buton.style.fontSize="40px"
  buton.style.color="red"
}

//!aynı element e (merhaba yazısına mouse ile gelince badi renk değiştirdin demiştik)
//! hem onclick hem onmouseover atandığında, önce onmouseover  sonra
//!  onclick i çalıştırırsanız sorun olmaz, tersi durumda onclick baskın old için onmouseover çalışmaz
// ? METHOD-4 (sadece JAVASCRIPT te yazılır- addEventListener())  2.yol
// ? ---------------------------------------------------------------
buton.addEventListener("click", () => {
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right, purple, gray)";
  buton.textContent = "SEARCH";
  buton.style.fontSize = "30px";
  header.style.color = "red";
});