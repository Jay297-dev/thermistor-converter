// Constants for a 10k NTC Thermistor (typical values for 10k2 type)
const R0 = 10000; // Resistance at T0 (10kΩ = 10000 Ohms)
const T0 = 298.15; // Reference temperature in Kelvin (25°C + 273.15)
const BETA = 3950; // Beta value in Kelvin (typical for 10k2, adjust if you have exact datasheet value)

// Function to convert Resistance to Temperature
function convertToTemperature() {
    const resistanceInput = document.getElementById('resistanceInput');
    const temperatureOutputC = document.getElementById('temperatureOutputC'); // New ID for Celsius
    const temperatureOutputF = document.getElementById('temperatureOutputF'); // New ID for Fahrenheit
    const R = parseFloat(resistanceInput.value);

     if (isNaN(R) || R <= 0) {
        temperatureOutputC.textContent = 'Invalid R';
        temperatureOutputF.textContent = 'Invalid R';
        alert('Please enter a positive number for Resistance.'); // Add an alert for immediate feedback
        return;
    }

    // Steinhart-Hart simplified Beta equation (solved for T)
    const tempK = 1 / (1/T0 + (1/BETA) * Math.log(R/R0));
    const tempC = tempK - 273.15; // Convert Kelvin to Celsius
    const tempF = (tempC * 9/5) + 32; // Convert Celsius to Fahrenheit

    temperatureOutputC.textContent = tempC.toFixed(2); // Display Celsius with 2 decimal places
    temperatureOutputF.textContent = tempF.toFixed(2); // Display Fahrenheit with 2 decimal places
}

// Function to convert Temperature to Resistance
function convertToResistance() {
    const temperatureInputC = document.getElementById('temperatureInputC'); // New ID for Celsius input
    const temperatureInputF = document.getElementById('temperatureInputF'); // New ID for Fahrenheit input
    const resistanceOutput = document.getElementById('resistanceOutput');

    let tempC;

    // Determine which input was used
    if (temperatureInputC.value !== '') {
        tempC = parseFloat(temperatureInputC.value);
        // Clear the other input to avoid confusion
        temperatureInputF.value = '';
    } else if (temperatureInputF.value !== '') {
        const tempF = parseFloat(temperatureInputF.value);
        tempC = (tempF - 32) * 5/9; // Convert Fahrenheit to Celsius
        // Clear the other input to avoid confusion
        temperatureInputC.value = '';
    } else {
        resistanceOutput.textContent = 'Enter Temp';
        return;
    }

     if (isNaN(tempC)) {
        resistanceOutput.textContent = 'Invalid Temp';
        alert('Please enter a valid number for Temperature.'); // Add an alert
        return;
    }

    const tempK = tempC + 273.15; // Convert Celsius to Kelvin

    // Steinhart-Hart simplified Beta equation (solved for R)
    const R = R0 * Math.exp(BETA * (1/tempK - 1/T0));

    resistanceOutput.textContent = R.toFixed(2); // Display Resistance with 2 decimal places
}

// Function to handle Celsius input changing
function handleCelsiusInput() {
    // When Celsius input changes, clear Fahrenheit input so only one is active
    document.getElementById('temperatureInputF').value = '';
}

// Function to handle Fahrenheit input changing
function handleFahrenheitInput() {
    // When Fahrenheit input changes, clear Celsius input so only one is active
    document.getElementById('temperatureInputC').value = '';
}

// Function to clear all inputs and outputs
function clearAll() {
    // Clear resistance input and its temperature outputs
    document.getElementById('resistanceInput').value = '';
    document.getElementById('temperatureOutputC').textContent = '--';
    document.getElementById('temperatureOutputF').textContent = '--';

    // Clear temperature inputs and its resistance output
    document.getElementById('temperatureInputC').value = '';
    document.getElementById('temperatureInputF').value = '';
    document.getElementById('resistanceOutput').textContent = '--';
}