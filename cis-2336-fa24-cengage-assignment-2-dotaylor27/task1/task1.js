/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Taylor Do
      Date: 9/29/2024  

      Filename: task1.js
 */
// Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
  }
  
  // Celsius to Fahrenheit
  function CelsiusToFahrenheit(degree) {
      return (degree * 1.8) + 32;
  }
  
  // Add an onchange event for the Celsius input
  document.getElementById("cValue").onchange = function() {
      let cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
  };
  
  // Add an onchange event for the Fahrenheit input
  document.getElementById("fValue").onchange = function() {
      let fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
  };
  