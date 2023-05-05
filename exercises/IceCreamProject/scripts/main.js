"use strict";
function displayToppings() {
  const toppingSection = document.getElementById("toppingSection");
  const selectedOption = document.querySelector("input[name='iceCreamSize']:checked");
  if (selectedOption.value == "cup") {
    toppingSection.style.display = "block";
  } else {
    toppingSection.style.display = "none";
  }
}

function displayPrices() {
  //set variables
  let basePricePara = document.getElementById("basePricePara");
  let taxPara = document.getElementById("taxPara");
  let totalDuePara = document.getElementById("totalDuePara");
  let basePrice = 0;
  let tax = basePrice * 0.07;
  let totalDue = basePrice + tax;

  //grab topping options
  let sprinklesOption = document.getElementById("sprinklesOption");
  let hotFudgeOption = document.getElementById("hotFudgeOption");
  let whippedCreamOption = document.getElementById("whippedCreamOption");
  let cherryOption = document.getElementById("cherryOption");

  //if checkboxes are checked
  if (sprinklesOption.checked) {
    basePrice += 0.5;
  }
  if (hotFudgeOption.checked) {
    basePrice += 1.25;
  }
  if (whippedCreamOption.checked) {
    basePrice += 0.25;
  }
  if (cherryOption.checked) {
    basePrice += 0.25;
  }

  //set values

  basePricePara.innerText = `Base Price : $${basePrice.toFixed(2)}`;
  taxPara.innerText = `Tax : $${tax.toFixed(2)}`;
  totalDuePara.innerText = `Total Amount Due : $${totalDue.toFixed(2)}`;
}
