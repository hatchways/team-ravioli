import { makeStyles } from '@material-ui/core/styles';
import bgImg from '../assets/loginSignup.png';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
  image: {
    position: 'relative',
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    '&::before': {
      content: '""',
      position: 'absolute',
      backgroundColor: '#1b3460',
      height: '100vh',
      width: '100%',
      opacity: '0.6',
      zIndex: '1',
    },
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
      zIndex: '-1',
      '&::before': {
        height: '20vh',
      },
    },
  },
  logoContainer: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    zIndex: '2',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
  img: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      margin: theme.spacing(1, 0, 0, 0),
    },
  },
  logoHeader: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
      margin: theme.spacing(2),
    },
  },
  loginSignupBtn: {
    backgroundColor: '#ffffff',
    margin: theme.spacing(8, 8, 8, 2),
    padding: theme.spacing(1, 4),
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7rem',
      margin: theme.spacing(4, 4, 4, 1),
    },
  },
  typography: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    margin: theme.spacing(0, 0, 4, 0),
    [theme.breakpoints.down('md')]: {
      fontSize: '1.8rem',
      margin: theme.spacing(0),
    },
  },
  disableText: {
    color: theme.palette.text.disabled,
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7rem',
    },
  },
  form: {
    margin: theme.spacing(2, 15, 0, 15),
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '0.8rem',
      margin: theme.spacing(2, 10, 0, 10),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      margin: theme.spacing(2, 5, 0, 5),
    },
  },
  textField: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
  },
  submit: {
    margin: theme.spacing(6, 0),
    padding: theme.spacing(2, 6),
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
      margin: theme.spacing(3, 0),
      padding: theme.spacing(2, 5),
    },
  },
  demo: {
    margin: theme.spacing(4, 2),
    padding: theme.spacing(2, 2),
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
      margin: theme.spacing(1),
    },
  },
}));
