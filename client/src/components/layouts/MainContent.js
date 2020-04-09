import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../themes/homeStyles/mainContentStyle';
import Dashboard from './mainContent/Dashboard';
import Reports from './mainContent/Reports';
import Receipts from './mainContent/Receipts';
import ReceiptContext from '../context/receipt/receiptContext';

const MainContent = (props) => {
  const classes = useStyles();
  const receiptContext = useContext(ReceiptContext);
  const { activeTab } = receiptContext;

  if (activeTab === 'reports') {
    return (
      <Grid container className={classes.container}>
        <Reports />
      </Grid>
    );
  } else if (activeTab === 'receipts') {
    return (
      <Grid container className={classes.container}>
        <Receipts />
      </Grid>
    );
  } else {
    return (
      <Grid container className={classes.container}>
        <Dashboard />
      </Grid>
    );
  }
};

export default MainContent;
