import React, { useContext } from 'react';
import ReportItem from '../reports/ReportItem';
import ReceiptContext from '../../context/receipt/receiptContext';
import { useStyles } from '../../themes/reportsStyles/reportsStyle';
import { TableContainer, Table } from '@material-ui/core';

const Report = () => {
  const classes = useStyles();
  const receiptContext = useContext(ReceiptContext);
  const { receipts } = receiptContext;

  return (
    <div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          {receipts !== [] &&
            receipts.map((receipt, index) => (
              <ReportItem receipt={receipt} key={index} />
            ))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Report;
