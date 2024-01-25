import { isObjectValue, isObjectTester, isPrimitiveValue, isPrimitiveTester } from "./utils";
export default function validate(value, testers, source = value) {
    if (isPrimitiveTester(testers) && isPrimitiveValue(value)) {
        return {
            valid: testers.func({ value, source: source ?? value }),
            required: testers.required,
            errors: [],
        };
    }
    else if (isObjectTester(testers) && isObjectValue(value)) {
        return Object.keys(testers).reduce((acc, key) => {
            const valueKey = value[key];
            const testerKey = testers[key];
            return { ...acc, [key]: validate(valueKey, testerKey, source) };
        }, {});
    }
    throw new Error("Invalid tester");
}
