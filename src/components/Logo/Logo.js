import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/lastfm_logo.png';

const Logo = ({ width, height, cursorPointer }) => {
  return (
    <img
      src={logo}
      alt="LastFm Logo"
      width={width}
      height={height}
      style={cursorPointer ? { cursor: 'pointer' } : {}}
    />
  );
};

export default Logo;

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  cursorPointer: PropTypes.bool,
};

Logo.defaultProps = {
  width: 300,
  height: 150,
  cursorPointer: false,
};
