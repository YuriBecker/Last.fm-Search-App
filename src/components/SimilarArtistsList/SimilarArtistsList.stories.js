import React from 'react';
import { action } from '@storybook/addon-actions';
import { SimilarArtistsList } from '..';
import artistsListExample from '../../utils/tests/mocks/artistsListExample';

export default {
  title: 'SimilarArtistsList',
  component: SimilarArtistsList,
};

export const Default = () => (
  <SimilarArtistsList artists={artistsListExample} onArtistClick={action('You clicked')} />
);
