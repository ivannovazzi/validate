export function isObjectValue(value) {
    return typeof value === "object" && value !== null;
}
export function isArray(value) {
    return Array.isArray(value);
}
export function isPrimitiveValue(value) {
    return (typeof value === "number" ||
        typeof value === "string" ||
        typeof value === "boolean" ||
        value === null ||
        value === undefined);
}
export function isObjectTester(tester) {
    return typeof tester === "object" && tester !== null;
}
export function isArrayTester(tester) {
    return Array.isArray(tester);
}
export function isPrimitiveTester(tester) {
    return typeof tester === "object" && tester?.func !== null;
}
