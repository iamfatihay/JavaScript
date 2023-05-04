let list = []

const btn = document.querySelector("button")
const msg = document.querySelector(".msg")
const input = document.querySelector("input")
const ul = document.querySelector(".cities")

let city=""

// const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=9b3b9ba566e1c950f1eaac7b16dea35c`


//! Submit butonuna basildiğinda
btn.onclick = () => {
    city= input.value
    console.log(city);
    const getCity = async (city) => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b3b9ba566e1c950f1eaac7b16dea35c`);

            if (!res.ok) {
                throw new Error("url de hata var");
            }
            const data = await res.json();

               console.log(data[0]);
            ekranaBastir(data[0]);
        } catch (err) {
            console.log(err);
        }
    };
}



function ekranaBastir(item) {
    if (!input.value) {
        alert("Please enter a city name..");

        //! input a girilen veri (Submit e basinca) daha önce listeye girildiyse, tekrar girilmesin, boş dön!
    } else if (list.includes(input.value)) {
        return;
        // return=if in içindeki şart true ise hiçbirşey yapma, koda alt satirdan devam et demek
    } else {
        list.push(input.value);

        //!ekranda listeyi göster
        ul.innerHTML =
            `<li> 
          <p class="city-name">${item.name}</p>
          <div class="derece">${item.main.temp}</div>
          <i>${item.weather[0].icon}</i>
        </li>` + ul.innerHTML;

        input.value = ""

        //? her li girişinde cursor inputta olsun
        //   input.focus()
    }
}




