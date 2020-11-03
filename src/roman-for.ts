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
