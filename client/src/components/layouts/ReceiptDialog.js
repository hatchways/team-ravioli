import React, { useState, useContext, useEffect } from 'react';
import { useStyles } from '../themes/homeStyles/receiptDialogStyle';
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
  CircularProgress,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { DropzoneArea } from 'material-ui-dropzone';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ReceiptContext from '../context/receipt/receiptContext';

const ReceiptDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  const [err, setErr] = useState(false);

  const receiptContext = useContext(ReceiptContext);
  const {
    createReceipt,
    uploadImage,
    receiptState,
    clearError,
    loading,
  } = receiptContext;

  const [image, setImage] = useState(null);
  const [receipt, setReceipt] = useState(receiptState);
  const {
    title,
    amount,
    category,
    date_created,
    receipt_date,
    user_id,
    picture_url,
  } = receipt;

  // Effect to update receipt state with data receipved from backend
  useEffect(() => {
    setReceipt(receiptState);
  }, [receiptState]);

  // handling initial dialog open
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Method to handle dialog close
  const handleClose = () => {
    clearError();
    setOpen(false);
    setOpen2(false);
    setOpen3(false);
  };

  // handling manual form entries
  const onChange = (e) => {
    const { name, value } = e.target;
    setReceipt({ ...receipt, [name]: value });
    setErr(false);
  };

  // handling date change in form
  const handleDateChange = (e) => {
    const { value } = e.target;
    setReceipt({ ...receipt, receipt_date: value });
    setDateErr(false);
  };

  // handling picture drop in dropzone
  const handleChange = (files) => {
    setImage(files[0]);
  };

  // handling final submit in dialog
  const handleSubmit = () => {
    createReceipt({
      title,
      amount,
      category,
      date_created,
      receipt_date,
      user_id,
      picture_url,
    });
    clearError();
    setOpen3(false);
  };

  const handleSkip = () => {
    setOpen(false);
    setOpen2(true);
  };

  const handleUpload = () => {
    if (image !== null) {
      uploadImage(image);
      setOpen(false);
      setOpen2(true);
    }
  };

  // handling second dialog submit
  const handleContinue = () => {
    if (receipt_date === '') {
      setDateErr(true);
    } else if (amount === '') {
      setErr(true);
    } else {
      setOpen2(false);
      setOpen3(true);
    }
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
            onClick={handleSkip}
          >
            Skip
          </Button>
          <Button
            autoFocus
            variant="outlined"
            color="secondary"
            className={classes.dialogActionBtn}
            onClick={handleUpload}
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
      {/* ------------Dialog 2------------- */}
      {!loading ? (
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
                error={dateErr}
                id="date"
                type="date"
                helperText="This field cannot be empty!"
                value={receipt_date}
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
                helperText="This field cannot be empty!"
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
      ) : (
        <CircularProgress className={classes.loading} color="secondary" />
      )}

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
              <ReceiptIcon className={classes.avatar} />
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
