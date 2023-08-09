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
    expect(sdf('date', d)).toBe('2019-01-01');
    // 2. datetime:
    expect(sdf('datetime', d)).toBe('2019-01-01 12:00:00');
    // 3. time:
    expect(sdf('time', d)).toBe('12:00:00');
    // 4. month:
    expect(sdf('month', d)).toBe('2019-01');
    // 5. dbdt:
    expect(sdf('dbdt', d)).toBe('20190101_120000');
  });

  test('normal format - YYYY-MM-DD HH:mm:ss', () => {
    const d = new Date('2019/01/01 12:00:00');
    expect(sdf('YYYY-MM-DD HH:mm:ss', d)).toBe('2019-01-01 12:00:00');
  });

  test.only('invalid input', () => {
    const toThow = () => sdf('YYYY-MM-DD HH:mm:ss', 'xyz');
    expect(toThow).toThrowError('invalid input');
  })
});
