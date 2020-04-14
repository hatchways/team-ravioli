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
    height: '40rem',
    overflowY: 'auto',
    [theme.breakpoints.down('sm')]: {
      overflowX: 'auto',
    },
  },
  headingText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  secondaryText: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    display: 'inline-block',
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
  expenseTotal: {
    display: 'inline-block',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  DropdownMargin: {
    backgroundColor: '#f0f2fa',
  },
  table: {
    minWidth: 600,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  },
  tableCell: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  disabled: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: theme.palette.text.disabled,
  },
  loading: {
    marginLeft: '45%',
    marginTop: '10%',
  },
  noMatch: {
    fontWeight: 'bold',
    color: theme.palette.text.disabled,
    margin: theme.spacing(4),
  },
}));
