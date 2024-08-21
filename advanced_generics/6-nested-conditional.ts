type WhatType<T> = T extends string
  ? 'string'
  : T extends boolean
  ? 'boolean'
  : T extends Error
  ? 'error'
  : never

type StringType = WhatType<'sentence'> // 'string'
type IsActive = WhatType<false> // 'boolean'
type Unassignable = WhatType<TypeError> // 'error'
