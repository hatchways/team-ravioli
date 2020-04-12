import React from 'react';
import ReportItem from '../reports/ReportItem';
import { useStyles } from '../../themes/reportsStyles/reportsStyle';
import { TableContainer, Table, Typography } from '@material-ui/core';

const Report = ({ receipts }) => {
  const classes = useStyles();

  return (
    <div>
      {receipts.length > 0 ? (
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            {receipts !== [] &&
              receipts.map((receipt, index) => (
                <ReportItem receipt={receipt} key={index} />
              ))}
          </Table>
        </TableContainer>
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

export default Report;
