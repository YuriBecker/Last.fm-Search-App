/* eslint-disable max-len */
import extractArtistInfo from './extractArtistInfo';

const artistExample = {
  name: 'Arctic Monkeys',
  mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
  url: 'https://www.last.fm/music/Arctic+Monkeys',
  image: [
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'small',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'medium',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'large',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'extralarge',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'mega',
    },
    {
      '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: '',
    },
  ],
  streamable: '0',
  ontour: '0',
  stats: { listeners: '3597961', playcount: '346294308' },
  similar: {
    artist: [
      {
        name: 'The Last Shadow Puppets',
        url: 'https://www.last.fm/music/The+Last+Shadow+Puppets',
        image: [
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'small',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'medium',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'large',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'extralarge',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'mega',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: '',
          },
        ],
      },
      {
        name: 'Alex Turner',
        url: 'https://www.last.fm/music/Alex+Turner',
        image: [
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'small',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'medium',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'large',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'extralarge',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'mega',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: '',
          },
        ],
      },
      {
        name: 'Miles Kane',
        url: 'https://www.last.fm/music/Miles+Kane',
        image: [
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'small',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'medium',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'large',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'extralarge',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'mega',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: '',
          },
        ],
      },
      {
        name: 'The Strokes',
        url: 'https://www.last.fm/music/The+Strokes',
        image: [
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'small',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'medium',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'large',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'extralarge',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'mega',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: '',
          },
        ],
      },
      {
        name: 'Cage the Elephant',
        url: 'https://www.last.fm/music/Cage+the+Elephant',
        image: [
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'small',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'medium',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'large',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'extralarge',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'mega',
          },
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: '',
          },
        ],
      },
    ],
  },
  tags: {
    tag: [
      { name: 'indie rock', url: 'https://www.last.fm/tag/indie+rock' },
      { name: 'indie', url: 'https://www.last.fm/tag/indie' },
      { name: 'british', url: 'https://www.last.fm/tag/british' },
      { name: 'rock', url: 'https://www.last.fm/tag/rock' },
      { name: 'alternative', url: 'https://www.last.fm/tag/alternative' },
    ],
  },
  bio: {
    links: {
      link: { '#text': '', rel: 'original', href: 'https://last.fm/music/Arctic+Monkeys/+wiki' },
    },
    published: '02 Feb 2006, 23:46',
    summary:
      '\nArctic Monkeys are an indie rock band formed in Sheffield, South Yorkshire, England in 2002 after meeting at Stocksbridge High School. The band consists of Alex Turner (vocals, guitar), Jamie Cook (guitar), Nick O\'Malley (backing vocals, bass) and Matt Helders (drums, vocals). Founding bassist Andy Nicholson left in 2006.\n\nThe band has released six studio albums: "Whatever People Say I Am, That\'s What I\'m Not" (2006), "Favourite Worst Nightmare" (2007) <a href="https://www.last.fm/music/Arctic+Monkeys">Read more on Last.fm</a>',
    content:
      '\nArctic Monkeys are an indie rock band formed in Sheffield, South Yorkshire, England in 2002 after meeting at Stocksbridge High School. The band consists of Alex Turner (vocals, guitar), Jamie Cook (guitar), Nick O\'Malley (backing vocals, bass) and Matt Helders (drums, vocals). Founding bassist Andy Nicholson left in 2006.\n\nThe band has released six studio albums: "Whatever People Say I Am, That\'s What I\'m Not" (2006), "Favourite Worst Nightmare" (2007), "Humbug" (2009), "Suck It and See" (2011), "AM" (2013) and "Tranquility Base Hotel & Casino" (2018) all of which debuted at #1 on the UK Albums Chart. \n\nEach of the band\'s first five singles I Bet You Look Good On the Dancefloor, When the Sun Goes Down, Leave Before The Lights Come On, Brianstorm and Fluorescent Adolescent hit the UK Top Five, but their sixth single, Teddy Picker, only went Top 20 and their seventh single, Crying Lightning peaked at #12.\n\nThe band\'s rise to success started in late 2004/early 2005 when demo songs which had been handed out in CD form at gigs found their way onto the internet. These demos rapidly spread among message boards and friends leading to a growing fan base for the band, and were collected on the unofficial Beneath the Boardwalk, which the band recognizes on their website.  The band owe much of their success to viral buzz via the Internet, and have eschewed typical \'commercial\' channels, including refusing to appear on the UK\'s (now discontinued) Top Of The Pops music program, which was often seen as a gateway to success.\n\nThe band\'s debut album, Whatever People Say I Am, That\'s What I\'m Not, held the record for the largest first week sales of a debut album in the UK (in its first week, it sold more than the rest of the Top 20 albums combined). The album sold over 360,000 copies in its first week, but lost the title in November 2007 to Leona Lewis\'s album Spirit.\n\nOn 19th June 2006 the band officially announced that founding member Andy Nicholson had left the band after missing the American leg of their tour due to \'fatigue\' and the other band members couldn\'t stand the constant \'missing his girlfriend syndrome\' so told him to sling his hook. Former Dodgems bassist,  Nick O\'Malley was initially brought in as a stand-in, and played the band\'s remaining summer commitments. He was then announced as Nicholson\'s permanent replacement. \n\nThe single Leave Before The Lights Come On came out on August 14th, but only reached Number 4 on the UK charts, denying the band a third consecutive number 1 single.\n\nTheir debut album "Whatever People Say I Am, That\'s What I\'m Not" won the 2006 Mercury Prize, was chosen as the best album of year 2006 by Q Magazine, and received a slew of other accolades.\n\nTheir second album Favourite Worst Nightmare was released on April 23rd 2007. It was preceded by "Brianstorm", the first single from the album, which was released a week before. Like its predecessor, "Favourite Worst Nightmare" sold more than the rest of the Top 20 combined, and - due to an error on iTunes - every song on the record appeared on the UK Top 200 Singles the next week.\n\nWhen asked about Favourite Worst Nightmare Alex Turner commented, "We haven\'t changed that much. It\'s still about making contact with girls or not making contact with girls".\n\nThe band began to write and record demos for the third album in January 2008, Turner said "We had tunes that we\'d already been playing on tour so we recorded them. That’s six [songs]. We’re going to take it easy and start practicing over the summer and doing new stuff."\n\nThe band premiered new material from the unreleased album during their January 2009 tour of New Zealand, playing small venues in Wellington and Auckland ahead of the Big Day Out festival. Their first show in more than a year was on January 13, 2009 at Wellington\'s Town Hall. In both cities, the new songs played were "Crying Lightning", "Go-Kart", "Dangerous Animals" and "Pretty Visitors." The full set list from the Auckland gig is available online. Also played was a cover of the Nick Cave song "Red Right Hand." During their last tour, the band had played new songs "Put Me In A Terror Pocket", "Sandtrap," and "The Fire and The Thud" live.\n\nLead singer/songwriter Alex Turner started a two-man project with the singer from the Rascals, Miles Kane.\nThe band is called \'The Last Shadow Puppets\'\n\nThe Arctic Monkeys band released their album Humbug in August of 2009, preceded by the single "Crying Lightning"\n\nThey released their fourth studio album, Suck It And See, on June 6th, 2011.\n\nThey released their fifth studio album, AM, on March 13th, 2013.\n\nThey released their sixth studio album, Tranquility Base Hotel & Casino, with no preceding single releases, on May 11th, 2018.\n\nhttp://www.arcticmonkeys.com/\n\n\n\n <a href="https://www.last.fm/music/Arctic+Monkeys">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.',
  },
  albums: {
    topalbums: {
      album: [
        {
          name: "Whatever People Say I Am, That's What I'm Not",
          playcount: 69982630,
          url:
            'https://www.last.fm/music/Arctic+Monkeys/Whatever+People+Say+I+Am,+That%27s+What+I%27m+Not',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/053829a0cd6d4d5d95070b1542cb3f96.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/053829a0cd6d4d5d95070b1542cb3f96.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/053829a0cd6d4d5d95070b1542cb3f96.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/053829a0cd6d4d5d95070b1542cb3f96.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Favourite Worst Nightmare',
          playcount: 66217585,
          mbid: '3c7c6c47-aba4-3d96-a5a3-1aa355aed522',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Favourite+Worst+Nightmare',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/705f6109de0143da8050188598fd4781.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/705f6109de0143da8050188598fd4781.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/705f6109de0143da8050188598fd4781.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/705f6109de0143da8050188598fd4781.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'AM',
          playcount: 57387830,
          mbid: 'bf584cf2-dc33-433e-b8b2-b85578822726',
          url: 'https://www.last.fm/music/Arctic+Monkeys/AM',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/f579e414e20f40969185e41182d72472.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/f579e414e20f40969185e41182d72472.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/f579e414e20f40969185e41182d72472.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/f579e414e20f40969185e41182d72472.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Humbug',
          playcount: 30751146,
          mbid: '0b1b5da2-82ca-3593-8271-f1236a732613',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Humbug',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/70163676ea2e4c44959c3af0f71b30d8.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/70163676ea2e4c44959c3af0f71b30d8.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/70163676ea2e4c44959c3af0f71b30d8.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/70163676ea2e4c44959c3af0f71b30d8.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Suck It and See',
          playcount: 26411840,
          mbid: '45d2743d-1631-4514-915c-d242c8d81687',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Suck+It+and+See',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/e8faaf58a491491ea00e6d3b7ac5d7db.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/e8faaf58a491491ea00e6d3b7ac5d7db.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/e8faaf58a491491ea00e6d3b7ac5d7db.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/e8faaf58a491491ea00e6d3b7ac5d7db.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Beneath the Boardwalk',
          playcount: 6356605,
          mbid: '03db39e8-5a42-450d-9c85-d5ee35844c3c',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Beneath+the+Boardwalk',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/cd6735f849c5455c8435f5be13298083.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/cd6735f849c5455c8435f5be13298083.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/cd6735f849c5455c8435f5be13298083.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/cd6735f849c5455c8435f5be13298083.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Leave Before the Lights Come On',
          playcount: 3214005,
          mbid: '7c7e56a7-37e8-361e-b1e0-676af3fd677f',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Leave+Before+the+Lights+Come+On',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/381c036d612c4889a4dc112983de663d.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/381c036d612c4889a4dc112983de663d.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/381c036d612c4889a4dc112983de663d.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/381c036d612c4889a4dc112983de663d.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Fluorescent Adolescent',
          playcount: 2893801,
          mbid: '314b8b7b-69b9-4fdb-9d69-79d72d297e50',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Fluorescent+Adolescent',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/5d0f664b35a64046c089a8dc6281861b.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/5d0f664b35a64046c089a8dc6281861b.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/5d0f664b35a64046c089a8dc6281861b.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/5d0f664b35a64046c089a8dc6281861b.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'When the Sun Goes Down',
          playcount: 2273727,
          mbid: 'a77b6e38-e399-4023-b43c-5409c3e38bf9',
          url: 'https://www.last.fm/music/Arctic+Monkeys/When+the+Sun+Goes+Down',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/b3c6c52d3df848ae8889fd10f0646a0a.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/b3c6c52d3df848ae8889fd10f0646a0a.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/b3c6c52d3df848ae8889fd10f0646a0a.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/b3c6c52d3df848ae8889fd10f0646a0a.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Do I Wanna Know?',
          playcount: 1633420,
          mbid: 'cab788d3-7e52-49d5-a4d8-7caaa1acbf48',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Do+I+Wanna+Know%3F',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/12edf61e195044b499f316bf1b54c819.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/12edf61e195044b499f316bf1b54c819.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/12edf61e195044b499f316bf1b54c819.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/12edf61e195044b499f316bf1b54c819.png',
              size: 'extralarge',
            },
          ],
        },
      ],
      '@attr': {
        artist: 'Arctic Monkeys',
        page: '1',
        perPage: '10',
        totalPages: '6475',
        total: '64743',
      },
    },
  },
};

