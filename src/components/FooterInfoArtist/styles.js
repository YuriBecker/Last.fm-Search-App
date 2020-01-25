import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles(() => ({
  footerInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'space-around',
    width: '100%',
  },
  lastFmLink: {
    textDecoration: 'none',
    color: colors.secondary,
  },
  numListeners: {
    color: colors.secondary,
    display: 'inline',
  },
  item: {
    fontWeight: 'bold',
    width: '100%',
  },
}));

export default useStyles;
