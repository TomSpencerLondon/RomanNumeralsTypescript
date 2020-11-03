import { romanNumeral } from "../src/roman-numeral";

describe("RomanNumerals", () => {
  it.each([
    [1, "I"],
  ])(
    "converts arabic number to roman numeral",
    (arabic, result) => {
      expect(romanNumeral(arabic)).toEqual(result);
    }
  );
});
