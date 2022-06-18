const userInput = document.getElementById("user-input")
const calcLength = document.getElementById("calc-length")
const calcVolume = document.getElementById("calc-volume")
const calcMass = document.getElementById("calc-mass")

const metersToFeet = 3.28084
const feetToMeters = 0.3048
const litersToGallons = 0.219969
const gallonToLiters = 4.54609
const kilosToPounds = 2.20462
const poundsToKilos = 0.453592

function conversion() {
    const userInputValue = userInput.value
    const meterResult = userInputValue * metersToFeet
    const feetResult = userInputValue * feetToMeters
    const literResult = userInputValue * litersToGallons
    const gallonResult = userInputValue * gallonToLiters
    const kiloResult = userInputValue * kilosToPounds
    const poundResult = userInputValue * poundsToKilos
    
    calcLength.textContent = `${userInputValue} meters = ${meterResult.toFixed(3)} feet | ${userInputValue} feet = ${feetResult.toFixed(3)} meters`
    
    calcVolume.textContent = `${userInputValue} liters = ${literResult.toFixed(3)} gallons | ${userInputValue} gallons = ${feetResult.toFixed(3)} liters`
    
    calcMass.textContent = `${userInputValue} kilos = ${kiloResult.toFixed(3)} pounds | ${userInputValue} pounds = ${poundResult.toFixed(3)} kilos`
}

userInput.addEventListener("keyup", conversion)

const date = new Date()
const year = date.getFullYear()
document.getElementById('footer').innerHTML = `<p>${year} All Rights Reserved | <a href="https://github.com/kencodest/metric-to-imperial-converter" target="_blank">kencodest</a></p>`