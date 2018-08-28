/**
 *  @param {Any} param
 *  @example getType([1, 2, 3])
 *  @return array
 * */
export const getType = (param) => {
    return Object.prototype.toString.call(param).slice(8, -1).toLowerCase();
};

/**
 *  @param {String} jsonDate
 *  @example formatJSONDate('2018-08-10T03:09:14.127086Z')
 *  @return 2018-08-10 11:09:14
 * */
export const formatJSONDate = (jsonDate) => {
    return new Date(+new Date(new Date(jsonDate).toJSON()) + 8 * 3600 * 1000).toISOString()
        .replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
};

/**
 *  @param {String} arr
 *  @example deduplicateArray([4, 2, 2, 4, 1])
 *  @return [ 4, 2, 1 ]
 * */
export const deduplicateArray = (arr) => {
    return [...new Set(arr)];
};

/**
 *  shuffle([1, 2, 3, 4, 5])
 *  return [ 4, 2, 1, 5, 3 ]
 * */
export const shuffle = function (arr) {
    let i = arr.length, j;
    while (i) {
        j = Math.floor(Math.random() * i--);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

/**
 *  @param {String} str
 *  @param {String} currencies
 *  @example toThousands('1234567.85', '¥')
 *  @return ¥1,234,567.85
 * */
export const toThousands = (str, currencies = '$') => {
    if (!parseFloat(str)) {
        return 'Please input numeric string';
    } else {
        return currencies + str.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
    }
};

/**
 *  @param {String} str
 *  @example capitalized('hello, world!')
 *  @return Hello, World!
 * */
export const capitalized = (str) => {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
};

/**
 *  @param {Number} min
 *  @param {Number} max
 *  @example getRandomInt(1, 10)
 *  @return 6
 * */
export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
};

/**
 *  @param {Number} min
 *  @param {Number} max
 *  @example getRandomIntInclusive(1, 10)
 *  @return 10
 * */
export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Both of The maximum and minimum are inclusive
};

/**
 *  @param {Array} arr
 *  @example deepFlatten(['a', ['b', 'c'], [['d', 'e']], ['f']])
 *  @return [ 'a', 'b', 'c', 'd', 'e', 'f' ]
 * */
export const deepFlatten = (arr) => {
  const flatten = (arr) => [].concat(...arr);
  return flatten(arr.map(x => Array.isArray(x) ? deepFlatten(x) : x));
};
