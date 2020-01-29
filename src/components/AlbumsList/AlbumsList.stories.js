/* eslint-disable max-len */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { AlbumsList } from '..';

export default {
  title: 'AlbumsList',
  component: AlbumsList,
};

const exampleAlbums = [
  {
    name: "Whatever People Say I Am, That's What I'm Not",
    artist: 'Arctic Monkeys',
    url:
      'https://www.last.fm/music/Arctic+Monkeys/Whatever+People+Say+I+Am,+That%27s+What+I%27m+Not',
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
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/053829a0cd6d4d5d95070b1542cb3f96.png',
        size: 'extralarge',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/053829a0cd6d4d5d95070b1542cb3f96.png',
        size: 'mega',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/053829a0cd6d4d5d95070b1542cb3f96.png',
        size: '',
      },
    ],
  },
  {
    name: 'Is This It',
    artist: 'The Strokes',
    url: 'https://www.last.fm/music/The+Strokes/Is+This+It',
    image: [
      {
        '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/29c98431ed68a10f110cf47c89f174b3.png',
        size: 'small',
      },
      {
        '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/29c98431ed68a10f110cf47c89f174b3.png',
        size: 'medium',
      },
      {
        '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/29c98431ed68a10f110cf47c89f174b3.png',
        size: 'large',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/29c98431ed68a10f110cf47c89f174b3.png',
        size: 'extralarge',
      },
    ],
  },
  {
    name: "Michael Jackson's This Is It",
    artist: 'Michael Jackson',
    url: 'https://www.last.fm/music/Michael+Jackson/Michael+Jackson%27s+This+Is+It',
    image: [
      {
        '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/b1bf13ec616843f98e55e00ee443d68b.png',
        size: 'small',
      },
      {
        '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/b1bf13ec616843f98e55e00ee443d68b.png',
        size: 'medium',
      },
      {
        '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/b1bf13ec616843f98e55e00ee443d68b.png',
        size: 'large',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/b1bf13ec616843f98e55e00ee443d68b.png',
        size: 'extralarge',
      },
    ],
    streamable: '0',
    mbid: '',
  },
  {
    name: 'This Is Where It Ends',
    artist: 'All Shall Perish',
    url: 'https://www.last.fm/music/All+Shall+Perish/This+Is+Where+It+Ends',
    image: [
      {
        '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/00616fdd34994a12a6dc2a917eb4d02c.png',
        size: 'small',
      },
      {
        '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/00616fdd34994a12a6dc2a917eb4d02c.png',
        size: 'medium',
      },
      {
        '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/00616fdd34994a12a6dc2a917eb4d02c.png',
        size: 'large',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/00616fdd34994a12a6dc2a917eb4d02c.png',
        size: 'extralarge',
      },
    ],
    streamable: '0',
    mbid: '25d38669-25ce-4f15-84ee-2cdb3228e366',
  },
];

export const Default = () => (
  <AlbumsList albums={exampleAlbums} onClickAlbum={action('You clicked')} />
);
