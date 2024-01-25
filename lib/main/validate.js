"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function validate(value, testers, source = value) {
    if ((0, utils_1.isPrimitiveTester)(testers) && (0, utils_1.isPrimitiveValue)(value)) {
        return {
            valid: testers.func({ value, source: source !== null && source !== void 0 ? source : value }),
            required: testers.required,
            errors: [],
        };
    }
    else if ((0, utils_1.isObjectTester)(testers) && (0, utils_1.isObjectValue)(value)) {
        return Object.keys(testers).reduce((acc, key) => {
            const valueKey = value[key];
            const testerKey = testers[key];
            return Object.assign(Object.assign({}, acc), { [key]: validate(valueKey, testerKey, source) });
        }, {});
    }
    throw new Error("Invalid tester");
}
exports.default = validate;
