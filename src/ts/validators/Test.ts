import Validator from "../validator";

export default class TestValidator extends Validator {
  validate(idNumber: string): boolean {
    console.log(idNumber, " is valid");
    return true;
  }
}
