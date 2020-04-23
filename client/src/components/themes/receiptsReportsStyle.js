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
  subText: {
    color: theme.palette.primary.dark,
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
  imgOverlay: {
    content: '""',
    position: 'absolute',
    width: '13rem',
    height: '14rem',
    borderRadius: '7px',
    backgroundColor: theme.palette.primary.dark,
    opacity: '0',
    zIndex: '2',
    '&:hover': {
      opacity: '0.5',
      cursor: 'zoom-in',
    },
  },
  receiptImg: {
    width: '13rem',
    height: '14rem',
    borderRadius: '7px',
    [theme.breakpoints.down('xs')]: {
      width: '10rem',
      height: '11rem',
    },
  },
  receiptImgZoom: {
    width: '39rem',
    height: '42rem',
    borderRadius: '7px',
    cursor: 'zoom-out',
    [theme.breakpoints.down('xs')]: {
      width: '20rem',
      height: '22rem',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#ffffff',
  },
  defaultImg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '13rem',
    height: '14rem',
    borderRadius: '7px',
    backgroundColor: '#a9a9a9',
    marginBottom: '7px',
    [theme.breakpoints.down('xs')]: {
      width: '10rem',
      height: '11rem',
    },
  },
  defaultIcon: {
    width: '5rem',
    height: '8rem',
  },
  deleteBtn: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main,
    margin: theme.spacing(2, 3),
    padding: theme.spacing(1, 3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6rem',
      margin: theme.spacing(0, 1),
      padding: theme.spacing(1, 3),
    },
  },
  deleteIcon: {
    '&:hover': {
      color: theme.palette.error.main,
      cursor: 'pointer',
    },
  },
  receiptDate: {
    padding: theme.spacing(0, 2, 2),
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
