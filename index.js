function romanNumber(input) {
  let roman = "";
  let i = 0;

  while (i < input) {
    if (input - i >= 10) {
      roman += "X";
      i += 10;
      continue;
    }

    if (input - i === 9) {
      roman += "IX";
      i += 9;
      continue;
    }

    if (input - i >= 5) {
      roman += "V";
      i += 5;
      continue;
    }

    if (input - i === 4) {
      roman += "IV";
      i += 4;
      continue;
    }

    for (; i < input; i += 1) {
      roman += "I";
    }
  }

  return roman;
}

module.exports = {
  romanNumber,
};
