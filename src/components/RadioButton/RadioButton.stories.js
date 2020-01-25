import React from 'react';
import { action } from '@storybook/addon-actions';
import { RadioButton } from '..';

export default {
  title: 'RadioButton',
  component: RadioButton,
};

export const Basic = () => <RadioButton onClick={action('You clicked')} />;
