function getTax(grossPay, taxRate) {
  const taxesDue = parseFloat(grossPay * (taxRate / 100));
  if ((taxRate = 6.2)) {
    typeOfTax = `Social Security `;
  } if ((taxRate = 1.45)) {
    typeOfTax = `Medicare `;
  }
  console.log(`You have to pay $${taxesDue} in ${typeOfTax}taxes.`);
}
let salary = 150000;
let taxPct = 1.45;

getTax(salary, taxPct);
