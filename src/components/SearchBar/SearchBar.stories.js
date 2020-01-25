import React from 'react';
import { action } from '@storybook/addon-actions';
import { SearchBar } from '..';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

export const Default = () => <SearchBar value="" onChange={action('You are typing')} />;
export const CustomPlaceholder = () => (
  <SearchBar placeholder="Custom placeholder" value="" onChange={action('You are typing')} />
);
