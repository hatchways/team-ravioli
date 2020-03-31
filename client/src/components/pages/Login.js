import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import bgImg from '../assets/loginSignup.png';
import logoIcon from '../assets/logo.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none'
  },
  image: {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
  },
  logoContainer: {
    height: '100vh',
    width: '100%'
  },
  img: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  logoHeader: {
    color: '#ffffff',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  createBtn: {
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
    margin: theme.spacing(8, 20)
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
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sm={4} className={classes.image}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.logoContainer}
          >
            <img src={logoIcon} alt="logo" className={classes.img} />
            <Typography className={classes.logoHeader}>
              RECEIPT TRACKER
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography display="inline" className={classes.disableText}>
                  Don't have an account?
                </Typography>
                <Link className={classes.link} to="/signup">
                  <Button variant="contained" className={classes.createBtn}>
                    Create
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.form}>
              <Typography variant="h4" className={classes.typography}>
                Welcome back!
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  TextField
                  className={classes.textField}
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  required
                  fullWidth
                />
                <TextField
                  TextField
                  className={classes.textField}
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  required
                  fullWidth
                />
                <Button
                  className={classes.submit}
                  variant="outlined"
                  color="secondary"
                >
                  Login
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
