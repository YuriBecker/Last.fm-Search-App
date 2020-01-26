/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import { actions as searchAlbumActions } from '../../store/Ducks/searchAlbum';

const AlbumsList = ({ albums }) => {
  const dispatch = useDispatch();
  return albums.map(album => (
    <Tooltip
      key={album.name}
      title={album.name}
      onClick={() => dispatch(searchAlbumActions.searchAlbum(album.name))}
    >
      <img
        src={album.image[1]['#text']}
        alt={album.name}
        width={80}
        height={80}
        style={{ margin: '3px', cursor: 'pointer' }}
        onClick={() => dispatch(searchAlbumActions.searchAlbum(album.name))}
      />
    </Tooltip>
  ));
};

AlbumsList.propTypes = {
  albums: PropTypes.array.isRequired,
};

export default AlbumsList;
