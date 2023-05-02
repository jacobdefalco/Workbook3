"use strict";

function parseAndDisplayName(name) {
  let spacePos = name.indexOf(" ");
  let endOfFirstName = spacePos;
  let startOfSecondName = spacePos + 1;
  let firstName = name.substring(0, endOfFirstName);
  let secondName = name.substring(startOfSecondName);
  console.log(`
  Name: ${name}
  First Name: ${firstName}
  Second Name: ${secondName}`);
}

parseAndDisplayName(`Billy ABC Mays`);
