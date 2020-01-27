import React from 'react';
import { action } from '@storybook/addon-actions';
import { Tag } from '..';

export default {
  title: 'Tag',
  component: Tag,
};

export const Basic = () => (
  <Tag onClick={action('You clicked')} label="Some tag item" variant="outlined" />
);

export const Small = () => (
  <Tag onClick={action('You clicked')} label="Some tag item" variant="outlined" size="small" />
);
