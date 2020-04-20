import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  reportPaper: {
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
  dropdownMargin: {
    backgroundColor: '#f0f2fa',
  },
  emailBtn: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    margin: theme.spacing(2, 3),
    padding: theme.spacing(1, 3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6rem',
      margin: theme.spacing(0, 1),
      padding: theme.spacing(1, 3),
    },
  },
  emailHiddenBtn: {
    visibility: 'hidden',
  },
  table: {
    minWidth: 300,
  },
  categoryIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: '#000000',
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
