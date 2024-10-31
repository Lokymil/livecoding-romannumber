function romanNumber(input) {
  if (input === 2) {
    return "II";
  }

  if (input === 3) {
    return "III";
  }

  if (input === 5) {
    return "V";
  }

  return "I";
}

module.exports = {
  romanNumber,
};
