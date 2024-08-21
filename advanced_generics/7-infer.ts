// Define a type that extracts the type of elements from an array
type ElementType<T> = T extends (infer U)[] ? U : never;

// Example array
const numbers = [1, 2, 3, 4, 5];

// Using ElementType to infer the element type of the array
type NumberType = ElementType<typeof numbers>; // NumberType will be 'number'

