//? console log ifadesine export denmemesine ragmen
//? ortalikta oldugu oldugu icin ve sayfayla etilesime gecildigi icin ekrana yazdirilir
console.log("module den selamlar");

export const CALISMA_SAATI=40

export function topla(s1,s2){
    return s1+s2
}

let counter=0

const inc =(miktar)=>{
    counter += miktar
    return counter
}

const dec =(miktar)=>{
    counter -= miktar
    console.log(counter);
}

const benimAdim="Ashley"

export {inc,dec,benimAdim}

//? Bie sayfada sadece bir 1 adet export default yazilabilir
export default function ugurla(){
    console.log("Elveda JS Hosgeldin React");
}