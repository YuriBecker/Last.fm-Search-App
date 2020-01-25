import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/lastfm_logo.png';

const Logo = ({ width, height }) => {
  return <img src={logo} alt="LastFm Logo" width={width} height={height} />;
};

export default Logo;

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Logo.defaultProps = {
  width: 300,
  height: 150,
};
