interface MetaData {
	color: string;
	model: "coupe" | "suv";
}

// Defining our generic
interface Car<T> {
	id: number;
	name: string;
	metadata: T;
}

// Using our generic
const personOne: Car<(number|string)[]> = {
	id: 1,
	name: 'Subaru',
	metadata: ['blindspot', 180, 'sport', 'suv']
}

// Using our generic
const personTwo: Car<MetaData> = {
	id: 2,
	name: 'Chevorlet',
	metadata: {
		color: 'black',
		model: 'coupe',
	}
}