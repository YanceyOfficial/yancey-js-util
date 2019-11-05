export type getType<T> = (param: T) => string
export type formatJSONDate = (jsonDate: string) => string
export type deduplicateArray<T> = (arr: T[]) => T[]
export type deduplicateObjectArray<T> = (arr: T[], keyName: string) => T[]
export type shuffle<T> = (arr: T[]) => T[]
export type toThousands = (numberStr: string, currencySymbol?: string) => string
export type simpleToThousands = (num: number, currencySymbol?: string) => string
export type capitalized = (str: string) => string
export type getRandomInt = (min: number, max: number) => number
export type getRandomIntInclusive = (min: number, max: number) => number
export type deepFlatten<T> = (arr: T) => T[]
export type checkWebp = () => boolean
export type getFileExtension = (filename: string) => string
export type isValidIP = (ip: string) => boolean
export type sortBy<T> = (key: string) => T[]
export type formatCookie = (coikies: string) => { [index: string]: string }
export type sleep<T> = (delay?: number) => Promise<T>
export type randomColor = () => string
export type randomSeries = (length: number) => string
export type mongoObjectIdToTimestamp = (objectId: string) => number
