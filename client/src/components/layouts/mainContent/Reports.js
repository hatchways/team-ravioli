import React, { useState, useContext, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Select,
  InputLabel,
  FormControl,
  Divider,
} from '@material-ui/core';
import Report from '../reports/Report';
import ReceiptContext from '../../context/receipt/receiptContext';
import { useStyles } from '../../themes/reportsStyles/reportsStyle';
import { currentYear, currentMonth } from '../../utility/utils';

const Reports = () => {
  const classes = useStyles();

  const [month, setMonth] = useState(currentMonth);
  const receiptContext = useContext(ReceiptContext);
  const { receipts, getReceipts } = receiptContext;
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const getExpense = () => {
      const total = receipts
        .map((receipt) => receipt.amount)
        .reduce((acc, item) => (acc += item), 0);
      setExpense(total);
    };
    getExpense();
  }, [receipts]);

  useEffect(() => {
    getReceipts({ month, currentYear });
  }, [month]);

  const handleChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid
            container
            item
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Typography className={classes.headingText}>Reports</Typography>
            <FormControl variant="outlined" className={classes.DropdownMargin}>
              <InputLabel htmlFor="month-select">Month</InputLabel>
              <Select
                native
                label="Month"
                id="month-select"
                value={month}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.secondaryText}>
              Total Expenses
            </Typography>
            <Typography className={classes.expenseTotal}>
              $ {expense}
            </Typography>
            <Divider />
            <Report receipts={receipts} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reports;
