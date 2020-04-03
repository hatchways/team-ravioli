import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../themes/dashboardStyles/mainContentStyle';
import Dashboard from './mainContent/Dashboard';
import Reports from './mainContent/Reports';
import Receipts from './mainContent/Receipts';

const MainContent = () => {
  const classes = useStyles();
  const [active, setActive] = useState('');

  if (active === 'reports') {
    return (
      <Grid container className={classes.container}>
        <Reports />
      </Grid>
    );
  } else if (active === 'receipt') {
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
