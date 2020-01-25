import { withStyles, CircularProgress } from '@material-ui/core';
import colors from '../../utils/colors';

const Spinner = withStyles({
  root: {
    color: colors.primary,
  },
})(CircularProgress);

export default Spinner;
