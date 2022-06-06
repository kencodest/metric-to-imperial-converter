const userInput = document.getElementById("user-input")
const calcLength = document.getElementById("calc-length")
const calcVolume = document.getElementById("calc-volume")
const calcMass = document.getElementById("calc-mass")

function conversion() {
    const userInputValue = userInput.value
    const meterResult = userInputValue * 3.28084
    const feetResult = userInputValue * 0.3048
    const literResult = userInputValue * 0.219969
    const gallonResult = userInputValue * 4.54609
    const kiloResult = userInputValue * 2.20462
    const poundResult = userInputValue * 0.453592
    
    calcLength.textContent = `${userInputValue} meters = ${meterResult.toFixed(3)} feet | ${userInputValue} feet = ${feetResult.toFixed(3)} meters`
    
    calcVolume.textContent = `${userInputValue} liters = ${literResult.toFixed(3)} gallons | ${userInputValue} gallons = ${feetResult.toFixed(3)} liters`
    
    calcMass.textContent = `${userInputValue} kilos = ${kiloResult.toFixed(3)} pounds | ${userInputValue} pounds = ${poundResult.toFixed(3)} kilos`
}
