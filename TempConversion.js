// Question-1 : Write a JavaScript function that takes an array of temperatures in Celsius and uses the `map` method to convert each temperature to Fahrenheit using the formula `(Celsius * 9/5) + 32`. Return a new array containing the converted temperatures.



// function celsiusToFahrenheit(tempCelsius) {

//   const tempFahrenheit = tempCelsius.map(celsius => (celsius * 9/5) + 32);

//   return tempFahrenheit;
// }

// const celsiusTemp = [5, 17, 20, 32, 45];
// const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);

// console.log(fahrenheitTemp);


function celsiusToFahrenheit(tempCelsius){

    return tempCelsius.map(celsius => (celsius*9/5) + 32);
}

celsiusTemp = [5, 17, 20, 32, 45]
console.log(celsiusToFahrenheit(celsiusTemp));