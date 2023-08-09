import sdf from '../src';

describe('api.basic', () => {
  test('datetime hooks', () => {
    // const FORMAT_HOOKS = {
    //   date: 'YYYY-MM-DD',
    //   datetime: 'YYYY-MM-DD HH:mm:ss',
    //   time: 'HH:mm:ss',
    //   month: 'YYYY-MM',
    //   dbdt: 'YYYYMMDD_HHmmss',
    // };

    const d = new Date('2019/01/01 12:00:00');
    // 1. date:
    expect(sdf(d, 'date')).toBe('2019-01-01');
    // 2. datetime:
    expect(sdf(d, 'datetime')).toBe('2019-01-01 12:00:00');
    // 3. time:
    expect(sdf(d, 'time')).toBe('12:00:00');
    // 4. month:
    expect(sdf(d, 'month')).toBe('2019-01');
    // 5. dbdt:
    expect(sdf(d, 'dbdt')).toBe('20190101_120000');
  });

  test('normal format - YYYY-MM-DD HH:mm:ss', () => {
    const d = new Date('2019/01/01 12:00:00');
    expect(sdf(d, 'YYYY-MM-DD HH:mm:ss')).toBe('2019-01-01 12:00:00');
  });
});
