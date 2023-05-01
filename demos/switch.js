let dayNum = 3;
let dayName;
switch (dayNum) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break; // "break" forces the code within the braces to stop and jump out to whatever is next
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "<unknown>";
    break; // this break isn't "needed"
  // but is included for style
}

console.log(dayName);
