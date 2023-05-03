function parseAndDisplayName(fullName) {
  // fullName = First Mid Last
  console.log(`Name: ${fullName}`); // First Mid Last

  // find the first space
  let spacePos = fullName.indexOf(" ");

  if (spacePos == -1) {
    // if no space is found...
    // log the full name as the first name
    return console.log(`Only name: ${fullName}`); // First
  }

  // slice by the first space to get the first name in one variable,
  // and both, middle and last, in another variable
  let firstName = fullName.slice(0, spacePos); // First
  let midAndLastName = fullName.slice(spacePos + 1); // Mid Last
  let lastName = midAndLastName; // Mid Last

  console.log(`First name: ${firstName}`); // First

  // find the space between middle and last name
  let spacePosMidLast = midAndLastName.indexOf(" ");

  if (spacePosMidLast != -1) {
    // if a space is found between Mid and Last...
    let middleName = midAndLastName.slice(0, spacePosMidLast); // Mid
    lastName = midAndLastName.slice(spacePosMidLast + 1); // Last

    console.log(`Middle name: ${middleName}`); // Mid
  }

  console.log(`Last name: ${lastName}`); // Last
}

parseAndDisplayName("Mohamed");
console.log("---------");
parseAndDisplayName("Mohamed Salah");
console.log("---------");
parseAndDisplayName("Mohamed B Salah");

console.log("================");
console.log("================");
console.log(`Now I'm going to do the same thing but with the "split" feature`);
console.log("================");
console.log("================");

function parseAndDisplayName2(fullName) {
  console.log(`Name: ${fullName}`); // First Mid Last

  let splitName = fullName.split(" ");

  if (splitName.length <= 1) {
    return console.log(`Only name: ${fullName}`);
  }

  console.log(`First name: ${splitName[0]}`);
  if (splitName.length == 2) {
    return console.log(`Last name: ${splitName[1]}`);
  }

  console.log(`Middle name: ${splitName[1]}`);
  console.log(`Last name: ${splitName[2]}`);
}

parseAndDisplayName2("Mohamed");
console.log("---------");
parseAndDisplayName2("Mohamed Salah");
console.log("---------");
parseAndDisplayName2("Mohamed B Salah");
