import assert from "assert";
import { it } from "node:test";

import { Tester } from "../src/types";
import validate from "../src/validate";
import { booleanValidator, isBooleanFunc, isNumber, isNumberFunc, isString, numberValidator, stringValidator } from "../src/validators";


it("validates primitivies", () => {
  assert.deepStrictEqual(validate(2, { required: true, func: isNumberFunc }), { valid: true, required: true, errors: []});
});


it("validates an object", () => {

  type ObjectModel = {
    a: number;
    b: string;
    c: boolean;
    d: string;
  }
  const tester: Tester<ObjectModel> = {
    a: numberValidator,
    b: stringValidator,
    c: booleanValidator,
    d: { required: false, func: ({ source }) => source.a > 10 },  
  };

  const source: ObjectModel = {
    a: 1,
    b: "string",
    c: true,
    d: "other",
  };
  const result = validate(source, tester);

  
  assert.deepStrictEqual(result.a, { valid: true, required: true, errors: []});
  assert.deepStrictEqual(result.b, { valid: true, required: true, errors: []});
  assert.deepStrictEqual(result.c, { valid: true, required: true, errors: []});
  assert.deepStrictEqual(result.d, { valid: false, required: false, errors: []});
  
});


it("validates dynamic primitivies", () => {
  const stringSource = {
    isString: true,
    myDynamicValue: "test",
  }
  const numberSource = {
    isString: false,
    myDynamicValue: 1,
  }

  type SourceType = {
    isString: boolean;
    myDynamicValue: string | number;
  };
  
  const tester: Tester<SourceType> = {
    isString: { required: true, func: isBooleanFunc },
    myDynamicValue: { required: true, func: ({ value, source }) => source.isString ? isString(value) : isNumber(value) },
  }

  const stringResult = validate(stringSource, tester);
  const numberResult = validate(numberSource, tester);
  assert.deepStrictEqual(stringResult.isString.valid, true);
  assert.deepStrictEqual(stringResult.myDynamicValue.valid, true);
  assert.deepStrictEqual(numberResult.isString.valid, true);
  assert.deepStrictEqual(numberResult.myDynamicValue.valid, true);
});


















