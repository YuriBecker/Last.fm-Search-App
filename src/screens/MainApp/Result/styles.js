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
    // padding: theme.spacing(2),
    margin: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // border: '2px solid red',
    minHeight: '300px',
  },
  button: {
    marginTop: theme.spacing(4),
  },
  tags: {
    marginTop: theme.spacing(3),
    display: 'flex',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tag: {
    margin: theme.spacing(1),
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
}));

export default useStyles;
