import { Results, Source, Tester } from "./types";
import { isObjectValue, isObjectTester, isPrimitiveValue, isPrimitiveTester } from "./utils";

export default function validate<
  V extends Source,
  T extends Tester<V>,
  R = Results<V>
>(value: V, testers: T, source: Source = value): R {
  
  if (isPrimitiveTester(testers) && isPrimitiveValue(value)) {
    
    return {
      valid: testers.func({ value, source: source ?? value }),
      required: testers.required,
      errors: [],
    } as R;   
  } else if (isObjectTester(testers) && isObjectValue(value)) {
    
    return Object.keys(testers).reduce((acc, key) => {
      const valueKey = value[key];      
      const testerKey = testers[key] as Tester<typeof valueKey>;
      return { ...acc, [key]: validate(valueKey, testerKey, source) };
    }, {}) as R;
  }
  throw new Error("Invalid tester");
}