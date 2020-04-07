import React, { useState } from 'react';
import { useStyles } from '../themes/dashboardStyles/receiptDialogStyle';
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
  Avatar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { DropzoneArea } from 'material-ui-dropzone';
import axios from 'axios';
import receiptImg from '../assets/starbucksIcon.png';

const ReceiptDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const dateFormater = () => {
    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    let newDate = d.getFullYear() + '-' + month + '-' + day;

    return newDate;
  };
  const dateNow = dateFormater();
  const [receipt, setReceipt] = useState({
    user_id: localStorage.getItem('userId'),
    title: '',
    amount: '',
    category: 'Food and Drinks',
    receiptDate: '',
    dateCreated: dateNow,
    pictureFile: null,
  });
  const { title, amount, category } = receipt;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
    setOpen3(false);
  };

  const onChange = (e) => {
    setReceipt({ ...receipt, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setReceipt({ ...receipt, receiptDate: e.target.value });
  };

  const handleChange = (files) => {
    let newReceipt = receipt;
    newReceipt = { ...receipt, pictureFile: files[0] };
    setReceipt(newReceipt);
  };

  const handleSubmit = async () => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    setOpen3(false);
    try {
      const res = await axios.post('/createReceipt', receipt, config);

      console.log(res);
      setReceipt({
        user_id: localStorage.getItem('userId'),
        title: '',
        amount: '',
        category: 'Food and Drinks',
        receiptDate: '',
        dateCreated: dateNow,
        pictureFile: null,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = () => {
    setOpen(false);
    setOpen2(true);
  };

  const handleContinue = () => {
    setOpen2(false);
    setOpen3(true);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        className={classes.uploadImgBtn}
      >
        Upload receipt
      </Button>
      {/* ------------Dialog 1------------- */}
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" onClose={handleClose}>
          <Typography className={classes.dialogMainTitle}>
            Upload receipt
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
          <Grid
            container
            spacing={3}
            direction="row-reverse"
            alignItems="stretch"
          >
            <DropzoneArea
              onChange={handleChange}
              acceptedFiles={['image/jpeg', 'image/png']}
              showPreviewsInDropzone={false}
              showPreviews={true}
              dropzoneText="Drop file here or Click to Upload"
              maxFileSize={5000000}
              filesLimit={1}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            variant="outlined"
            color="secondary"
            className={classes.dialogActionBtn}
            // onClick={handleStepChange}
            onClick={handleNext}
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
      {/* ------------Dialog 2------------- */}
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open2}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" onClose={handleClose}>
          <Typography className={classes.dialogMainTitle}>
            Enter Receipt Information
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
              id="date"
              type="date"
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
            onClick={handleContinue}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
      {/* ------------Dialog 3------------- */}
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open3}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" onClose={handleClose}>
          <Typography className={classes.dialogMainTitle}>
            Receipt information
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
          <Grid
            container
            spacing={3}
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <Avatar
                alt="receipt"
                src={receiptImg}
                className={classes.avatar}
              />
            </Grid>
            <Grid item>
              <Typography className={classes.receiptInfo}>
                {receipt.category}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.receiptInfo}>
                {receipt.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.receiptInfo}>
                - $ {receipt.amount}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Button
            autoFocus
            variant="outlined"
            color="secondary"
            className={classes.dialogActionBtn}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReceiptDialog;
