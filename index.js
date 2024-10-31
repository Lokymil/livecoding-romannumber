function romanNumber(input) {
  let roman = "";

  while (input > 0) {
    if (input >= 10) {
      roman += "X";
      input -= 10;
      continue;
    }

    if (input === 9) {
      roman += "IX";
      input -= 9;
      continue;
    }

    if (input >= 5) {
      roman += "V";
      input -= 5;
      continue;
    }

    if (input === 4) {
      roman += "IV";
      input -= 4;
      continue;
    }

    roman += "I";
    input -= 1;
  }

  return roman;
}

module.exports = {
  romanNumber,
};
