function makeValidator(required, func) {
    return { required, func };
}
export const isNumber = (value) => typeof value === "number";
export const isString = (value) => typeof value === "string";
export const isBoolean = (value) => typeof value === "boolean";
export const isNumberFunc = ({ value }) => isNumber(value);
export const isStringFunc = ({ value }) => isString(value);
export const isBooleanFunc = ({ value }) => isBoolean(value);
export const numberValidator = makeValidator(true, isNumberFunc);
export const stringValidator = makeValidator(true, isStringFunc);
export const booleanValidator = makeValidator(true, isBooleanFunc);
