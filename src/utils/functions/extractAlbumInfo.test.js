/* eslint-disable max-len */
import extractAlbumInfo from './extractAlbumInfo';

const albumExample = {
  name: "Whatever People Say I Am, That's What I'm Not",
  artist: 'Arctic Monkeys',
  url: 'https://www.last.fm/music/Arctic+Monkeys/Whatever+People+Say+I+Am,+That%27s+What+I%27m+Not',
  image: [
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/053829a0cd6d4d5d95070b1542cb3f96.png',
      size: 'small',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/053829a0cd6d4d5d95070b1542cb3f96.png',
      size: 'medium',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/053829a0cd6d4d5d95070b1542cb3f96.png',
      size: 'large',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/053829a0cd6d4d5d95070b1542cb3f96.png',
      size: 'extralarge',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/053829a0cd6d4d5d95070b1542cb3f96.png',
      size: 'mega',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/053829a0cd6d4d5d95070b1542cb3f96.png',
      size: '',
    },
  ],
  listeners: '2130837',
  playcount: '69982630',
  tracks: {
    track: [
      {
        name: 'The View from the Afternoon',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/The+View+from+the+Afternoon',
        duration: '218',
        '@attr': { rank: '1' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'I Bet You Look Good on the Dancefloor',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/I+Bet+You+Look+Good+on+the+Dancefloor',
        duration: '173',
        '@attr': { rank: '2' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'Fake Tales of San Francisco',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/Fake+Tales+of+San+Francisco',
        duration: '177',
        '@attr': { rank: '3' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'Dancing Shoes',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/Dancing+Shoes',
        duration: '142',
        '@attr': { rank: '4' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: "You Probably Couldn't See for the Lights but You Were Staring Straight at Me",
        url:
          'https://www.last.fm/music/Arctic+Monkeys/_/You+Probably+Couldn%27t+See+for+the+Lights+but+You+Were+Staring+Straight+at+Me',
        duration: '130',
        '@attr': { rank: '5' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'Still Take You Home',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/Still+Take+You+Home',
        duration: '173',
        '@attr': { rank: '6' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'Riot Van',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/Riot+Van',
        duration: '134',
        '@attr': { rank: '7' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'Red Light Indicates Doors Are Secured',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/Red+Light+Indicates+Doors+Are+Secured',
        duration: '142',
        '@attr': { rank: '8' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'Mardy Bum',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/Mardy+Bum',
        duration: '175',
        '@attr': { rank: '9' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'Perhaps Vampires Is a Bit Strong But...',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/Perhaps+Vampires+Is+a+Bit+Strong+But...',
        duration: '268',
        '@attr': { rank: '10' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'When the Sun Goes Down',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/When+the+Sun+Goes+Down',
        duration: '197',
        '@attr': { rank: '11' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'From the Ritz to the Rubble',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/From+the+Ritz+to+the+Rubble',
        duration: '191',
        '@attr': { rank: '12' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
      {
        name: 'A Certain Romance',
        url: 'https://www.last.fm/music/Arctic+Monkeys/_/A+Certain+Romance',
        duration: '327',
        '@attr': { rank: '13' },
        streamable: { '#text': '0', fulltrack: '0' },
        artist: {
          name: 'Arctic Monkeys',
          mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
          url: 'https://www.last.fm/music/Arctic+Monkeys',
        },
      },
    ],
  },
  tags: {
    tag: [
      { name: 'albums I own', url: 'https://www.last.fm/tag/albums+I+own' },
      { name: 'indie rock', url: 'https://www.last.fm/tag/indie+rock' },
      { name: 'indie', url: 'https://www.last.fm/tag/indie' },
      { name: 'british', url: 'https://www.last.fm/tag/british' },
      { name: 'rock', url: 'https://www.last.fm/tag/rock' },
    ],
  },
  wiki: {
    published: '07 Mar 2009, 14:21',
    summary:
      "Whatever People Say I Am, That's What I'm Not is the debut album by Sheffield band Arctic Monkeys, released on 23 January 2006. The album became the fastest selling debut album in the UK since Definitely Maybe by Oasis. The album sold over 360,000 copies in its first week, but lost the title in November 2007 to Leona Lewis's album Spirit. It has since gone quadruple platinum in the UK, and won the 2006 Mercury Prize.\n\nThe album includes both tracks from the band's original EP <a href=\"http://www.last.fm/music/Arctic+Monkeys/Whatever+People+Say+I+Am,+That%27s+What+I%27m+Not\">Read more on Last.fm</a>.",
    content:
      'Whatever People Say I Am, That\'s What I\'m Not is the debut album by Sheffield band Arctic Monkeys, released on 23 January 2006. The album became the fastest selling debut album in the UK since Definitely Maybe by Oasis. The album sold over 360,000 copies in its first week, but lost the title in November 2007 to Leona Lewis\'s album Spirit. It has since gone quadruple platinum in the UK, and won the 2006 Mercury Prize.\n\nThe album includes both tracks from the band\'s original EP, Five Minutes with Arctic Monkeys, as well as their first two singles and UK Number Ones, "I Bet You Look Good on the Dancefloor" and "When the Sun Goes Down." <a href="http://www.last.fm/music/Arctic+Monkeys/Whatever+People+Say+I+Am,+That%27s+What+I%27m+Not">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
  },
};

describe('extractAlbumInfo util function', () => {
  test('it should return the correct info obj', () => {
    expect(extractAlbumInfo(albumExample)).toMatchObject({
      albumTags: [
        { name: 'albums I own', url: 'https://www.last.fm/tag/albums+I+own' },
        { name: 'indie rock', url: 'https://www.last.fm/tag/indie+rock' },
        { name: 'indie', url: 'https://www.last.fm/tag/indie' },
        { name: 'british', url: 'https://www.last.fm/tag/british' },
        { name: 'rock', url: 'https://www.last.fm/tag/rock' },
      ],
      albumArtistName: 'Arctic Monkeys',
      albumLargeCoverLink:
        'https://lastfm.freetls.fastly.net/i/u/300x300/053829a0cd6d4d5d95070b1542cb3f96.png',
      albumSmallCoverLink:
        'https://lastfm.freetls.fastly.net/i/u/64s/053829a0cd6d4d5d95070b1542cb3f96.png',
      albumName: "Whatever People Say I Am, That's What I'm Not",
      albumTracks: [
        {
          name: 'The View from the Afternoon',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/The+View+from+the+Afternoon',
          duration: '218',
          '@attr': { rank: '1' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'I Bet You Look Good on the Dancefloor',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/I+Bet+You+Look+Good+on+the+Dancefloor',
          duration: '173',
          '@attr': { rank: '2' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'Fake Tales of San Francisco',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/Fake+Tales+of+San+Francisco',
          duration: '177',
          '@attr': { rank: '3' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'Dancing Shoes',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/Dancing+Shoes',
          duration: '142',
          '@attr': { rank: '4' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: "You Probably Couldn't See for the Lights but You Were Staring Straight at Me",
          url:
            'https://www.last.fm/music/Arctic+Monkeys/_/You+Probably+Couldn%27t+See+for+the+Lights+but+You+Were+Staring+Straight+at+Me',
          duration: '130',
          '@attr': { rank: '5' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'Still Take You Home',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/Still+Take+You+Home',
          duration: '173',
          '@attr': { rank: '6' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'Riot Van',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/Riot+Van',
          duration: '134',
          '@attr': { rank: '7' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'Red Light Indicates Doors Are Secured',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/Red+Light+Indicates+Doors+Are+Secured',
          duration: '142',
          '@attr': { rank: '8' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'Mardy Bum',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/Mardy+Bum',
          duration: '175',
          '@attr': { rank: '9' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'Perhaps Vampires Is a Bit Strong But...',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/Perhaps+Vampires+Is+a+Bit+Strong+But...',
          duration: '268',
          '@attr': { rank: '10' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'When the Sun Goes Down',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/When+the+Sun+Goes+Down',
          duration: '197',
          '@attr': { rank: '11' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'From the Ritz to the Rubble',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/From+the+Ritz+to+the+Rubble',
          duration: '191',
          '@attr': { rank: '12' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
        {
          name: 'A Certain Romance',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/A+Certain+Romance',
          duration: '327',
          '@attr': { rank: '13' },
          streamable: { '#text': '0', fulltrack: '0' },
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
        },
      ],
      albumSumary:
        "Whatever People Say I Am, That's What I'm Not is the debut album by Sheffield band Arctic Monkeys, released on 23 January 2006. The album became the fastest selling debut album in the UK since Definitely Maybe by Oasis. The album sold over 360,000 copies in its first week, but lost the title in November 2007 to Leona Lewis's album Spirit. It has since gone quadruple platinum in the UK, and won the 2006 Mercury Prize.\n\nThe album includes both tracks from the band's original EP <a href=\"http://www.last.fm/music/Arctic+Monkeys/Whatever+People+Say+I+Am,+That%27s+What+I%27m+Not\">Read more on Last.fm</a>.",
      albumContent:
        'Whatever People Say I Am, That\'s What I\'m Not is the debut album by Sheffield band Arctic Monkeys, released on 23 January 2006. The album became the fastest selling debut album in the UK since Definitely Maybe by Oasis. The album sold over 360,000 copies in its first week, but lost the title in November 2007 to Leona Lewis\'s album Spirit. It has since gone quadruple platinum in the UK, and won the 2006 Mercury Prize.\n\nThe album includes both tracks from the band\'s original EP, Five Minutes with Arctic Monkeys, as well as their first two singles and UK Number Ones, "I Bet You Look Good on the Dancefloor" and "When the Sun Goes Down." <a href="http://www.last.fm/music/Arctic+Monkeys/Whatever+People+Say+I+Am,+That%27s+What+I%27m+Not">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
    });
  });
});
