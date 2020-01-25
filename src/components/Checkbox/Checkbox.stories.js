import React from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '..';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const NotChecked = () => <Checkbox onClick={action('You clicked')} checked={false} />;

export const Checked = () => <Checkbox onClick={action('You clicked')} checked />;
