import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../utils/colors';

const useStyles = makeStyles(theme => ({
  mainDiv: {
    marginTop: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    margin: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '300px',
  },
  button: {
    marginTop: theme.spacing(4),
  },
  tags: {
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  artistInfoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '25px',
    margin: '25px',
  },
  similars: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderTop: `1px solid ${colors.primary}`,
    borderBottom: `1px solid ${colors.primary}`,
    padding: theme.spacing(2),
  },
  footerInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'space-around',
    width: '100%',
  },
  albums: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderTop: `1px solid ${colors.primary}`,
    padding: theme.spacing(2),
  },
  albumsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  artistTitle: {
    color: colors.secondary,
    fontSize: '18px',
    cursor: 'pointer',
  },
}));

export default useStyles;
