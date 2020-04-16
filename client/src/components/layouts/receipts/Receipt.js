import React from 'react';
import ReceiptItem from '../receipts/ReceiptItem';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../../themes/receiptsReportsStyle';

const Receipt = ({ receipts }) => {
  const classes = useStyles();

  return (
    <div>
      {receipts.length > 0 ? (
        <Grid container spacing={3}>
          {receipts !== [] &&
            receipts.map((receipt, index) => (
              <ReceiptItem key={index} receipt={receipt} />
            ))}
        </Grid>
      ) : (
        <div>
          <Typography className={classes.noMatch} variant="h6">
            No Results Found
          </Typography>
          <Typography className={classes.noMatch} variant="subtitle2">
            New User:
            <br />
            Step 1: Click on Upload Receipt button on top right corner to upload
            your receipts.
            <br />
            Step 2: See Receipt Tracker in action.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Receipt;
