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


