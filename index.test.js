const { romanNumber } = require(".");

describe("romanNumber", () => {
  it.each([
    { input: 1, output: "I" },
    { input: 5, output: "V" },
  ])("should return $output when given $input", ({ input, output }) => {
    expect(romanNumber(input)).toBe(output);
  });
});
