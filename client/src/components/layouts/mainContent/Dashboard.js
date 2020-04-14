import React, { useContext, useEffect } from 'react';
import { useStyles } from '../../themes/dashboardStyles/dashboardStyle';
import { Typography, Grid, Paper, CircularProgress } from '@material-ui/core';
import ReceiptContext from '../../context/receipt/receiptContext';
import RecentTransaction from '../dashboard/RecentTransaction';

const Dashboard = () => {
  const classes = useStyles();

  const receiptContext = useContext(ReceiptContext);
  const { receipts, getAllReceipts, loading } = receiptContext;

  useEffect(() => {
    getAllReceipts();
    // eslint-disable-next-line
  }, []);

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
            Recent Transactions
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.transactionPaper}>
            {!loading ? (
              <RecentTransaction receipts={receipts} />
            ) : (
              <CircularProgress className={classes.loading} color="secondary" />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
