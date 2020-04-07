import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  dialog: {
    padding: '3rem',
  },
  dropFilePaper: {
    backgroundColor: '#fafbff',
    textAlign: 'center',
  },
  dialogMainTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.palette.primary.dark,
  },
  dropZone: {
    border: '5px solid red',
    backgroundColor: 'none',
  },
  dialogActionBtn: {
    margin: theme.spacing(2, 3),
    padding: theme.spacing(2, 5),
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
      margin: theme.spacing(0, 1),
      padding: theme.spacing(1, 3),
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  receiptDropdown: {
    margin: theme.spacing(2, 0),
    backgroundColor: '#f0f2fa',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
  },
  receiptInput: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
  },
  uploadImgBtn: {
    margin: theme.spacing(2, 3),
    padding: theme.spacing(2, 5),
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',

    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6rem',
      margin: theme.spacing(0, 1),
      padding: theme.spacing(1, 3),
    },
  },
  dialogAction: {
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  receiptInfo: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
}));
