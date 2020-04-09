import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: theme.spacing(5),
    textAlign: 'flex-start',
    borderRadius: '30px',
    height: '50rem',
  },
  headingText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  secondaryText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
  expense: {},
  categories: {},
  transactions: {},
}));
