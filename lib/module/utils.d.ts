import { Nested, NestedTester, Primitive, Source, Validator } from "./types";
export declare function isObjectValue(value: unknown): value is Nested;
export declare function isArray(value: unknown): value is Array<unknown>;
export declare function isPrimitiveValue(value: unknown): value is Primitive;
export declare function isObjectTester(tester: unknown): tester is NestedTester<Nested, Source>;
export declare function isArrayTester(tester: unknown): tester is Array<unknown>;
export declare function isPrimitiveTester(tester: unknown): tester is Validator<Primitive>;
