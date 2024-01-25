export type Primitive = string | boolean | number | null | undefined;
export type Nested = {
  [key: string]: Nested | Primitive;
};

export type Source = Primitive | Nested;

export type NestedTester<V extends Nested, S extends Source> = {
  [K in keyof V]?: Tester<V[K], S>;
};

export type Tester<
  V extends Source,
  S extends Source = V
> = [V] extends [Primitive]
  ? Validator<V, S>
  : [V] extends [Nested]
  ? NestedTester<V, S>
  : never;

export type NestedResults<T extends Nested> = {
  [K in keyof T]: Results<T[K]>;
};

export type Results<T extends Source> = T extends Primitive
  ? Result
  : T extends Nested
  ? NestedResults<T>
  : never;

export type TestingFunc<T = unknown, S = unknown> = ({ value, source }: { value: T; source: S }) => boolean;

export type Validator<T extends Primitive = Primitive, S extends Source = Source> = {
  required?: boolean;
  func: TestingFunc<T, S>;
};
;

export interface Result {
  valid: boolean;
  required?: boolean;
  errors: string[];
}

// type X = string | number;
// type Y = string | number | object;
// type R1 = Equal<Extends<Y,X>, true>;
// type R2 = Equal<Extends<X, Y>, true>;
export type Extends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false