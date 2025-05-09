import Validator from "./validator";
import TestValidator from "./validators/Test";
import ZAValidator from "./validators/SouthAfrica";

function isValid(idNumber: string, countryCode: string) {
  const validator = getValidator(countryCode);
  const result = validator.validate(idNumber);
  return result;
}

function getValidator(countryCode: string): Validator {
  switch (countryCode) {
    case "ZA":
      return new ZAValidator();

    default:
      return new TestValidator();
  }
}

// This exposes the function to the window of the browser so it's easily accessed
window["isValid"] = isValid;
// Don't know if it's best practice but we ball
