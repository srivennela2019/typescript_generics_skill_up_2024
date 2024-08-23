type T0 = ReturnType<() => string>;
     
//type T0 = string
type T1 = ReturnType<(s: string) => void>;
     
//type T1 = void
type T2 = ReturnType<<T>() => T>;

type T3 = Partial<[1,2,3]>

type T4 = Record<string, string>;

type T5 = Readonly<{name: string}>