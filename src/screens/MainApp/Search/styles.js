import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainDiv: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    height: '300px',
  },
  button: {
    marginTop: theme.spacing(4),
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '25px',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  historyContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default useStyles;
