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

const Reports = () => {
  const classes = useStyles();

  const [month, setMonth] = useState('');
  const receiptContext = useContext(ReceiptContext);
  const { receipts } = receiptContext;
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const getExpense = () => {
      const total = receipts
        .map((receipt) => receipt.amount)
        .reduce((acc, item) => (acc += item), 0);
      setExpense(total);
    };
    getExpense();
  }, []);

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
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
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
            <Report />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reports;
