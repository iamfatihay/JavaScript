let bagTotal = 25.98
let bagNumber = 1
const bag = document.querySelector("#bag")

let shoeTotal = 45.99
let shoeNumber = 1
const shoe = document.querySelector("#shoe")

let clockTotal = 74.99
let clockNumber = 1
const clock = document.querySelector("#clock")

let subTotal = bagTotal + shoeTotal + clockTotal;
let tax = subTotal * 0.18
let total = subTotal + tax + 15; //shipping=15









document.querySelector(".minus1").onclick = () => {
    if (document.querySelector(".number1").textContent == 0) {
        return
    } else {
        bagNumber--
        document.querySelector(".number1").textContent = bagNumber
        bagTotal-=25.98
        bag.textContent=bagTotal.toFixed(2)
        subTotal = bagTotal + shoeTotal + clockTotal
        document.querySelector("#subTotal").textContent=subTotal.toFixed(2)
        tax = subTotal * 0.18
        document.querySelector("#tax").textContent=tax.toFixed(2)
        total = subTotal + tax + 15
        document.querySelector("#total").textContent=total.toFixed(2)
    }
}
document.querySelector(".plus1").onclick = () => {
    bagNumber++
    document.querySelector(".number1").textContent = bagNumber
    bagTotal=bagNumber*25.98
    bag.textContent=bagTotal.toFixed(2)
    subTotal = bagTotal + shoeTotal + clockTotal
    document.querySelector("#subTotal").textContent=subTotal.toFixed(2)
    tax = subTotal * 0.18
    document.querySelector("#tax").textContent=tax.toFixed(2)
    total = subTotal + tax + 15
    document.querySelector("#total").textContent=total.toFixed(2)
}

document.querySelector(".minus2").onclick = () => {
    if (document.querySelector(".number2").textContent == 0) {
        return
    } else {
        shoeNumber--
        document.querySelector(".number2").textContent = shoeNumber
        shoeTotal-=45.99
        shoe.textContent=shoeTotal.toFixed(2)
        subTotal = bagTotal + shoeTotal + clockTotal
        document.querySelector("#subTotal").textContent=subTotal.toFixed(2)
        tax = subTotal * 0.18
        document.querySelector("#tax").textContent=tax.toFixed(2)
        total = subTotal + tax + 15
        document.querySelector("#total").textContent=total.toFixed(2)
    }
}
document.querySelector(".plus2").onclick = () => {
    shoeNumber++
    document.querySelector(".number2").textContent = shoeNumber
    shoeTotal=shoeNumber*45.99
    shoe.textContent=shoeTotal.toFixed(2)
    subTotal = bagTotal + shoeTotal + clockTotal
    document.querySelector("#subTotal").textContent=subTotal.toFixed(2)
    tax = subTotal * 0.18
    document.querySelector("#tax").textContent=tax.toFixed(2)
    total = subTotal + tax + 15
    document.querySelector("#total").textContent=total.toFixed(2)
}

document.querySelector(".minus3").onclick = () => {
    if (document.querySelector(".number3").textContent == 0) {
        return
    } else {
        clockNumber--
        document.querySelector(".number3").textContent = clockNumber
        clockTotal-=74.99
        clock.textContent=clockTotal.toFixed(2)
        subTotal = bagTotal + shoeTotal + clockTotal
        document.querySelector("#subTotal").textContent=subTotal.toFixed(2)
        tax = subTotal * 0.18
        document.querySelector("#tax").textContent=tax.toFixed(2)
        total = subTotal + tax + 15
        document.querySelector("#total").textContent=total.toFixed(2)
    }
}
document.querySelector(".plus3").onclick = () => {
    clockNumber++
    document.querySelector(".number3").textContent = clockNumber
    clockTotal=clockNumber*74.99
    clock.textContent=clockTotal.toFixed(2)
    subTotal = bagTotal + shoeTotal + clockTotal
    document.querySelector("#subTotal").textContent=subTotal.toFixed(2)
    tax = subTotal * 0.18
    document.querySelector("#tax").textContent=tax.toFixed(2)
    total = subTotal + tax + 15
    document.querySelector("#total").textContent=total.toFixed(2)
}


document.querySelectorAll(".remove").forEach((item) => {
    item.onclick=()=>{
       (item.closest(".row")).remove()
    }
})