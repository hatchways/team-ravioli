import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo.png';
import {
  CssBaseline,
  Grid,
  TextField,
  Snackbar,
  Button,
  Typography,
} from '@material-ui/core';
import { useStyles } from '../themes/loginSignupStyle';
import AuthContext from '../context/auth/authContext';

let demoEmail;
let demoPW;

if (process.env.NODE_ENV !== 'production') {
  demoEmail = process.env.REACT_APP_DEMO_EMAIL;
  demoPW = process.env.REACT_APP_DEMO_PW;
} else {
  demoEmail = process.env.DEMO_EMAIL;
  demoPW = process.env.DEMO_PW;
}

const Signup = (props) => {
  const classes = useStyles();
  const [errMsg, setErrMsg] = useState('');
  const [open, setOpen] = useState(false);

  const authContext = useContext(AuthContext);
  const { signup, message, clearMessage, isAuthenticated, login } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (message === 'User already exists. Please Log in.') {
      setErrMsg('User already exists. Please Log in.');
      setOpen(true);
      clearMessage();
    }
    if (message === 'Successfully logged out') {
      setErrMsg('Successfully logged out');
      setOpen(true);
      clearMessage();
    }
    // eslint-disable-next-line
  }, [message, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setUser({ ...user, [name]: value.toUpperCase() });
    } else if (name === 'email') {
      setUser({ ...user, [name]: value.toLowerCase() });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setErrMsg('Please enter all fields');
      setOpen(true);
    } else if (password.length < 6) {
      setErrMsg('Please enter minimum 6 digits password');
      setOpen(true);
    } else if (password !== password2) {
      setErrMsg('Password do not match');
      setOpen(true);
    } else {
      signup({
        name,
        email,
        password,
      });
    }
  };

  const handleDemoClick = () => {
    login({
      email: demoEmail,
      password: demoPW,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
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
                  Already have an account?
                </Typography>
                <Link className={classes.link} to="/login">
                  <Button
                    variant="contained"
                    className={classes.loginSignupBtn}
                  >
                    Login
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.form}>
              <Typography variant="h4" className={classes.typography}>
                Create an account
              </Typography>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={3000}
                message={errMsg}
                open={open}
                onClose={handleClose}
              />
              <form onSubmit={onSubmit} noValidate autoComplete="off">
                <TextField
                  className={classes.textField}
                  id="name"
                  label="Full Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                  fullWidth
                />
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
                <TextField
                  TextField
                  className={classes.textField}
                  id="password2"
                  label="Confirm Password"
                  type="password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                  onKeyDown={handleKeyDown}
                  required
                  fullWidth
                />
                <Button
                  type="submit"
                  className={classes.submit}
                  variant="outlined"
                  color="secondary"
                >
                  Create
                </Button>
                <Button
                  className={classes.demo}
                  variant="contained"
                  color="primary"
                  onClick={handleDemoClick}
                >
                  Guest Login
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
