import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';

const NewLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      style={{
        color: colors.secondary,
      }}
    >
      {children}
    </Link>
  );
};

export default NewLink;

NewLink.propTypes = {
  children: PropTypes.node.isRequired,
};
