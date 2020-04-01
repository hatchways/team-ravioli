import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import logoIcon from '../assets/logo.png';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import { useStyles } from '../themes/loginSignupStyle';

const Signup = () => {
  const classes = useStyles();
  const [errMsg, setErrMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
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
      console.log('Register Form Submitted');
      setUser({
        name: '',
        email: '',
        password: '',
        password2: ''
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
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
