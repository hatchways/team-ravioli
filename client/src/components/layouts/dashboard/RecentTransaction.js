import React, { useEffect, useState } from 'react';
import { useStyles } from '../../themes/dashboardStyles/dashboardStyle';
import { TableContainer, Table, Typography } from '@material-ui/core';
import RecentItems from '../dashboard/RecentItems';

const RecentTransaction = ({ receipts }) => {
  const classes = useStyles();
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const getRecent = (receipts) => {
      let recentReceipts;
      if (receipts !== [] && receipts.length > 20) {
        recentReceipts = receipts.slice(0, 20);
      } else {
        recentReceipts = receipts;
      }
      setRecent(recentReceipts);
    };
    getRecent(receipts);
    // eslint-disable-next-line
  }, [receipts]);

  return (
    <div>
      {recent.length > 0 ? (
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            {recent &&
              recent.map((receipt, index) => (
                <RecentItems key={index} recent={receipt} />
              ))}
          </Table>
        </TableContainer>
      ) : (
        <div>
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

export default RecentTransaction;
