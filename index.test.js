const { romanNumber } = require(".");

describe("romanNumber", () => {
  it.each([
    { input: 1, output: "I" },
    { input: 2, output: "II" },
    { input: 3, output: "III" },
    { input: 5, output: "V" },
    { input: 6, output: "VI" },
    { input: 7, output: "VII" },
    { input: 10, output: "X" },
  ])("should return $output when given $input", ({ input, output }) => {
    expect(romanNumber(input)).toBe(output);
  });
});
