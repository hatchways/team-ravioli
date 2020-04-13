import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: theme.spacing(2),
    textAlign: 'flex-start',
    borderRadius: '30px',
    height: '22rem',
    color: theme.palette.secondary.main,
  },
  headingText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  secondaryText: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  DropdownMargin: {
    backgroundColor: '#f0f2fa',
  },
  receiptImg: {
    width: '13rem',
    height: '14rem',
    borderRadius: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '10rem',
      height: '11rem',
    },
  },
  receiptDate: {
    padding: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
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
