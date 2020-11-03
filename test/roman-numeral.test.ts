import {arabicFor, romanFor} from "../src/roman-for";

xdescribe("RomanFor", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"]
  ])(
    "converts arabic number to roman numeral",
    (arabic: number, roman: string) => {
      expect(romanFor(arabic)).toEqual(roman);
    }
  );
});

describe("ArabicFor", () => {
  it.each([
    ["I", 1],
    ["II", 2],
    ["IV", 4],
    ["VI", 6],
  ])("converts roman to arabic", (roman: string, arabic: number) => {
    expect(arabicFor(roman)).toEqual(arabic)
  });
});
