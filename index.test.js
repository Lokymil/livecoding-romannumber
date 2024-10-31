const { romanNumber } = require(".");

describe("romanNumber", () => {
  it.each([
    { input: 1, output: "I" },
    { input: 2, output: "II" },
    { input: 3, output: "III" },
    { input: 4, output: "IV" },
    { input: 5, output: "V" },
    { input: 6, output: "VI" },
    { input: 7, output: "VII" },
    { input: 9, output: "IX" },
    { input: 10, output: "X" },
    { input: 15, output: "XV" },
    { input: 20, output: "XX" },
  ])("should return $output when given $input", ({ input, output }) => {
    expect(romanNumber(input)).toBe(output);
  });
});
