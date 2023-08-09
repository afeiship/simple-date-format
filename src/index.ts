declare var wx: any;

type TimeType = string | Date;

// https://dayjs.gitee.io/docs/zh-CN/display/format
// https://github.com/wechat-miniprogram/weui-miniprogram

const FORMAT_HOOKS = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  time: 'HH:mm:ss',
  month: 'YYYY-MM',
  dbdt: 'YYYYMMDD_HHmmss',
};

const simpleDateFormat = (time: TimeType, format: string) => {
  const reg = FORMAT_HOOKS[format] || format;
  const date = typeof time === 'string' ? new Date(time) : time;
  const map: any = {};
  map.YYYY = date.getFullYear();
  map.YY = ('' + map.YYYY).slice(2);
  map.M = date.getMonth() + 1;
  map.MM = (map.M < 10 ? '0' : '') + map.M;
  map.D = date.getDate();
  map.DD = (map.D < 10 ? '0' : '') + map.D;
  map.H = date.getHours();
  map.HH = (map.H < 10 ? '0' : '') + map.H;
  map.m = date.getMinutes();
  map.mm = (map.m < 10 ? '0' : '') + map.m;
  map.s = date.getSeconds();
  map.ss = (map.s < 10 ? '0' : '') + map.s;

  return reg.replace(/\bYYYY|YY|MM|M|DD|D|HH|H|mm|m|ss|s\b/g, ($1) => map[$1]);
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = simpleDateFormat;
}

export default simpleDateFormat;
