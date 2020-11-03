import { romanNumeral } from "../src/roman-numeral";

describe("RomanNumerals", () => {
  it.each([
    [1, "I"],
    [2, "II"]
  ])(
    "converts arabic number to roman numeral",
    (arabic, result) => {
      expect(romanNumeral(arabic)).toEqual(result);
    }
  );
});
