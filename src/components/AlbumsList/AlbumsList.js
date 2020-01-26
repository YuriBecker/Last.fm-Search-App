/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';

const AlbumsList = ({ albums, onClickAlbum }) => {
  return albums.map(album => (
    <Tooltip key={album.name} title={album.name}>
      <img
        src={album.image[1]['#text']}
        alt={album.name}
        width={80}
        height={80}
        style={{ margin: '3px', cursor: 'pointer' }}
        onClick={() => onClickAlbum(album.mbid)}
      />
    </Tooltip>
  ));
};

AlbumsList.propTypes = {
  albums: PropTypes.array.isRequired,
  onClickAlbum: PropTypes.func.isRequired,
};

export default AlbumsList;
