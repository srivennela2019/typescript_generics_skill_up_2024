
// T, U, V Convention
type Transform<T, U, V> = T extends Array<infer R>
  ? U extends { new(...args: any[]): infer S }
    ? V extends (a: R, b: S) => infer Q
      ? Q[]
      : never
    : never
  : never;

function deepTransform<T, U extends { new(...args: any[]): any }, V extends (a: any, b: any) => any>(
  input: T[],
  clazz: U,
  transformFn: V
): Transform<T[], U, V> {
  const instance = new clazz();
  return input.map(item => transformFn(item, instance)) as Transform<T[], U, V>;
}



// Element, Key, Value convention
type TransformElement<ArrayType, ConstructorType, FunctionType> = ArrayType extends Array<infer ElementType>
  ? ConstructorType extends { new(...args: any[]): infer InstanceType }
    ? FunctionType extends (element: ElementType, instance: InstanceType) => infer ResultType
      ? ResultType[]
      : never
    : never
  : never;

function deepTransformElement<ArrayType, ConstructorType extends { new(...args: any[]): any }, FunctionType extends (element: any, instance: any) => any>(
  input: ArrayType[],
  Constructor: ConstructorType,
  transformFunction: FunctionType
): TransformElement<ArrayType[], ConstructorType, FunctionType> {
  const instance = new Constructor();
  return input.map(item => transformFunction(item, instance)) as Transform<ArrayType[], ConstructorType, FunctionType>;
}



// Mixed Convention

type TransformMixed<TArray, TConstructor, TFunction> = TArray extends Array<
  infer ElementType
>
  ? TConstructor extends { new (...args: any[]): infer InstanceType }
    ? TFunction extends (
        element: ElementType,
        instance: InstanceType,
      ) => infer ResultType
      ? ResultType[]
      : never
    : never
  : never;

function deepTransformMixed<
  TArray,
  TConstructor extends { new (...args: any[]): any },
  TFunction extends (element: any, instance: any) => any,
>(
  input: TArray[],
  Constructor: TConstructor,
  transformFunction: TFunction,
): TransformMixed<TArray[], TConstructor, TFunction> {
  const instance = new Constructor();
  return input.map((item) => transformFunction(item, instance)) as Transform<
    TArray[],
    TConstructor,
    TFunction
  >;
}