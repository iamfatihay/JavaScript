let showList=[]  //! bos bir array ac, alttaki arama olayinda datayi gorebilmek icin global e bos bir array acip, 
                //! fetch ile gelen data yı bu boş array e attık

//! ilk ekrandaki resimleri api den cekiyoruz (search meal by name)
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((resp)=>resp.json()).then((dataa)=>{
    // console.log(dataa.meals);
    showList=dataa
    ekranaBastir(showList.meals)

})

function ekranaBastir(data){
    data.forEach((w) => {
        document.querySelector(".food").innerHTML += `
    <div class="col-md-3 p-4 m-4">
    <p>${w.strMeal}</p>
    <img src=${w.strMealThumb} /> 
    </div>`
    });   
}

//! arama inputunda arama yapma (oninput=kullanici input elemanina her veri girisinde calismaktadir)
document.querySelector("#ara").oninput=(e)=>{
    // console.log(e.target.value);
    let veri= showList.meals.filter((a)=>{a.strMeal.includes(e.target.value)})
    console.log(veri);
}