function identity<T>(arg: T): T {
    return arg;
}

identity<string>('hello');
identity<number>(2);
//ERROR
//identity<number>('ysy');
// T is type parameter, arg is of type T, and function returns type T