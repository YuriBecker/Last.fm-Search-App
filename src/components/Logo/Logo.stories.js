import React from 'react';
import { action } from '@storybook/addon-actions';
import { Logo } from '..';

export default {
  title: 'Logo',
  component: Logo,
};

export const Default = () => <Logo />;
export const WithOnClick = () => <Logo onImageClick={action('You clicked')} />;
export const CustomSize = () => <Logo width={600} height={300} />;
