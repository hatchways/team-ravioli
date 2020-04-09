import React from 'react';
import { useStyles } from '../../themes/dashboardStyles/dashboardStyle';
import { Typography, Grid, Paper, Divider } from '@material-ui/core';

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
