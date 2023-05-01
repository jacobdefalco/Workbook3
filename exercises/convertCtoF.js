function convertCtoF(cTemp) {
  const fTemp = cTemp * (9 / 5) + 32;
  return fTemp;
}

let currentTemp = 0;
let fTemp = convertCtoF(currentTemp);

console.log(`Temperature in Fahrenheit is ${fTemp.toFixed(2)}°F!`);
