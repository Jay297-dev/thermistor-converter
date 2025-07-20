# 10k NTC Thermistor Converter

A progressive web application (PWA) designed to easily convert between resistance and temperature for 10k2 NTC thermistors. It supports both Celsius and Fahrenheit temperature units.

## Table of Contents

* [Features](#features)
* [How to Use](#how-to-use)
* [Underlying Formula](#underlying-formula)
* [Access the App](#access-the-app)
* [Installation (PWA)](#installation-pwa)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)
* [License](#license)

## Features

* **Resistance to Temperature Conversion:** Input thermistor resistance (Ohms) to get corresponding temperature in both Celsius (°C) and Fahrenheit (°F).
* **Temperature to Resistance Conversion:** Input temperature in either Celsius (°C) or Fahrenheit (°F) to get the corresponding thermistor resistance (Ohms).
* **Unit Conversion:** Seamlessly converts between Celsius and Fahrenheit for both input and output.
* **Clear All:** A dedicated button to clear all input and output fields.
* **Informative Section:** Provides details about the thermistor type, the underlying formula, and key parameters (R0, T0, Beta).
* **Progressive Web App (PWA):** Can be installed to your device's home screen for an app-like experience and potential offline usage.

## How to Use

1.  **To Convert Resistance to Temperature:**
    * Enter the measured resistance value in Ohms into the "Enter Resistance (Ohms)" field.
    * Click the "Convert to Temperature" button.
    * The corresponding temperature in Celsius and Fahrenheit will be displayed.

2.  **To Convert Temperature to Resistance:**
    * Enter the desired temperature in either the "Enter Temperature (°C)" or "Enter Temperature (°F)" field. (Entering a value in one field will clear the other to avoid ambiguity).
    * Click the "Convert to Resistance" button.
    * The corresponding resistance in Ohms will be displayed.

3.  **Clear Inputs:**
    * Click the "Clear All" button to reset all fields.

## Underlying Formula

This converter utilizes the **simplified Beta (β) parameter equation** for Negative Temperature Coefficient (NTC) thermistors.

* **Reference Resistance (R₀):** 10,000 Ohms (at 25°C)
* **Reference Temperature (T₀):** 298.15 K (25°C)
* **Beta Value (β):** 3950 K (This is a common value for 10k NTC thermistors. For precise applications, always consult your specific thermistor's datasheet for its exact Beta value or Steinhart-Hart coefficients.)

**Resistance to Temperature (in Kelvin):**
$$ \frac{1}{T} = \frac{1}{T_0} + \frac{1}{\beta} \ln\left(\frac{R}{R_0}\right) $$

**Temperature to Resistance:**
$$ R = R_0 \cdot e^{\beta \left(\frac{1}{T} - \frac{1}{T_0}\right)} $$

_Note: For higher precision over wide temperature ranges, the full Steinhart-Hart equation is often recommended as it uses three coefficients (A, B, C) that more accurately model the thermistor's curve._

## Access the App

You can access the live web app (PWA) here:

[**Live Demo (GitHub Pages)**](https://yourusername.github.io/thermistor-converter/)
*(Replace `yourusername` with your actual GitHub username and `thermistor-converter` with your repository name if different)*

## Installation (PWA)

This application is a Progressive Web App (PWA), meaning you can "install" it to your device's home screen for quick access and an app-like experience.

* **On Android (Chrome):** Open the app in Chrome, then look for an "Add to Home screen" prompt or find this option in the browser's menu (three dots icon).
* **On iOS (Safari):** Open the app in Safari, tap the "Share" icon (square with an arrow pointing up), and select "Add to Home Screen."

## Technologies Used

* **HTML5:** For the basic structure of the web application.
* **CSS3:** For styling and making the application visually appealing and responsive.
* **JavaScript (ES6+):** For all the conversion logic and interactive features.

## Contributing

Feel free to fork this repository, open issues, or submit pull requests if you have suggestions for improvements or bug fixes!

## License

This project is open-source and available under the [MIT License](LICENSE).
