import formatMusicTime from './formatMusicTime';

describe('FormatMusicTime util function', () => {
  test('it should transform the seconds in a time string', () => {
    expect(formatMusicTime('218')).toEqual('03:38');
    expect(formatMusicTime('61')).toEqual('01:01');
    expect(formatMusicTime('58')).toEqual('00:58');
    expect(formatMusicTime('0')).toEqual('00:00');
  });
});
