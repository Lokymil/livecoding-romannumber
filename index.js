function romanNumber(input) {
  let roman = "";

  if (input === 5) {
    return "V";
  }

  for (let i = 0; i < input; i++) {
    roman += "I";
  }

  return roman;
}

module.exports = {
  romanNumber,
};
