function romanNumber(input) {
  let roman = "";
  let i = 0;

  if (input >= 5) {
    roman = "V";
    i = 5;
  }

  for (; i < input; i++) {
    roman += "I";
  }

  return roman;
}

module.exports = {
  romanNumber,
};
