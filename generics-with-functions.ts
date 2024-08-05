function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  const numberArray: number[] = [1, 2, 3, 4, 5];
  const stringArray: string[] = ['apple', 'banana', 'orange'];
  
  // Note the generic values being passed in <number> & <string>
  const firstNumber = getFirstElement<number>(numberArray);
  const firstString = getFirstElement<string>(stringArray);