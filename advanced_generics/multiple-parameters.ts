// multiple type paramters

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
 
 const mergedObject = merge({ name: 'John' }, { age: 30 });
 