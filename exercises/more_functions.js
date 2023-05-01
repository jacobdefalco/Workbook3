function displayMailingLabel(name, address, city, state, zip) {
  console.log(`
${name}
${address}
${city}, ${state} ${zip}`);
}
let customerName = "Jacob DeFalco";
let customerAddress = "123 Cardboard Ln";
let customerCity = "PGH";
let customerState = "Pennsylvania";
let customerZip = "15656";

displayMailingLabel(customerName, customerAddress, customerCity, customerState, customerZip);

function addNumbers(num1, num2) {
  console.log(`
${num1} + ${num2} = ${result}`);
}
let firstNumber = 47;
let secondNumber = 53;
let result = firstNumber + secondNumber;

addNumbers(firstNumber, secondNumber);

function displayReceipt(totalDue, amountPaid) {
  console.log(`
Total Due: $${totalDue}
Amount Paid: $${amountPaid}
Change Due: $${leftover}`);
}
let transactionTotal = 450;
let transactionPaid = 500;
leftover = transactionTotal - transactionPaid;

displayReceipt(transactionTotal, transactionPaid);
