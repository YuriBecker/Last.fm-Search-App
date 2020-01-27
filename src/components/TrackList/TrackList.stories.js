import React from 'react';
import { TrackList } from '..';

export default {
  title: 'TrackList',
  component: TrackList,
};

const exampleTracks = [
  {
    name: 'One For The Road',
    duration: '217',
    url: 'https://www.last.fm/pt/music/Arctic+Monkeys/One+for+the+Road',
  },
  {
    name: 'R U Mine?',
    duration: '317',
    url: 'https://www.last.fm/pt/music/Arctic+Monkeys/_/R+U+Mine%3F',
  },
  {
    name: 'Do I Wanna Know?',
    duration: '187',
    url: 'https://www.last.fm/pt/music/Arctic+Monkeys/_/Do+I+Wanna+Know%3F',
  },
];

export const Default = () => <TrackList tracks={exampleTracks} />;
