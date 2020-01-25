import React from 'react';
import { Logo } from '..';

export default {
  title: 'Logo',
  component: Logo,
};

export const Default = () => <Logo />;
export const CustomSize = () => <Logo width={700} height={300} />;
