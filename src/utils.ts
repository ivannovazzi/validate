import { Nested, NestedTester, Primitive, Source, Validator } from "./types";

export function isObjectValue(value: unknown): value is Nested {
  return typeof value === "object" && value !== null;
}

export function isArrayValue(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

export function isPrimitiveValue(value: unknown): value is Primitive {
  return (
    typeof value === "number" ||
    typeof value === "string" ||
    typeof value === "boolean" ||
    value === null ||
    value === undefined
  );
}

export function isObjectTester(
  tester: unknown
): tester is NestedTester<Nested, Source> {
  return typeof tester === "object" && tester !== null;
}

export function isArrayTester(tester: unknown): tester is Array<Validator> {
  return Array.isArray(tester);
}

export function isPrimitiveTester(
  tester: unknown
): tester is Validator<Primitive> {
  return typeof tester === "object" && (tester as Validator<Primitive>)?.func !== null;
}