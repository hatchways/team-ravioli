import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
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
    padding: theme.spacing(5),
    textAlign: 'flex-start',
    borderRadius: '30px',
    height: '25rem',
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

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.headingText}>Dashboard</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.paper}>
            Total Expense
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.paper}>
            Top Categories
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.secondaryText}>
            Recent Transections
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
