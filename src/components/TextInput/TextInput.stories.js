import React from 'react';
import { TextInput } from '..';

export default {
  title: 'TextInput',
  component: TextInput,
};

export const Default = () => <TextInput label="Type some text" />;
export const Required = () => <TextInput required label="Required text" />;
export const FullWidth = () => <TextInput label="Type some long text" fullWidth />;
export const Desabled = () => <TextInput disabled label="Type some text" />;
