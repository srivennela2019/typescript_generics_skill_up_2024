class Bucket<TElementType> {
	// Initializing a new property with an array of the generic value
	private values: TElementType[] = [];

	// Setting the argument for this method to be the generic
	addValue(value: TElementType): void {
		this.values.push(value);
	}
	// Setting the return value of this method to be an array of the generic
	getValues(): TElementType[] {
		return this.values;
	}
}

//  Using 'number' as the type to replace our generic 'TElementType'
const example = new Bucket<number>();

//  We can now only pass in numbers. Any other type will error.
example.addValue(24);
example.addValue(42);
// ERROR
//example.addValue('yay')
const values = example.getValues();

console.log(values); // [24, 42]