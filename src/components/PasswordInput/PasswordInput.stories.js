import React from 'react';
import { PasswordInput } from '..';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
};

export const Default = () => <PasswordInput />;
export const Required = () => <PasswordInput required />;
export const FullWidth = () => <PasswordInput fullWidth />;
export const Desabled = () => <PasswordInput disabled />;