describe('extractAlbumInfo util function', () => {
  test('it should return the correct info obj', () => {
    expect(extractArtistInfo(artistExample)).toMatchObject({
      artistName: 'Arctic Monkeys',
      artistRelatedTags: [
        { name: 'indie rock', url: 'https://www.last.fm/tag/indie+rock' },
        { name: 'indie', url: 'https://www.last.fm/tag/indie' },
        { name: 'british', url: 'https://www.last.fm/tag/british' },
        { name: 'rock', url: 'https://www.last.fm/tag/rock' },
        { name: 'alternative', url: 'https://www.last.fm/tag/alternative' },
      ],
      artistSummary:
        '\nArctic Monkeys are an indie rock band formed in Sheffield, South Yorkshire, England in 2002 after meeting at Stocksbridge High School. The band consists of Alex Turner (vocals, guitar), Jamie Cook (guitar), Nick O\'Malley (backing vocals, bass) and Matt Helders (drums, vocals). Founding bassist Andy Nicholson left in 2006.\n\nThe band has released six studio albums: "Whatever People Say I Am, That\'s What I\'m Not" (2006), "Favourite Worst Nightmare" (2007) <a href="https://www.last.fm/music/Arctic+Monkeys">Read more on Last.fm</a>',
      artistNumListeners: '3597961',
      artistTopAlbums: [
        {
          name: "Whatever People Say I Am, That's What I'm Not",
          playcount: 69982630,
          url:
            'https://www.last.fm/music/Arctic+Monkeys/Whatever+People+Say+I+Am,+That%27s+What+I%27m+Not',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/053829a0cd6d4d5d95070b1542cb3f96.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/053829a0cd6d4d5d95070b1542cb3f96.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/053829a0cd6d4d5d95070b1542cb3f96.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/053829a0cd6d4d5d95070b1542cb3f96.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Favourite Worst Nightmare',
          playcount: 66217585,
          mbid: '3c7c6c47-aba4-3d96-a5a3-1aa355aed522',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Favourite+Worst+Nightmare',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/705f6109de0143da8050188598fd4781.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/705f6109de0143da8050188598fd4781.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/705f6109de0143da8050188598fd4781.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/705f6109de0143da8050188598fd4781.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'AM',
          playcount: 57387830,
          mbid: 'bf584cf2-dc33-433e-b8b2-b85578822726',
          url: 'https://www.last.fm/music/Arctic+Monkeys/AM',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/f579e414e20f40969185e41182d72472.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/f579e414e20f40969185e41182d72472.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/f579e414e20f40969185e41182d72472.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/f579e414e20f40969185e41182d72472.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Humbug',
          playcount: 30751146,
          mbid: '0b1b5da2-82ca-3593-8271-f1236a732613',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Humbug',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/70163676ea2e4c44959c3af0f71b30d8.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/70163676ea2e4c44959c3af0f71b30d8.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/70163676ea2e4c44959c3af0f71b30d8.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/70163676ea2e4c44959c3af0f71b30d8.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Suck It and See',
          playcount: 26411840,
          mbid: '45d2743d-1631-4514-915c-d242c8d81687',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Suck+It+and+See',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/e8faaf58a491491ea00e6d3b7ac5d7db.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/e8faaf58a491491ea00e6d3b7ac5d7db.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/e8faaf58a491491ea00e6d3b7ac5d7db.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/e8faaf58a491491ea00e6d3b7ac5d7db.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Beneath the Boardwalk',
          playcount: 6356605,
          mbid: '03db39e8-5a42-450d-9c85-d5ee35844c3c',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Beneath+the+Boardwalk',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/cd6735f849c5455c8435f5be13298083.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/cd6735f849c5455c8435f5be13298083.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/cd6735f849c5455c8435f5be13298083.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/cd6735f849c5455c8435f5be13298083.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Leave Before the Lights Come On',
          playcount: 3214005,
          mbid: '7c7e56a7-37e8-361e-b1e0-676af3fd677f',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Leave+Before+the+Lights+Come+On',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/381c036d612c4889a4dc112983de663d.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/381c036d612c4889a4dc112983de663d.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/381c036d612c4889a4dc112983de663d.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/381c036d612c4889a4dc112983de663d.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Fluorescent Adolescent',
          playcount: 2893801,
          mbid: '314b8b7b-69b9-4fdb-9d69-79d72d297e50',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Fluorescent+Adolescent',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/5d0f664b35a64046c089a8dc6281861b.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/5d0f664b35a64046c089a8dc6281861b.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/5d0f664b35a64046c089a8dc6281861b.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/5d0f664b35a64046c089a8dc6281861b.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'When the Sun Goes Down',
          playcount: 2273727,
          mbid: 'a77b6e38-e399-4023-b43c-5409c3e38bf9',
          url: 'https://www.last.fm/music/Arctic+Monkeys/When+the+Sun+Goes+Down',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/b3c6c52d3df848ae8889fd10f0646a0a.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/b3c6c52d3df848ae8889fd10f0646a0a.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/b3c6c52d3df848ae8889fd10f0646a0a.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/b3c6c52d3df848ae8889fd10f0646a0a.png',
              size: 'extralarge',
            },
          ],
        },
        {
          name: 'Do I Wanna Know?',
          playcount: 1633420,
          mbid: 'cab788d3-7e52-49d5-a4d8-7caaa1acbf48',
          url: 'https://www.last.fm/music/Arctic+Monkeys/Do+I+Wanna+Know%3F',
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/12edf61e195044b499f316bf1b54c819.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/12edf61e195044b499f316bf1b54c819.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/12edf61e195044b499f316bf1b54c819.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/12edf61e195044b499f316bf1b54c819.png',
              size: 'extralarge',
            },
          ],
        },
      ],
      similarArtists: [
        {
          name: 'The Last Shadow Puppets',
          url: 'https://www.last.fm/music/The+Last+Shadow+Puppets',
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'mega',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: '',
            },
          ],
        },
        {
          name: 'Alex Turner',
          url: 'https://www.last.fm/music/Alex+Turner',
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'mega',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: '',
            },
          ],
        },
        {
          name: 'Miles Kane',
          url: 'https://www.last.fm/music/Miles+Kane',
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'mega',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: '',
            },
          ],
        },
        {
          name: 'The Strokes',
          url: 'https://www.last.fm/music/The+Strokes',
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'mega',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: '',
            },
          ],
        },
        {
          name: 'Cage the Elephant',
          url: 'https://www.last.fm/music/Cage+the+Elephant',
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'mega',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: '',
            },
          ],
        },
      ],
      artistUrl: 'https://www.last.fm/music/Arctic+Monkeys',
    });
  });
});
