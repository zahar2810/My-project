const amount = document.getElementById("amount")
const guests = document.getElementById("guests")
const quality = document.getElementById("quality")
const tipAmount = document.getElementById("tip-amount")

function calculate(){
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2)
    amount.value = ""
    guests.value = ""
    quality.value = ""
    if(tip == "NaN"){
        tipAmount.innerHTML = "Каждый по $0 чаевых"
        showTipAmount()
    }
    else{
        tipAmount.innerHTML = "Каждый по $" + tip + " чаевых"
        showTipAmount()
    }
}
function showTipAmount(){
    let temp = tipAmount
    temp.className = "show"
    setTimeout(function(){
        temp.className = temp.className.replace("show", "")
    }, 3000)
}