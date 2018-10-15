/**
 *  @param {Object} param
 *  @description To get the type of param.
 * */
export const getType = (param) => {
  return Object.prototype.toString.call(param).slice(8, -1).toLowerCase();
};

/**
 *  @param {String} jsonDate
 *  @description Convert JSONDate to common.
 * */
export const formatJSONDate = (jsonDate) => {
  return new Date(+new Date(new Date(jsonDate).toJSON()) + 8 * 3600 * 1000).toISOString()
    .replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
};

/**
 *  @param {Array} arr
 *  @description Remove deduplicate elements at an array.
 * */
export const deduplicateArray = (arr) => {
  return [...new Set(arr)];
};

/**
 *  @param {Array} arr
 *  @description Shuffle an array.
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
 *  @description Make amount to thousands.
 * */
export const toThousands = (str, currencies = '$') => {
  return currencies + str.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
};

/**
 *  @param {Number} num
 *  @param {String} currencies
 *  @description The other method to make amount to thousands.
 * */
export const simpleToThousands = (num, currencies = '$') => {
  return currencies + num.toLocaleString('en-US');
};

/**
 *  @param {String} str
 *  @description Capitalize the first letter of each word.
 * */
export const capitalized = (str) => {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
};

/**
 *  @param {Number} min
 *  @param {Number} max
 *  @description  The maximum is exclusive and the minimum is inclusive.
 * */
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 *  @param {Number} min
 *  @param {Number} max
 *  @description Both of The maximum and minimum are inclusive.
 * */
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 *  @param {Array} arr
 *  @description Deep flatten an array.
 * */
export const deepFlatten = (arr) => {
  const flatten = (arr) => [].concat(...arr);
  return flatten(arr.map(x => Array.isArray(x) ? deepFlatten(x) : x));
};

/**
 *  @description Detect whether the browser supports webp.
 * */
export const checkWebp = () => {
  return (document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0);
};

/**
 *  @param {String} filename
 *  @get file extension name
 * */
export const = getFileExtension(filename) => {
  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}
