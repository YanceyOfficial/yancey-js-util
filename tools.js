/**
 *  getType([1, 2, 3])
 *  return array
 * */
export const getType = (data) => {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

/**
 *  formatJSONDate('2018-08-10T03:09:14.127086Z')
 *  return 2018-08-10 11:09:14
 * */
export const formatJSONDate = (jsonDate) => {
    return new Date(+new Date(new Date(jsonDate).toJSON()) + 8 * 3600 * 1000).toISOString()
        .replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
};

/**
 *  deduplicateArray([4, 2, 2, 4, 1])
 *  return [ 4, 2, 1 ]
 * */
export const deduplicateArray = (arr) => {
    return [...new Set(arr)];
}

/**
 *  shuffle([1, 2, 3, 4, 5])
 *  return [ 4, 2, 1, 5, 3 ]
 * */
export const shuffle = function (arr) {
    var i = arr.length, j;
    while (i) {
        j = Math.floor(Math.random() * i--);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
