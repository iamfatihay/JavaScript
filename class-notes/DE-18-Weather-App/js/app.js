const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner form input");
const msgSpan = document.querySelector(".top-banner .msg")
const list = document.querySelector(".cities")

//!location
const locate = document.getElementById("locate")

//!language
const langButton=document.getElementById("lang");
const searchEl=document.getElementById("search")
const clearAllButton=document.getElementById("clear-all")

let units = "metric"; // imperial=fahrenheit , 
let lang = "en";

let url; //api url

let cities = [] //Sorgulanan şehirleri tutacak.

// const apiKey = "9b3b9ba566e1c950f1eaac7b16dea35c"; //Açık veri (Plain Text)

/*localStorage.setItem( //sessionStorage de aynı şekilde kullanılabilir, setItem 2 parametre alir.(key,value)
    "apiKey",
    EncryptStringAES("9b3b9ba566e1c950f1eaac7b16dea35c")
);*/ // Şifreli veri (Chipher Text)


const apiKey = DecryptStringAES(localStorage.getItem("apiKey"))
//   console.log(apiKey)

//! mevcut konumun hava durumunu ögrenme
locate.addEventListener("click", () => {
    navigator.geolocation?.getCurrentPosition(({coords})=> {
    const {latitude, longitude} = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=${lang}`
    getWeatherDataFromApi();
    })
})




form.addEventListener("submit", (e) => {
    e.preventDefault(); // bunu koymazsak sayfa surekli kendini refresh yapacagi icin veri kayboluyor."form" yapisinin default özelligi.

    if (input.value) {
        const cityName = input.value;
        // console.log(cityName)
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`
        // console.log(url)
        getWeatherDataFromApi();
    }
    form.reset()
});


langButton.addEventListener("click",(e)=>{
    // console.log(e.target);  // nereye tikladigimizi gosterir
    if (e.target.id=="de") {
        lang="de"
        input.setAttribute("placeholder","Suche nach einer Stadt")
        searchEl.innerHTML="SUCHE"
        clearAllButton.innerHTML="Alles löschen"
    }else if(e.target.id == "en"){
        lang="en"
        input.setAttribute("placeholder","Search for a city")
        searchEl.innerHTML="SEARCH"
        clearAllButton.innerHTML="Clear All"
    }else if(e.target.id == "Clear All"){
        list.innerHTML=""
        cities=[]
    }
})



const getWeatherDataFromApi = async () => {
    try {
        // const response = await fetch(url).then((response) => response.json()); // fetch ile istek
        const response = await axios(url);  // axios ile istek
        // console.log(response) // fetch api dönen veri

        //! Data Destruction
        // const { main, name, weather, sys } = response; //fetch
        const { main, name, weather, sys } = response.data; //axios

        const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
        const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;



        // console.log(cities);
        //! li olusturma
       
        if (cities.indexOf(name) == -1) {
            cities.unshift(name);  // asagada "prepend" kullandigimiz icin "unshift" kullanmaliyiz, "push" u degil.

            const resultData = document.createElement("li");
            resultData.classList.add("city");
            resultData.setAttribute('id', `${name}`)
            resultData.innerHTML = `<button type='button' class='single-clear-btn'>X</button>
        <h2 class="city-name" >
                  <span>${name}</span>
                  <sup>${sys.country}</sup>
              </h2>
              <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
              <figure>
                  <img class="city-icon" src="${iconUrlAWS}">
                  <!-- <img class="city-icon" src="${iconUrl}"> -->
                  <figcaption>${weather[0].description}</figcaption>
              </figure>`;
            list.prepend(resultData); //öne ekler
            //list.append(resultData); //sona ekler
        }else{
            if (lang=="de") {
                msgSpan.innerText=`You already know the weather for ${name}, Please search for another city 😉`;
            }
            msgSpan.innerText=`You already know the weather for ${name}, Please search for another city 😉`;
            
            setInterval(()=>{
                msgSpan.innerText = ""
            },3500)
        }

    } catch (error) {
        msgSpan.innerText = "City not found!"


        setInterval(()=>{
            msgSpan.innerText = ""
        },3500)
    }
}


