import { makeStyles } from '@material-ui/core';
import colors from '../../utils/colors';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: colors.primary,
    color: 'white',
    '&:hover': {
      backgroundColor: colors.secondary,
    },
  },
}));

export default useStyles;
