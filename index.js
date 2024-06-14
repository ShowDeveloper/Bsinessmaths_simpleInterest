const btnEl = document.getElementById("btn")
const simpleInt = document.getElementById("amount")

function calInterest(){

const principalValue = document.getElementById("principal").value
const rateValue = document.getElementById("rate").value /100
const timeValue = document.getElementById("time").value

const interestVal = principalValue * rateValue * timeValue
simpleInt.value = interestVal


}

btnEl.addEventListener("click",calInterest);





