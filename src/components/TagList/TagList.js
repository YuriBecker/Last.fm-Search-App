import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';

const TagList = ({ tags }) => {
  return tags.map(tag => (
    <Tag
      key={tag.name}
      label={tag.name}
      style={{ margin: '8px' }}
      variant="outlined"
      component="a"
      href={tag.url}
      target="_blank"
      clickable
      size="small"
    />
  ));
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

export default TagList;
