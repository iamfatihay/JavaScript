// const veriGetir=()=>{
//     fetch("./tv-shows.json").then((res)=>{
//         if (res.ok==false) {
//             throw new Error("url de hata var")
//         }
//         return res.json()
//     }).then((veri)=>ekranaBastir(veri))
// }

// veriGetir()

// const ekranaBastir=(veri)=>{
//     veri.forEach((eleman) => {
//         document.querySelector(".tvShowList").innerHTML +=`
//         <div class="col-md-3">
//         <div class="card">
//           <img src=${eleman.show.image.medium} class="card-img-top">
//           <div class="card-body">
//             <h5 class="card-title">${eleman.show.name}</h5>
//             <a class="btn btn-success" href=${eleman.show.url}>Detaylar</a>
//             <p> </p>
//           </div>
//         </div>
//       </div>`
//     });
// }
//! *********************************************************************
//! ***************** DIGER YONTEM (async await) ************************
//! *********************************************************************


const veriGetir = async () => {
    //*hatanın ne olduğunu kendi cümlemizle görebiliriz, ama try catch siz throw olursa, 
    //* hata durumunda kod burada durur, alttaki kodlar çalışmaz. bu yüzden try-catch kullanmalıyız
    try {
      const response = await fetch("./tv-shows.json");
  
      if (!response.ok) {
        throw new Error(`biraz hata var ${response.status}`);
      }
  
      const veri = await response.json();
      //  console.log(veri);
      ekranaBastir(veri);
    } catch (error) {
      console.log(error);
      console.log("try-catch sayesinde koda devam");
    } finally{
        console.log("basarili-basarisiz her durumda calis");
    }
  };

  
veriGetir()

const ekranaBastir=(data)=>{
    data.forEach((item) => {
        document.querySelector(".tvShowList").innerHTML +=`
         <div class="col-md-3">
         <div class="card">
           <img src=${item.show.image.medium} class="card-img-top">
           <div class="card-body">
             <h5 class="card-title">${item.show.name}</h5>
             <a class="btn btn-success" href=${item.show.url}>Detaylar</a>
             <p> </p>
           </div>
         </div>
      </div>`
    });
}