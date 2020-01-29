import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';

const SimilarArtistsList = ({ artists, onArtistClick }) => {
  return artists.map(artist => (
    <Tag
      key={artist.name}
      label={artist.name}
      style={{ margin: '8px' }}
      variant="outlined"
      clickable
      size="small"
      onClick={() => onArtistClick(artist.name)}
    />
  ));
};

SimilarArtistsList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onArtistClick: PropTypes.func.isRequired,
};

export default SimilarArtistsList;
