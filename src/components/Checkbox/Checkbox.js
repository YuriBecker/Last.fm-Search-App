import React from 'react';
import { Checkbox, withStyles } from '@material-ui/core';
import colors from '../../utils/colors';

const StyledCheckbox = withStyles({
  root: {
    color: colors.grey[0],
    '&$checked': {
      color: colors.primary,
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default StyledCheckbox;
