const element = document.querySelector('.input');
//ERROR
//const value = element?.value
const elementWithGeneric = document.querySelector<HTMLInputElement>('.input');
const valueWithGeneric = elementWithGeneric?.value;

const arr = [1, 2, 3];

const newArr = arr.map<string>(() => {
    return 'a';
});
const newArrMapped = arr.map((val) => {
    return val+val;
});
const voidArr = arr.map(() => {});