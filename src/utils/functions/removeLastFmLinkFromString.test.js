/* eslint-disable max-len */
import removeLastFmLinkFromString from './removeLastFmLinkFromString';

describe('removeLastFmLinkFromString util function', () => {
  const textWithLink = `Arctic Monkeys are an indie rock band formed in Sheffield, South Yorkshire, England in 2002 after meeting at Stocksbridge High School. The band consists of Alex Turner (vocals, guitar), Jamie Cook (guitar), Nick O'Malley (backing vocals, bass) and Matt Helders (drums, vocals). Founding bassist Andy Nicholson left in 2006.↵↵The band has released six studio albums: "Whatever People Say I Am, That's What I'm Not" (2006), "Favourite Worst Nightmare" (2007) <a href="https://www.last.fm/music/Arctic+Monkeys">Read more on Last.fm</a>`;
  const textWithoutLink = `Arctic Monkeys are an indie rock band formed in Sheffield, South Yorkshire, England in 2002 after meeting at Stocksbridge High School. The band consists of Alex Turner (vocals, guitar), Jamie Cook (guitar), Nick O'Malley (backing vocals, bass) and Matt Helders (drums, vocals). Founding bassist Andy Nicholson left in 2006.↵↵The band has released six studio albums: "Whatever People Say I Am, That's What I'm Not" (2006), "Favourite Worst Nightmare" (2007) `;

  test('it should return the text without the last fm link', () => {
    expect(removeLastFmLinkFromString(textWithLink)).toEqual(textWithoutLink);
  });

  test('it should return the same text', () => {
    expect(removeLastFmLinkFromString(textWithoutLink)).toEqual(textWithoutLink);
  });
});
