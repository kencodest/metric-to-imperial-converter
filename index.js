let userInput = document.getElementById("user-input")
let calcLength = document.getElementById("calc-length")
let calcVolume = document.getElementById("calc-volume")
let calcMass = document.getElementById("calc-mass")

function conversion() {
    let userInputValue = userInput.value
    let meterResult = userInputValue * 3.28084
    let feetResult = userInputValue * 0.3048
    let literResult = userInputValue * 0.219969
    let gallonResult = userInputValue * 4.54609
    let kiloResult = userInputValue * 2.20462
    let poundResult = userInputValue * 0.453592
    
    calcLength.textContent = `${userInputValue} meters = ${meterResult.toFixed(3)} feet | ${userInputValue} feet = ${feetResult.toFixed(3)} meters`
    
    calcVolume.textContent = `${userInputValue} liters = ${literResult.toFixed(3)} gallons | ${userInputValue} gallons = ${feetResult.toFixed(3)} liters`
    
    calcMass.textContent = `${userInputValue} kilos = ${kiloResult.toFixed(3)} pounds | ${userInputValue} pounds = ${poundResult.toFixed(3)} kilos`
}
