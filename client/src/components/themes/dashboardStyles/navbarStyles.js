import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#ffffff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '1.1rem',
    fontWeight: 'bold',
    visibility: 'hidden',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },
  img: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(2),
    visibility: 'hidden',
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      margin: theme.spacing(0, 1, 0, 0),
      display: 'none',
    },
  },
  uploadBtn: {
    margin: theme.spacing(0, 3),
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
  input: {
    display: 'none',
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  profile: {
    color: theme.palette.primary.dark,
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuItem: {
    fontSize: '1.1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
}));
