'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const reg = {
    ip: /^(d{1,2}|1dd|2[0-4]d|25[0-5]).(d{1,2}|1dd|2[0-4]d|25[0-5]).(d{1,2}|1dd|2[0-4]d|25[0-5]).(d{1,2}|1dd|2[0-4]d|25[0-5])$/,
};

const getType = (param) => Object.prototype.toString
    .call(param)
    .slice(8, -1)
    .toLowerCase();
const formatJSONDate = (jsonDate) => new Date(+new Date(new Date(jsonDate).toJSON()) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, ' ')
    .replace(/\.[\d]{3}Z/, '');
const deduplicateArray = (arr) => [...new Set(arr)];
const deduplicateObjectArray = (arr, keyName) => {
    const hash = {};
    return arr.reduce((item, next) => {
        hash[next[keyName]] ? null : (hash[next[keyName]] =  item.push(next));
        return item;
    }, []);
};
const shuffle = (arr) => {
    let i = arr.length, j;
    while (i) {
        j = Math.floor(Math.random() * i--);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
const toThousands = (numberStr, currencySymbol = '$') => {
    return currencySymbol + numberStr.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
};
const simpleToThousands = (num, currencySymbol = '$') => {
    return currencySymbol + num.toLocaleString('en-US');
};
const capitalized = (str) => {
    return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
};
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const deepFlatten = (arr) => {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
};
const checkWebp = () => {
    return (document
        .createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0);
};
const getFileExtension = (filename) => filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
const isValidIP = (ip) => {
    return reg.ip.test(ip);
};
const sortBy = (key) => (a, b) => a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
const formatCookie = (cookies) => {
    const o = {};
    cookies
        .split(';')
        .forEach(value => (o[value.split('=')[0]] = value.split('=')[1]));
    return o;
};
const sleep = (delay = 1000) => new Promise(resolve => setTimeout(() => resolve(), delay));
const randomColor = () => '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
const randomSeries = (length) => Math.random()
    .toString(36)
    .slice(2, 2 + length);
const mongoObjectIdToTimestamp = (objectId) => {
    return parseInt(objectId.substring(0, 8), 16) * 1000;
};

exports.capitalized = capitalized;
exports.checkWebp = checkWebp;
exports.deduplicateArray = deduplicateArray;
exports.deduplicateObjectArray = deduplicateObjectArray;
exports.deepFlatten = deepFlatten;
exports.formatCookie = formatCookie;
exports.formatJSONDate = formatJSONDate;
exports.getFileExtension = getFileExtension;
exports.getRandomInt = getRandomInt;
exports.getRandomIntInclusive = getRandomIntInclusive;
exports.getType = getType;
exports.isValidIP = isValidIP;
exports.mongoObjectIdToTimestamp = mongoObjectIdToTimestamp;
exports.randomColor = randomColor;
exports.randomSeries = randomSeries;
exports.shuffle = shuffle;
exports.simpleToThousands = simpleToThousands;
exports.sleep = sleep;
exports.sortBy = sortBy;
exports.toThousands = toThousands;
