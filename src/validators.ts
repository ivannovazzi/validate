import { Primitive, TestingFunc, Validator } from "./types";

function makeValidator<T extends Primitive>(required: boolean, func: TestingFunc): Validator<T> {
  return { required, func };
}



export const isNumber = (value: unknown) => typeof value === "number";
export const isString = (value: unknown) => typeof value === "string";
export const isBoolean = (value: unknown) => typeof value === "boolean";

export const isNumberFunc: TestingFunc = ({ value }) => isNumber(value)
export const isStringFunc: TestingFunc = ({ value }) => isString(value)
export const isBooleanFunc: TestingFunc = ({ value }) => isBoolean(value)

export const numberValidator = makeValidator(true, isNumberFunc);
export const stringValidator = makeValidator(true, isStringFunc);
export const booleanValidator = makeValidator(true, isBooleanFunc);