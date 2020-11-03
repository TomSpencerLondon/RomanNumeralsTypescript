import { romanFor } from "../src/roman-for";

describe("RomanNumerals", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"]
  ])(
    "converts arabic number to roman numeral",
    (arabic, result) => {
      expect(romanFor(arabic)).toEqual(result);
    }
  );
});
