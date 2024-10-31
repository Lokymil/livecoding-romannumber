function romanNumber(input) {
  let roman = "";
  let i = 0;

  if (input - i >= 10) {
    roman += "X";
    i += 10;
  }

  if (input - i === 9) {
    roman += "IX";
    i += 9;
  }

  if (input - i >= 5) {
    roman += "V";
    i += 5;
  }

  if (input - i === 4) {
    roman += "IV";
    i += 4;
  }

  for (; i < input; i += 1) {
    roman += "I";
  }

  return roman;
}

module.exports = {
  romanNumber,
};
