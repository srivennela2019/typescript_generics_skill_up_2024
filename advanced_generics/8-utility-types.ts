type T0 = ReturnType<() => string>;
     
//type T0 = string
type T1 = ReturnType<(s: string) => void>;
     
//type T1 = void
type T2 = ReturnType<<T>() => T>;