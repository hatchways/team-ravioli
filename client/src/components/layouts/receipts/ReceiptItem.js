import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../../themes/receiptsReportsStyle';

const ReceiptItem = ({ receipt }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
      >
        <img
          src={receipt.picture_url}
          alt="receipt"
          className={classes.receiptImg}
        />
        <Typography className={classes.receiptDate}>
          {receipt.title}
          <br />
          {receipt.receipt_date}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReceiptItem;
