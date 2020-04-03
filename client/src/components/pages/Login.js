import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import logoIcon from '../assets/logo.png';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import { useStyles } from '../themes/loginSignupStyle';
import AuthContext from '../context/auth/authContext';

const Login = props => {
  const authContext = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setErrMsg('Invalid Credentials');
      setOpen(true);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setErrMsg('Please enter valid email and password');
      setOpen(true);
    } else {
      login({
        email,
        password
      });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
                  <Button
                    variant="contained"
                    className={classes.loginSignupBtn}
                  >
                    Create
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.form}>
              <Typography variant="h4" className={classes.typography}>
                Welcome back!
              </Typography>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={errMsg}
              />

              <form onSubmit={onSubmit} noValidate autoComplete="off">
                <TextField
                  TextField
                  className={classes.textField}
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
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
                  value={password}
                  onChange={onChange}
                  required
                  fullWidth
                />
                <Button
                  type="submit"
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
