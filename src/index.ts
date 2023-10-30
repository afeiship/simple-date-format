declare var wx: any;

type TimeType = string | Date;

// https://dayjs.gitee.io/docs/zh-CN/display/format
// https://github.com/wechat-miniprogram/weui-miniprogram
// https://tc39.es/ecma262/#sec-date-time-string-format

const FORMAT_HOOKS = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  time: 'HH:mm:ss',
  month: 'YYYY-MM',
  dbdt: 'YYYYMMDD_HHmmss',
  fullday: 'YYYY/YYYY-MM/YYYY-MM-DD',
};

// m -> mm
const pad = (n: number) => (n < 10 ? '0' + n : n);

const simpleDateFormat = (format: string, time?: TimeType) => {
  const reg = FORMAT_HOOKS[format] || format;
  const date = time ? (typeof time === 'string' ? new Date(time) : time) : new Date();
  const map: any = {};
  const fullYear = date.getFullYear();

  // test valid
  const valid = !isNaN(fullYear) && fullYear > 0;
  if (!valid) throw new Error('invalid input');

  // construct map
  map.YYYY = fullYear;
  map.YY = ('' + map.YYYY).slice(2);
  map.M = date.getMonth() + 1;
  map.MM = pad(map.M);
  map.D = date.getDate();
  map.DD = pad(map.D);
  map.H = date.getHours();
  map.HH = pad(map.H);
  map.m = date.getMinutes();
  map.mm = pad(map.m);
  map.s = date.getSeconds();
  map.ss = pad(map.s);

  // format
  return reg.replace(/\bYYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s\b/g, ($1) => map[$1]);
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = simpleDateFormat;
}

export default simpleDateFormat;
