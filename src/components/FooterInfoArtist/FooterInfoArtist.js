import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const FooterInfoArtist = ({ numListeners, urlLastFm }) => {
  const classes = useStyles();
  return (
    <div className={classes.footerInfo}>
      <Typography variant="caption" gutterBottom align="left" className={classes.item}>
        Listeners: <p className={classes.numListeners}>{numListeners}</p>
      </Typography>

      <Typography variant="caption" gutterBottom align="right" className={classes.item}>
        {'View on '}
        <a
          href={urlLastFm}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.lastFmLink}
        >
          Last.fm
        </a>
      </Typography>
    </div>
  );
};

FooterInfoArtist.propTypes = {
  numListeners: PropTypes.string.isRequired,
  urlLastFm: PropTypes.string.isRequired,
};

export default FooterInfoArtist;
