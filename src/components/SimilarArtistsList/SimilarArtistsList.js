import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Tag from '../Tag/Tag';
import { actions as searchArtistActions } from '../../store/Ducks/searchArtist';

const SimilarArtistsList = ({ artists }) => {
  const dispatch = useDispatch();
  return artists.map(artist => (
    <Tag
      key={artist.name}
      label={artist.name}
      style={{ margin: '8px' }}
      variant="outlined"
      clickable
      size="small"
      onClick={() => dispatch(searchArtistActions.searchArtist(artist.name))}
    />
  ));
};

SimilarArtistsList.propTypes = {
  artists: PropTypes.array.isRequired,
};

export default SimilarArtistsList;
