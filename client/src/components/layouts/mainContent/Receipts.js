import React from 'react';
import { useStyles } from '../../themes/receiptsStyles/receiptStyle';
import { Paper, Grid, Typography } from '@material-ui/core';

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
