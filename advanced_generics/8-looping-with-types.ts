type ReadonlyUser<T> = {
    readonly [P in keyof T]: T[P];
  }; 
type User = {name: string, age: string}
type RUser = ReadonlyUser<User>