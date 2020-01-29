/* eslint-disable max-len */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { AlbumsList } from '..';
import albumsListExample from '../../utils/tests/mocks/albumsListExample';

export default {
  title: 'AlbumsList',
  component: AlbumsList,
};

export const Default = () => (
  <AlbumsList albums={albumsListExample} onClickAlbum={action('You clicked')} />
);
