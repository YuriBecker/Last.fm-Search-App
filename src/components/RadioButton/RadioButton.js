import React from 'react';
import { Radio, withStyles } from '@material-ui/core';
import colors from '../../utils/colors';

const StyledRadio = withStyles({
  root: {
    '&$checked': {
      color: colors.primary,
    },
  },
  checked: {},
})(props => <Radio {...props} />);

export default StyledRadio;
