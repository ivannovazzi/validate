"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanValidator = exports.stringValidator = exports.numberValidator = exports.isBooleanFunc = exports.isStringFunc = exports.isNumberFunc = exports.isBoolean = exports.isString = exports.isNumber = void 0;
function makeValidator(required, func) {
    return { required, func };
}
const isNumber = (value) => typeof value === "number";
exports.isNumber = isNumber;
const isString = (value) => typeof value === "string";
exports.isString = isString;
const isBoolean = (value) => typeof value === "boolean";
exports.isBoolean = isBoolean;
const isNumberFunc = ({ value }) => (0, exports.isNumber)(value);
exports.isNumberFunc = isNumberFunc;
const isStringFunc = ({ value }) => (0, exports.isString)(value);
exports.isStringFunc = isStringFunc;
const isBooleanFunc = ({ value }) => (0, exports.isBoolean)(value);
exports.isBooleanFunc = isBooleanFunc;
exports.numberValidator = makeValidator(true, exports.isNumberFunc);
exports.stringValidator = makeValidator(true, exports.isStringFunc);
exports.booleanValidator = makeValidator(true, exports.isBooleanFunc);
