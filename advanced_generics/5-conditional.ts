type StringFromType<T> = T extends string ? 'string' : never

type lorem = StringFromType<'lorem ipsum'> // 'string'
type ten = StringFromType<10> // never