import React from 'react';
import { UnderlinedTitle } from '..';

export default {
  title: 'UnderlinedTitle',
  component: UnderlinedTitle,
};

export const Default = () => (
  <div style={{ float: 'left' }}>
    <UnderlinedTitle>Some Title Underlined</UnderlinedTitle>
  </div>
);
