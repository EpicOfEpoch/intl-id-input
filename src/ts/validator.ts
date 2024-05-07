export default abstract class Validator {
  abstract validate(idNumber: string): boolean;
}
