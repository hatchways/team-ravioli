import React, { useContext, useEffect } from 'react';
import { useStyles } from '../../themes/dashboardStyle';
import {
  Typography,
  Grid,
  Paper,
  CircularProgress,
  Divider,
} from '@material-ui/core';
import ReceiptContext from '../../context/receipt/receiptContext';
import RecentTransaction from '../dashboard/RecentTransaction';
import TopCategories from '../dashboard/TopCategories';
import Chart from '../dashboard/Chart';

const Dashboard = () => {
  const classes = useStyles();

  const receiptContext = useContext(ReceiptContext);
  const {
    receipts,
    getAllReceipts,
    loading,
    getTopCategories,
    topCategories,
    dresponse,
    getChart,
  } = receiptContext;

  useEffect(() => {
    getAllReceipts();
    getTopCategories();
    getChart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography className={classes.headingText}>Dashboard</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.chartPaper}>
            <Typography className={classes.subText}>Total Expense</Typography>
            <Typography className={classes.subText}>$ {dresponse["total"]}</Typography>
            {!loading ? (
              <Chart dresponse={dresponse} />
            ):
            
               <CircularProgress className={classes.loading} color="secondary" />
            }
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.categoriesPaper}>
            <Typography className={classes.subText}>Top Categories</Typography>
            <Divider />
            {!loading ? (
              <TopCategories topCategories={topCategories} />
            ) : (
              <CircularProgress className={classes.loading} color="secondary" />
            )}
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
