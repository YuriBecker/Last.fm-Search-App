import React from 'react';
import { action } from '@storybook/addon-actions';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '..';

export default {
  title: 'Button',
  component: Button,
};

export const Basic = () => <Button onClick={action('You clicked')}>Login</Button>;

export const WithIcon = () => (
  <Button onClick={action('You clicked')} startIcon={<AddIcon />}>
    With Icon
  </Button>
);
