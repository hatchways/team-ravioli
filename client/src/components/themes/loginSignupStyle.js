import { makeStyles } from '@material-ui/core/styles';
import bgImg from '../assets/loginSignup.png';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none'
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
      zIndex: '1'
    }
  },
  logoContainer: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    zIndex: '2'
  },
  img: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  logoHeader: {
    color: '#ffffff',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: theme.spacing(4)
  },
  loginSignupBtn: {
    backgroundColor: '#ffffff',
    margin: theme.spacing(8, 8, 8, 2),
    padding: theme.spacing(1, 4),
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: theme.palette.primary.dark
  },
  typography: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    margin: theme.spacing(0, 0, 4, 0)
  },
  disableText: {
    color: theme.palette.text.disabled,
    fontSize: '1.1rem'
  },
  form: {
    margin: theme.spacing(8, 20, 0, 20)
  },
  textField: {
    margin: theme.spacing(4, 0)
  },
  submit: {
    margin: theme.spacing(8, 0),
    padding: theme.spacing(2, 6),
    fontSize: '1.3rem',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  alert: {
    backgroundColor: 'red'
  }
}));
