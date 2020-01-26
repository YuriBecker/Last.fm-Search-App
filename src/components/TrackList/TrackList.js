import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import formatMusicTime from '../../utils/functions/formatMusicTime';

const TrackList = ({ tracks }) => {
  return tracks.map(track => (
    <Tag
      key={track.name}
      label={`${formatMusicTime(track.duration)} - ${track.name}`}
      style={{ margin: '8px' }}
      variant="outlined"
      component="a"
      href={track.url}
      target="_blank"
      clickable
      size="small"
    />
  ));
};

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
};

export default TrackList;
