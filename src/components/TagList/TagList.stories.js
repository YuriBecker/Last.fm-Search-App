import React from 'react';
import { TagList } from '..';
import tagsListExample from '../../utils/tests/mocks/tagsListExample';

export default {
  title: 'TagList',
  component: TagList,
};

export const Default = () => <TagList tags={tagsListExample} />;
