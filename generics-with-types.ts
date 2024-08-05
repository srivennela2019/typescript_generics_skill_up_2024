type MyGenericUserType<TUser> = {
    data: TUser,
    id : number,
    enrolled: boolean
 }
 
 type Student = MyGenericUserType<{ name: string, classes: [], givenUniform: boolean }>;
 type Teacher = MyGenericUserType<{ name: string , gradesTeching: [] }>;