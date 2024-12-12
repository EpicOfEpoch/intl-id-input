import Validator from "../validator";

export default class ZAValidator extends Validator {
  validate(idNumber: string) {
    let oddCheck = 0;
    let evenResultAdd = 0;

    for (let i = 0; i < 12; i += 2) {
      oddCheck += parseInt(idNumber[i]);
    }

    let evenCheckString = "";
    for (let i = 1; i < 12; i += 2) {
      evenCheckString += idNumber[i];
    }

    let evenCheckNum = parseInt(evenCheckString) * 2;
    evenCheckNum
      .toString()
      .split("")
      .forEach((digit) => (evenResultAdd += parseInt(digit)));

    let addChecks = oddCheck + evenResultAdd;

    let lastDigitCheck = 10 - (addChecks % 10);

    if (lastDigitCheck >= 10) {
      lastDigitCheck %= 10;
    }

    return lastDigitCheck === parseInt(idNumber[12]);
  }
}
