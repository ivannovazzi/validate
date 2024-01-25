import { Results, Source, Tester } from "./types";
export default function validate<V extends Source, T extends Tester<V>, R = Results<V>>(value: V, testers: T, source?: Source): R;
