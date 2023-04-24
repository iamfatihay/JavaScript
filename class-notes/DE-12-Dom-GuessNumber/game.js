//? pc ye 1-20 arasi sayi tutturduk
let rastgeleSayi = Math.ceil(Math.random() * 20)
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg")
let skor = 10;
//skor u  index.html deki skor u buraya çekerekte yapabiliriz ama
// çok kullanacağımız için bu daha tercih edilen yol
let enYuksekSkor = 0;

//? ***********************************************************
//? her check butonuna basilinca yapilacaklar:
document.querySelector(".check").addEventListener("click", () => {
    const tahmin = document.querySelector(".guess").value

    //? tahmin girilmeden basildiysa
    if (!tahmin) {
        mesaj.textContent = "Lutfen bir tahmin giriniz"

        //?tahmin dogruysa
    } else if (tahmin == rastgeleSayi) {
        mesaj.textContent = "Tebrikler bildiniz 🎉"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = rastgeleSayi

        //? topScore kontrolu yap
        if (skor > enYuksekSkor) {
            enYuksekSkor = skor
            document.querySelector(".top-score").textContent = enYuksekSkor
        }
        //? tahmin yanlissa
    } else {
        //? slor 1 den buyuk oldugu surece tahmin hakkim var
        if (skor > 1) {
            skor--
            document.querySelector(".score").textContent = skor;
            tahmin < rastgeleSayi ? (mesaj.textContent = "Arttir 📈") : (mesaj.textContent = "Azalt 📉")

        } else {
            mesaj.textContent = "Oyunu kaybettiniz"
            document.querySelector(".score").textContent = 0
        }
    }
})

//? Again butonuna basilinca ayarlar baslangic degerine kurulsun,
//? arka ekran #2d3436 olsun
document.querySelector(".again").onclick=()=>{
    document.querySelector("body").style.backgroundColor = "#2d3436"
    rastgeleSayi = Math.ceil(Math.random() * 20)
    skor=10;
    document.querySelector(".score").textContent = skor;
    document.querySelector(".number").textContent="?"
    document.querySelector(".guess").value=""
    mesaj.textContent="Oyun yeni oyuncu icin basliyor"
}