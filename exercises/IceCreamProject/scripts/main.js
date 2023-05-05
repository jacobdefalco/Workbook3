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
  let firstScoopPrice = 2.25;
  let subsequentScoopPrice;
  let numOfScoops = document.getElementById("numOfScoops").value;

  //scoop calculation
  if (numOfScoops == 1) {
    basePrice += 2.25;
  }
  if (numOfScoops > 1) {
    basePrice = 2.25 + numOfScoops * 1.25;
  }

  //grab topping options
  let sprinklesOption = document.getElementById("sprinklesOption");
  let hotFudgeOption = document.getElementById("hotFudgeOption");
  let whippedCreamOption = document.getElementById("whippedCreamOption");
  let cherryOption = document.getElementById("cherryOption");

  //if toppings are selected
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

  //calculate
  let tax = basePrice * 0.07;
  let totalDue = basePrice + tax;

  //set values
  basePricePara.innerText = `Base Price : $${basePrice.toFixed(2)}`;
  taxPara.innerText = `Tax : $${tax.toFixed(2)}`;
  totalDuePara.innerText = `Total Amount Due : $${totalDue.toFixed(2)}`;
}
