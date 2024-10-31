describe("romanNumber", () => {
  it.each([{ input: 1, output: "I" }])(
    "should return $output when given $input",
    ({ input, output }) => {
      expect(romanNumber(input)).toBe(output);
    }
  );
});
