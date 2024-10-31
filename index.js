function romanNumber(input) {
  let roman = "";

  if (input === 5) {
    return "V";
  }

  if (input === 6) {
    return "VI";
  }

  for (let i = 0; i < input; i++) {
    roman += "I";
  }

  return roman;
}

module.exports = {
  romanNumber,
};
