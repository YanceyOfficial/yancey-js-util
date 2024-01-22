/**
 *  @param {Object} param
 *  @description To get the type of param.
 * */
export const getType = <T>(param: T) =>
  Object.prototype.toString.call(param).slice(8, -1).toLowerCase()

/**
 *  @param {String} jsonDate
 *  @description Convert JSONDate to common.
 * */
export const formatJSONDate = (jsonDate: string) =>
  new Date(+new Date(new Date(jsonDate).toJSON()) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, ' ')
    .replace(/\.[\d]{3}Z/, '')

/**
 *  @param {Array} arr
 *  @description Remove deduplicate elements at an array.
 * */
export const deduplicateArray = <T>(arr: T[]) => [...new Set(arr)]

/**
 *  @param {Array} arr
 *  @param {String} keyName
 *  @description Remove deduplicate elements by key at an object-array.
 * */
export const deduplicateObjectArray = <T>(arr: T[], keyName: string) => {
  const hash = {}
  return arr.reduce((item, next) => {
    // @ts-ignore
    hash[next[keyName]] ? null : (hash[next[keyName]] = true && item.push(next))
    return item
  }, [])
}

/**
 *  @param {Array} arr
 *  @description Shuffle an array.
 * */
export const shuffle = <T>(arr: T[]) => {
  let i = arr.length,
    j
  while (i) {
    j = Math.floor(Math.random() * i--)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 *  @param {String} numberStr
 *  @param {String} currencySymbol
 *  @description Make amount to thousands.
 * */
export const toThousands = (
  numberStr: string,
  currencySymbol: string = '$',
) => {
  return currencySymbol + numberStr.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

/**
 *  @param {Number} num
 *  @param {String} currencySymbol
 *  @description The other method to make amount to thousands.
 * */
export const simpleToThousands = (
  num: number,
  currencySymbol: string = '$',
) => {
  return currencySymbol + num.toLocaleString('en-US')
}

/**
 *  @param {String} str
 *  @description Capitalize the first letter of each word.
 * */
export const capitalized = (str: string) => {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}

/**
 *  @param {Number} min
 *  @param {Number} max
 *  @description  The maximum is exclusive and the minimum is inclusive.
 * */
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 *  @param {Number} min
 *  @param {Number} max
 *  @description Both of The maximum and minimum are inclusive.
 * */
export const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 *  @param {Array} arr
 *  @description Deep flatten an array.
 * */
export const deepFlatten = (arr: any) => {
  return arr.reduce(
    (acc: string[], val: string) =>
      Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val),
    [],
  )
}

/**
 *  @description Detect whether the browser supports webp.
 * */
export const checkWebp = () => {
  return (
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0
  )
}

/**
 *  @param {String} filename
 *  @get file extension name
 * */
export const getFileExtension = (filename: string) =>
  filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2)

/**
 *  @param {String} ip
 *  @description check ip
 * */
export const isValidIP = (ip: string) => {
  return /^(d{1,2}|1dd|2[0-4]d|25[0-5]).(d{1,2}|1dd|2[0-4]d|25[0-5]).(d{1,2}|1dd|2[0-4]d|25[0-5]).(d{1,2}|1dd|2[0-4]d|25[0-5])$/.test(
    ip,
  )
}

/**
 *  @param {String} key
 *  @param {order} 'ascend' | 'descend'
 *  @description Sort an Array-Object By key
 * */
export const sortBy =
  <T>(key: keyof T, order: 'ascend' | 'descend' = 'ascend') =>
  (a: T, b: T) =>
    a[key] < b[key]
      ? order === 'ascend'
        ? -1
        : 1
      : a[key] > b[key]
      ? order === 'ascend'
        ? 1
        : -1
      : 0

/**
 *  @param {String} cookies
 *  @description Cookies string to object
 * */
export const formatCookie = (cookies: string) => {
  const o = {}
  cookies
    .split(';')
    // @ts-ignore
    .forEach((value) => (o[value.split('=')[0]] = value.split('=')[1]))
  return o
}

/**
 *  @param {Number} dalay
 *  @description Delay Function
 * */
export const sleep = (delay = 1000) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), delay))

/**
 *  @description Get a hex color
 * */
export const randomColor = () =>
  '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)

/**
 *  @param {Number} length
 *  @param {Number} hex
 *  @description Generate a random series at most 10 length
 * */
export const randomSeries = (length: number, hex: number = 36) =>
  Math.random()
    .toString(hex)
    .slice(2, 2 + length)

/**
 *  @param {String} objectId
 *  @description transform MongoDB's ObjectId to timestamp
 * */
export const mongoObjectIdToTimestamp = (objectId: string) => {
  return parseInt(objectId.substring(0, 8), 16) * 1000
}

/**
 *  @param {Function} fn
 *  @param {Function} checkHasDoneFn
 *  @param {Number} timeout
 *  @param {Number} interval
 *  @description Short poll.
 * */
export const poll = <T>(
  fn: () => Promise<T>,
  checkHasDoneFn: (res: T) => boolean,
  timeout: number,
  interval: number,
) => {
  const endTime = Number(new Date()) + timeout

  const checkCondition = async (
    resolve: (value: unknown) => void,
    reject: (reason?: any) => void,
  ) => {
    try {
      // If the condition is met, we're done!
      const result = await fn()
      if (checkHasDoneFn(result)) {
        resolve(result)
      }
      // If the condition isn't met but the timeout hasn't elapsed, go again!
      else if (Number(new Date()) < endTime) {
        setTimeout(checkCondition, interval, resolve, reject)
      }
      // Didn't match and too much time, reject!
      else {
        reject(new Error('timeout!'))
      }
    } catch {
      reject(new Error('fetch error!'))
    }
  }

  return new Promise(checkCondition)
}

/**
 *  @param {String} blob
 *  @param {String} fileName
 *  @description Download file by achor HTML tag
 * */
export const downloadFile = (blob: string, fileName: string): void => {
  const a = document.createElement('a')
  a.href = blob
  a.style.display = 'none'
  a.download = fileName
  a.setAttribute('download', fileName)
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
