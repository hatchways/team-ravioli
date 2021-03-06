import React from 'react';
import { Grid, Typography, Backdrop } from '@material-ui/core';
import { useStyles } from '../../themes/receiptsReportsStyle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DeleteReceipt from './DeleteReceipt';
import UpdateReceipt from './UpdateReceipt';

const ReceiptItem = ({ receipt }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
      >
        {receipt.picture_url !== '' ? (
          <div className={classes.imgDiv}>
            <div className={classes.imgOverlay} onClick={handleToggle}></div>
            <img
              src={receipt.picture_url}
              alt="receipt"
              className={classes.receiptImg}
            />

            <Backdrop
              className={classes.backdrop}
              open={open}
              onClick={handleClose}
            >
              <img
                src={receipt.picture_url}
                alt="receipt"
                className={classes.receiptImgZoom}
              />
            </Backdrop>
          </div>
        ) : (
          <div className={classes.defaultImg}>
            <ReceiptIcon className={classes.defaultIcon} />
          </div>
        )}
        <Grid container justify="center" alignItems="center">
          <UpdateReceipt receipt={receipt} />
          <DeleteReceipt receipt={receipt} />
        </Grid>
        <Typography className={classes.receiptDate}>
          {receipt.title}
          <br />
          {receipt.receipt_date}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReceiptItem;
