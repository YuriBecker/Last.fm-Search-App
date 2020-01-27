import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/lastfm_logo.png';

const Logo = ({ width, height, onImageClick }) => {
  return (
    <input
      type="image"
      src={logo}
      alt="LastFm Logo"
      width={width}
      height={height}
      onClick={onImageClick}
      disabled={!onImageClick}
    />
  );
};

export default Logo;

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onImageClick: PropTypes.func,
};

Logo.defaultProps = {
  width: 300,
  height: 150,
  onImageClick: null,
};
