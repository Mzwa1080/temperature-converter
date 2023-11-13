 let celsiusBtn = document.getElementById('btnn');
 let fahrenheitBtn = document.getElementById('fahrenheit');
 let resetBtn = document.querySelector('[data-reset]');

 function convertToCelsius(){
            let inputCelsius = document.querySelector('[data-celsius]').value;
            console.log('this is a value for celsius '+ inputCelsius);
            
            if(inputCelsius.value !==''){
                (inputCelsius * 9/5) + 32;
        console.log((inputCelsius * 9/5) + 32 + 'F' ) ;
        document.getElementById('convertedTemperatureValue').textContent = (inputCelsius * 9/5) + 32 + 'F'
        
    }else{
        console.log('Ah Yooh!');
        alert('Enter A Temperature In Celsius');
    }

}

function convertToFahrenheit() {
    let inputFahrenheit = document.querySelector('[data-fahrenheit]').value;
    // Lemme check if I can get the value and convert it
    if(inputFahrenheit !==''){
        console.log(((inputFahrenheit -32 ) * 5/9).toFixed(1)+'C')
        document.getElementById('convertedTemperatureValue').textContent = ((inputFahrenheit -32 ) * 5/9).toFixed(1)+'C'

    }else{
        alert('Enter A Temperature In Fahrenheit');
    }
}


function clearAll(){
    let reset = " "; 
    document.getElementById('convertedTemperatureValue').textContent = reset;
}

celsiusBtn.addEventListener('click', convertToCelsius)
fahrenheitBtn.addEventListener('click', convertToFahrenheit)
resetBtn.addEventListener('click', clearAll)