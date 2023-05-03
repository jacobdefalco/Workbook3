let birthDate = new Date(97, 05, 14, 03, 43, 15);
console.log(`My birthday is: ${birthDate.toLocaleString()}`);
// console.log(date.toString());
// console.log(date.toUTCString());
// console.log(date.toTimeString());
// console.log(date.toDateString());
//bunch of different ways to represent the date and or time
let currentDate = new Date();
console.log(`The current date is: ${currentDate.toLocaleString()}`);

console.log(`=================`);
console.log(`=================`);

let d = new Date();
console.log(`The current month is ${d.getMonth()}.`);

console.log(`=================`);
console.log(`=================`);

let d2 = new Date();
d2.setMonth(5);
d2.setDate(14);
d2.setYear(1997);
console.log(d2.toLocaleString());
