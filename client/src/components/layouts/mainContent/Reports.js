import React, { useState, useContext, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Select,
  InputLabel,
  FormControl,
  Divider,
  CircularProgress,
} from '@material-ui/core';
import Report from '../reports/Report';
import ReceiptContext from '../../context/receipt/receiptContext';
import { useStyles } from '../../themes/reportsStyles/reportsStyle';
import { currentYear } from '../../utility/utils';

const Reports = () => {
  const classes = useStyles();

  const [month, setMonth] = useState('all');
  const [year, setYear] = useState(currentYear);
  const receiptContext = useContext(ReceiptContext);
  const {
    loading,
    receipts,
    getReceiptsByMonth,
    totalExpense,
    getAllReceipts,
    getReceiptsByYear,
  } = receiptContext;

  useEffect(() => {
    if (month === 'all' && year !== '') {
      getReceiptsByYear(year);
    } else if (month !== 'all' && year !== '') {
      console.log('by month and year fired from Reports');
      getReceiptsByMonth({ month, year });
    } else {
      getAllReceipts();
    }
    // eslint-disable-next-line
  }, [month, year]);

  const handleChange = (e) => {
    if (e.target.id === 'month-select') {
      setMonth(e.target.value);
    } else {
      setYear(e.target.value);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography className={classes.headingText}>Reports</Typography>
            </Grid>
            <Grid item>
              <FormControl
                variant="outlined"
                className={classes.DropdownMargin}
              >
                <InputLabel htmlFor="month-select">Month</InputLabel>
                <Select
                  native
                  label="Month"
                  id="month-select"
                  value={month}
                  onChange={handleChange}
                >
                  <option aria-label="All" value="all">
                    All
                  </option>
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
              <FormControl
                variant="outlined"
                className={classes.DropdownMargin}
              >
                <InputLabel htmlFor="year-select">Year</InputLabel>
                <Select
                  native
                  label="Year"
                  id="year-select"
                  value={year}
                  onChange={handleChange}
                >
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2025">2024</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.secondaryText}>
              Total Expenses
            </Typography>
            <Typography className={classes.expenseTotal}>
              $ {totalExpense}
            </Typography>
            <Divider />
            {!loading ? (
              <Report receipts={receipts} />
            ) : (
              <CircularProgress className={classes.loading} color="secondary" />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Reports;
