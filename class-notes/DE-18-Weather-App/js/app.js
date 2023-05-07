const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner form input");
const msgSpan = document.querySelector(".top-banner .msg");
const list = document.querySelector(".cities");

//location
const locate = document.getElementById("locate");

//language

const clearAllButton = document.getElementById("clear-all");
const langButton = document.getElementById("lang");
const searchEl = document.getElementById("search");

let units = "metric"; //imperial (f) boş Kelvin derece döner
let lang = "en";

let url; //api url

let cities = []; //Sorgulanan şehirleri tutacak.

// const apiKey = "d5d4e871eeb9cdc72761978c99e3620a"; //Açık veri (Plain Text)

localStorage.setItem(
  //sessionStorage de aynı şekilde kullanılabilir
  "apiKey",
  EncryptStringAES("d5d4e871eeb9cdc72761978c99e3620a")
); // Şifreli veri (Chipher Text)

const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));

//   console.log(apiKey)

locate.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=${lang}`;
    getWeatherDataFromApi();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    const cityName = input.value;
    // console.log(cityName)
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;
    // console.log(url)
    getWeatherDataFromApi();
  }
  form.reset();
});

langButton.addEventListener("click", (e) => {
  // console.log(e.target) // nereye tıkladığımızı gösterir.
  if (e.target.id == "de") {
    lang = "de";
    input.setAttribute("placeholder", "🔍Suche nach einer Stadt");
    searchEl.innerHTML = "SUCHE";
    clearAllButton.innerHTML = "Alles Löschen";
  } else if (e.target.id == "en") {
    lang = "en";
    input.setAttribute("placeholder", `🔍Search for a city`);
    searchEl.innerHTML = "SEARCH";
    clearAllButton.innerHTML = "Clear All";
  } else if (e.target.id == "clear-all") {
    list.innerHTML = "";
    cities = [];
  }
});

const getWeatherDataFromApi = async () => {
  try {
    // const response = await fetch(url).then((response) => response.json()); //fetc ile istek

    const response = await axios(url); //axios ile istek
    // console.log(response) // fetch api dönen veri

    //Data Destruction

    // const {main, name, weather, sys} = response; //fetch
    const { main, name, weather, sys } = response.data; //axios

    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; //alternatif

    //li oluşturma

    if (cities.indexOf(name) == -1) {
      cities.unshift(name);

      const resultData = document.createElement("li");
      resultData.classList.add("city");
      resultData.setAttribute("id", `${name}`);
      resultData.innerHTML = `
            <h2 class="city-name" >
                    <div>
                      <span>${name}</span>
                      <sup>${sys.country}</sup> 
                    </div>  
                      <button type='button' class='single-clear-btn'>X</button>
                  </h2>
                  <div class="city-temp">${Math.round(
                    main.temp
                  )}<sup>°C</sup></div>
                  <figure>
                      <img class="city-icon" src="${iconUrlAWS}">
                      <!-- <img class="city-icon" src="${iconUrl}"> -->
                      <figcaption>${weather[0].description}</figcaption>
                  </figure>`;
      list.prepend(resultData); //öne ekler
      //list.append(resultData); //sona ekler

      //single clearbutton
      const singleClearButton = document.querySelectorAll(".single-clear-btn");
      singleClearButton.forEach((button) => {
        button.addEventListener("click", (e) => {
          console.log(cities);
          delete cities[cities.indexOf(e.target.closest(".city").id)];
          // cities.splice(cities.indexOf(e.target.closest(".city").id),1) //development aşamasında
          e.target.closest(".city").remove();
          console.log(cities);
        });
      });
    } else {
      if (lang == "de") {
        msgSpan.innerText = `Sie kennen das Wetter für die ${name} bereits. Bitte suchen Sie nach einer anderen Stadt 😉`;
      } else {
        msgSpan.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
      }

      setInterval(() => {
        msgSpan.innerText = "";
      }, 3000);
    }
  } catch (error) {
    if (lang == "de") {
      msgSpan.innerText = `Stadt nicht gefunden`;
    } else {
      msgSpan.innerText = "City not found!";
    }

    setInterval(() => {
      msgSpan.innerText = "";
    }, 5000);
  }
};
