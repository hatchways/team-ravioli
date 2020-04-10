import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import receiptImg from '../../assets/receipt.png';

const ReceiptItem = ({ receipt }) => {
  return (
    <Grid item xs={12} sm={3}>
      <img src={receiptImg} alt="receipt" />
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        {receipt.receipt_date}
      </div>
    </Grid>
  );
};

export default ReceiptItem;
