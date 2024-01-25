"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrimitiveTester = exports.isArrayTester = exports.isObjectTester = exports.isPrimitiveValue = exports.isArray = exports.isObjectValue = void 0;
function isObjectValue(value) {
    return typeof value === "object" && value !== null;
}
exports.isObjectValue = isObjectValue;
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
function isPrimitiveValue(value) {
    return (typeof value === "number" ||
        typeof value === "string" ||
        typeof value === "boolean" ||
        value === null ||
        value === undefined);
}
exports.isPrimitiveValue = isPrimitiveValue;
function isObjectTester(tester) {
    return typeof tester === "object" && tester !== null;
}
exports.isObjectTester = isObjectTester;
function isArrayTester(tester) {
    return Array.isArray(tester);
}
exports.isArrayTester = isArrayTester;
function isPrimitiveTester(tester) {
    return typeof tester === "object" && (tester === null || tester === void 0 ? void 0 : tester.func) !== null;
}
exports.isPrimitiveTester = isPrimitiveTester;
