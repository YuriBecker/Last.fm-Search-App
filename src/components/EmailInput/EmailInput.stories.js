import React from 'react';
import { EmailInput } from '..';

export default {
  title: 'EmailInput',
  component: EmailInput,
};

export const Default = () => <EmailInput />;
export const Required = () => <EmailInput required />;
export const FullWidth = () => <EmailInput fullWidth />;
export const Desabled = () => <EmailInput disabled />;
