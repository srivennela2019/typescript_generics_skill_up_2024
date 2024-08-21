// constraints in generics 

//extends
function logLength<T extends { length: number }>(arg: T): void {
    console.log(arg.length);
}

logLength({ id: 1, length: 3});
//ERROR
//logLength({ id: 2 })

//key of
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
getProperty({id: 1, name: 'Sol'},'name');
//ERROR
//getProperty({id: 1, name: 'Sol'},'age');

