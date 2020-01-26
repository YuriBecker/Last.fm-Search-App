/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';

const AlbumsList = ({ albums, onClickAlbum }) => {
  return albums.map(
    album =>
      // Verify to avoid albums without image
      album.image[1]['#text'] && (
        <Tooltip key={album.name} title={album.name}>
          <img
            src={album.image[1]['#text']}
            alt={album.name}
            width={80}
            height={80}
            style={{ margin: '3px', cursor: 'pointer' }}
            onClick={() => onClickAlbum(album.artist.name, album.name)}
          />
        </Tooltip>
      ),
  );
};

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.array.isRequired,
      artist: PropTypes.object.isRequired,
    }),
  ).isRequired,
  onClickAlbum: PropTypes.func.isRequired,
};

export default AlbumsList;
