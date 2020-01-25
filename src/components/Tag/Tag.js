import { withStyles, Chip } from '@material-ui/core';
import colors from '../../utils/colors';

const Tag = withStyles({
  root: {
    borderColor: colors.primary,
    borderWidth: '2px',
  },
})(Chip);

export default Tag;
