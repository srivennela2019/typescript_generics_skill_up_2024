//Without as 
// const getTypedObjectKeys = <TObject extends {}>(obj: TObject): Array<keyof TObject> => {
//     return Object.keys(obj)
// }

//With as
const getTypedObjectKeysWithAs = <TObject extends {}>(obj: TObject): Array<keyof TObject> => {
    return Object.keys(obj) as Array<keyof TObject>;
}
