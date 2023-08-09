# simple-date-format
> A simple date format.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/simple-date-format
```

## usage
```js
import sdf from '@jswork/simple-date-format';

// get current datetime:
const res1 = sdf('YYYY-MM-DD HH:mm:ss');
// 2020-01-01 12:12:12

// use format hooks
const res2 = sdf('date');
// 2020-01-01
```

## format hooks
```js
const FORMAT_HOOKS = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  time: 'HH:mm:ss',
  month: 'YYYY-MM',
  dbdt: 'YYYYMMDD_HHmmss',
};
```

## license
Code released under [the MIT license](https://github.com/afeiship/simple-date-format/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/simple-date-format
[version-url]: https://npmjs.org/package/@jswork/simple-date-format

[license-image]: https://img.shields.io/npm/l/@jswork/simple-date-format
[license-url]: https://github.com/afeiship/simple-date-format/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/simple-date-format
[size-url]: https://github.com/afeiship/simple-date-format/blob/master/dist/simple-date-format.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/simple-date-format
[download-url]: https://www.npmjs.com/package/@jswork/simple-date-format
