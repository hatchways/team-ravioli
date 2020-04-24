import React, { useContext, useState, useEffect } from 'react';
import ReceiptContext from '../../context/receipt/receiptContext';
import { useStyles } from '../../themes/receiptsReportsStyle';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { dateNow } from '../../utility/utils';
import {
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  TextField,
  Select,
  FormControl,
  InputLabel,
} from '@material-ui/core';

const UpdateReceipt = ({ receipt }) => {
  const classes = useStyles();

  const receiptContext = useContext(ReceiptContext);
  const { updateReceipt } = receiptContext;
  const [open, setOpen] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  const [err, setErr] = useState(false);
  const [editReceipt, setEditReceipt] = useState(receipt);
  const { category, title, amount, user_id, receipt_id } = editReceipt;
  const [date, setDate] = useState('');
  const formatDate = () => {
    const newFormatDate = receipt.receipt_date
      .split('-')
      .reverse()
      .map((item) => (item.length < 2 ? '0' + item : item))
      .join('-');
    setDate(newFormatDate);
  };

  useEffect(() => {
    formatDate();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setEditReceipt({ ...receipt, [name]: value });
    setErr(false);
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
    setDateErr(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleUpdate = () => {
    updateReceipt({
      user_id,
      receipt_id,
      title,
      amount,
      category,
      receipt_date: date,
      date_created: dateNow,
    });
    setOpen(false);
  };

  return (
    <div>
      <EditIcon onClick={handleClickOpen} className={classes.editIcon} />
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" onClose={handleClose}>
          <Typography className={classes.dialogMainTitle}>
            Update Receipt Information
          </Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent className={classes.dialog}>
          <Grid container spacing={4} direction="column" justify="center">
            <TextField
              error={dateErr}
              id="date"
              type="date"
              value={date}
              variant="outlined"
              required
              onChange={handleDateChange}
            />

            <FormControl
              variant="outlined"
              required
              className={classes.receiptDropdown}
            >
              <InputLabel htmlFor="receipt-category">
                Select Category
              </InputLabel>
              <Select
                native
                name="category"
                value={category}
                onChange={onChange}
                label="Select Category"
              >
                <option value="Food and Drinks">Food and Drinks</option>
                <option value="Travel">Travel</option>
                <option value="Services">Services</option>
                <option value="Shopping">Shopping</option>
                <option value="Grocery">Grocery</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>

            <TextField
              className={classes.receiptInput}
              id="receiptName"
              label="Receipt title"
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              required
              variant="outlined"
            />

            <TextField
              variant="outlined"
              error={err}
              className={classes.receiptInput}
              id="amount"
              label="$ Amount"
              type="number"
              name="amount"
              value={amount}
              onChange={onChange}
              required
            />
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            autoFocus
            variant="outlined"
            color="secondary"
            className={classes.dialogActionBtn}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateReceipt;
