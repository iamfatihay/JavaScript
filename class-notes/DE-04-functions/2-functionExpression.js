// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//once fonksiyon olusturulur (sart)

const tekCift





const buyukBul=function(x,y,z){
    let enBuyuk;
    
        if(x>y && x>z){
            enBuyuk=x
        }else if(y>x && y>z){
            enBuyuk=y
        }else {
            enBuyuk=z
        }
    
    return enBuyuk
    
    
    }
    
    alert(buyukBul(3,5,9))