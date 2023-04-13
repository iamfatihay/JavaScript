//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız

const dizi1=[-5,15,22,-4,45,79,-54]

const negatifler1=[]
const pozitifler1=[]

const dizilereAyir1 =()=>{

    for (let i = 0; i < dizi1.length; i++) {
        if (dizi1[i] < 0) {
            negatifler1.push(dizi1[i])
        }else pozitifler1.push(dizi1[i])     
    }
console.log(negatifler1);
console.log(pozitifler1);


}
dizilereAyir1()