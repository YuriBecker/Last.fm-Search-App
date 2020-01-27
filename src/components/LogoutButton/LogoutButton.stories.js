import React from 'react';
import { action } from '@storybook/addon-actions';
import { LogoutButton } from '..';

export default {
  title: 'LogoutButton',
  component: LogoutButton,
};

export const Default = () => (
  <div style={{ width: '100%', height: '100vh' }}>
    <LogoutButton onClick={action('You logout')} />
  </div>
);
