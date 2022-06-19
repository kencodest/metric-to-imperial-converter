const userInput = document.getElementById("user-input")
const calcLength = document.getElementById("calc-length")
const calcVolume = document.getElementById("calc-volume")
const calcMass = document.getElementById("calc-mass")

const metresToFeet = 3.28084
const feetToMetres = 0.3048
const litresToGallons = 0.219969
const gallonToLitres = 4.54609
const kilosToPounds = 2.20462
const poundsToKilos = 0.453592

function conversion() {
    const userInputValue = userInput.value
    const metreResult = userInputValue * metresToFeet
    const feetResult = userInputValue * feetToMetres
    const litreResult = userInputValue * litresToGallons
    const gallonResult = userInputValue * gallonToLitres
    const kiloResult = userInputValue * kilosToPounds
    const poundResult = userInputValue * poundsToKilos
    
    calcLength.innerHTML = `${userInputValue} <strong>metres</strong> = ${metreResult.toFixed(3)} <strong>feet</strong> | ${userInputValue} <strong>feet</strong> = ${feetResult.toFixed(3)} <strong>meters</strong>`
    
    calcVolume.innerHTML = `${userInputValue} <strong>litres</strong> = ${litreResult.toFixed(3)} <strong>gallons</strong> | ${userInputValue} <strong>gallons</strong> = ${gallonResult.toFixed(3)} <strong>litres</strong>`
    
    calcMass.innerHTML = `${userInputValue} <strong>kilos</strong> = ${kiloResult.toFixed(3)} <strong>pounds</strong> | ${userInputValue} <strong>pounds</strong> = ${poundResult.toFixed(3)} <strong>kilos</strong>`
}

userInput.addEventListener("keyup", conversion)

const date = new Date()
const year = date.getFullYear()
document.getElementById('footer').innerHTML = `<p>${year} All Rights Reserved | <a href="https://github.com/kencodest/metric-to-imperial-converter" target="_blank">kencodest</a></p>`

