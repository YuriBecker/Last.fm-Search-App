/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';
import extractAlbumInfo from '../../utils/functions/extractAlbumInfo';

const AlbumsList = ({ albums, onClickAlbum }) => {
  return albums.map(album => {
    const { albumSmallCoverLink, albumName } = extractAlbumInfo(album);
    // Verify to avoid albums without image
    return (
      albumSmallCoverLink && (
        <Tooltip key={albumName} title={albumName}>
          <img
            src={albumSmallCoverLink}
            alt={albumName}
            width={80}
            height={80}
            style={{ margin: '3px', cursor: 'pointer' }}
            onClick={() => onClickAlbum(album.artist.name, albumName)}
          />
        </Tooltip>
      )
    );
  });
};

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.array.isRequired,
      artist: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClickAlbum: PropTypes.func.isRequired,
};

export default AlbumsList;
