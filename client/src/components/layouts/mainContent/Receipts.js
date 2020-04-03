import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: theme.spacing(2),
    textAlign: 'flex-start',
    borderRadius: '30px',
    height: '22rem',
    color: theme.palette.secondary.main
  },
  headingText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark
  },
  secondaryText: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: theme.palette.primary.dark
  },
  expense: {},
  categories: {},
  transections: {}
}));

const Receipts = () => {
  const classes = useStyles();
  const date = 'Nov 11, 2019';
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.headingText}>Receipts</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}></Paper>
          <div style={{ textAlign: 'center', padding: '1rem' }}>{date}</div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}></Paper>
          <div style={{ textAlign: 'center', padding: '1rem' }}>{date}</div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}></Paper>
          <div style={{ textAlign: 'center', padding: '1rem' }}>{date}</div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}></Paper>
          <div style={{ textAlign: 'center', padding: '1rem' }}>{date}</div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}></Paper>
          <div style={{ textAlign: 'center', padding: '1rem' }}>{date}</div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}></Paper>
          <div style={{ textAlign: 'center', padding: '1rem' }}>{date}</div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}></Paper>
          <div style={{ textAlign: 'center', padding: '1rem' }}>{date}</div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}></Paper>
          <div style={{ textAlign: 'center', padding: '1rem' }}>{date}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Receipts;
