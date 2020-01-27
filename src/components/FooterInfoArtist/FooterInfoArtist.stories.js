import React from 'react';
import { FooterInfoArtist } from '..';

export default {
  title: 'FooterInfoArtist',
  component: FooterInfoArtist,
};

export const Default = () => (
  <div style={{ width: '300px' }}>
    <FooterInfoArtist numListeners="199878" urlLastFm="https://www.last.fm/pt/music/Arctic+Monkeys">
      Login
    </FooterInfoArtist>
  </div>
);
