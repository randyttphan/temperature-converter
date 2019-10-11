//Looking for the input tag inside the specified div
const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNumber(num) {
  //rounding to the nearest hundreth
  return Math.round(num * 100) / 100;
}

function celciusConverter() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;

  //condition if there is an empty string in the input, placeholder values would
  //reset instead of returning NaN.
  if (isNaN(cTemp)) {
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  } else {
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
  }
}

function fahrenheitConverter() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp + 459.67) * (5 / 9);

  if (isNaN(fTemp)) {
    celciusInput.value = "";
    kelvinInput.value = "";
  } else {
    kelvinInput.value = roundNumber(kTemp);
    celciusInput.value = roundNumber(cTemp);
  }
}

function kelvinConverter() {
  const kTemp = parseFloat(kelvinInput.value);
  const fTemp = (9 / 5) * (kTemp - 273) + 32;
  const cTemp = kTemp - 273.15;

  if (isNaN(fTemp)) {
    celciusInput.value = "";
    fahrenheitInput.value = "";
  } else {
    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
  }
}

function main() {
  celciusInput.addEventListener("input", celciusConverter);
  fahrenheitInput.addEventListener("input", fahrenheitConverter);
  kelvinInput.addEventListener("input", kelvinConverter);
}

main();
