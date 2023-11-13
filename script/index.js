function convertToCelsius() {
    let fahrenheitInput = document.querySelector("[data-fahrenheit]").value;
    
    if (fahrenheitInput) {
        let celsius = (fahrenheitInput - 32) * (5 / 9);
        document.getElementById("convertedTemperature").textContent = celsius.toFixed(2) + " °C";
    } else {
        alert("Please enter a temperature in Fahrenheit.");
    }
}

function convertToFahrenheit() {
    let celsiusInput = document.getElementById("celsius").value;

    if (celsiusInput) {
        let fahrenheit = (celsiusInput * 9 / 5) + 32;
        document.getElementById("convertedTemperature").textContent = fahrenheit.toFixed(2) + " °F";
    } else {
        alert("Please enter a temperature in Celsius.");
    }
}

// function convertToCelsius(){
//     let inputCelsius = document.querySelector('[data-celsius]').value;
//     console.log('this is a value for celsius '+ inputCelsius);

//     if(inputCelsius.value !==''){
//         (inputCelsius.value  * 9/5) + 32;
//         console.log(inputCelsius);
//     }else{
//         console.log('Yooo!');
//     }

// }

let butn = document.getElementById('btnn');
butn.addEventListener('click', convertToCelsius)