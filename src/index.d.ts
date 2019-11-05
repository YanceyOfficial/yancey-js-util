export type getType = (param: any) => string
export type formatJSONDate = (jsonDate: string) => string
export type deduplicateArray = (arr: any[]) => any[]
export type deduplicateObjectArray = (arr: any[], keyName: string) => any[]
export type shuffle = (arr: any[]) => any[]
export type toThousands = (numberStr: string, currencySymbol?: string) => string
export type simpleToThousands = (num: number, currencySymbol?: string) => string
export type capitalized = (str: string) => string
export type getRandomInt = (min: number, max: number) => number
export type getRandomIntInclusive = (min: number, max: number) => number
export type deepFlatten = (arr: any) => any[]
export type checkWebp = () => boolean
export type getFileExtension = (filename: string) => string
export type isValidIP = (ip: string) => boolean
export type sortBy = (key: string) => any[]
export type formatCookie = (coikies: string) => { [index: string]: string }
export type sleep<T> = (delay?: number) => Promise<T>
export type randomColor = () => string
export type randomSeries = (length: number) => string
export type mongoObjectIdToTimestamp = (objectId: string) => number
