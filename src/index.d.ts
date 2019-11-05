export type GetType = (param: any) => string
export type FormatJSONDate = (jsonDate: string) => string
export type DeduplicateArray = (arr: any[]) => any[]
export type DeduplicateObjectArray = (arr: any[], keyName: string) => any[]
export type Shuffle = (arr: any[]) => any[]
export type ToThousands = (numberStr: string, currencySymbol?: string) => string
export type SimpleToThousands = (num: number, currencySymbol?: string) => string
export type Capitalized = (str: string) => string
export type GetRandomInt = (min: number, max: number) => number
export type GetRandomIntInclusive = (min: number, max: number) => number
export type DeepFlatten = (arr: any) => any[]
export type CheckWebp = () => boolean
export type GetFileExtension = (filename: string) => string
export type IsValidIP = (ip: string) => boolean
export type SortBy = (key: string) => any[]
export type FormatCookie = (coikies: string) => { [index: string]: string }
export type Sleep<T> = (delay?: number) => Promise<T>
export type RandomColor = () => string
export type RandomSeries = (length: number) => string
export type MongoObjectIdToTimestamp = (objectId: string) => number
