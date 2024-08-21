// default type parameter
function createSet<T = string>(){
    return new Set<T>();
}

const setNumber = createSet<number>();
const setDefault = createSet();