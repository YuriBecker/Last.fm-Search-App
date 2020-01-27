import React from 'react';
import { TagList } from '..';

export default {
  title: 'TagList',
  component: TagList,
};

const exampleTags = [
  { name: 'Pop', url: 'https://www.last.fm/pt/music/Arctic+Monkeys' },
  { name: 'Rock', url: 'https://www.last.fm/pt/music/Arctic+Monkeys' },
  { name: 'Funk', url: 'https://www.last.fm/pt/music/Arctic+Monkeys' },
  { name: 'Old Style', url: 'https://www.last.fm/pt/music/Arctic+Monkeys' },
];

export const Default = () => <TagList tags={exampleTags} />;
