import React, { useContext } from 'react';
import ReportItem from '../reports/ReportItem';
import ReceiptContext from '../../context/receipt/receiptContext';
import { Grid } from '@material-ui/core';

const Report = () => {
  const receiptContext = useContext(ReceiptContext);
  const { receipts } = receiptContext;

  return (
    <div>
      <Grid container spacing={8}>
        {receipts !== [] &&
          receipts.map((receipt, index) => (
            <ReportItem receipt={receipt} key={index} />
          ))}
      </Grid>
    </div>
  );
};

export default Report;
