// enum Roman {
//   IV= 4,
//   I = 1,
// }
const romanNumerals = {
  V: 5,
  IV: 4,
  I: 1,
}

export const romanFor = (input: number):string => {
  let result = "";
  for (let numeral in romanNumerals){
    while (input >= romanNumerals[numeral]) {
      result += numeral;
      input -= romanNumerals[numeral];
    }
  }
  return result;
}

export const arabicFor = (roman: string): number => {
  let result = romanNumerals[roman.charAt(roman.length - 1)]

  for (let i = roman.length - 2; i >= 0; i--){
    let currentNumeral = romanNumerals[roman.charAt(i)]
    if (currentNumeral < romanNumerals[roman.charAt(i + 1)]) {
      result -= currentNumeral;
    }else {
      result += currentNumeral;
    }
  }
  return result;
};
