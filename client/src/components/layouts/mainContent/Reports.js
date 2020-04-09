import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Report from '../reports/Report';
import { useStyles } from '../../themes/reportsStyles/reportsStyle';

const Reports = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.headingText}>Reports</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.secondaryText}>
              Total Expenses
            </Typography>
            <Report />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reports;
