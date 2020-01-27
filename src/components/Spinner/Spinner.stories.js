import React from 'react';
import { Spinner } from '..';

export default {
  title: 'Spinner',
  component: Spinner,
};

export const Default = () => <Spinner />;
export const CustomSize = () => <Spinner size={100} />;
