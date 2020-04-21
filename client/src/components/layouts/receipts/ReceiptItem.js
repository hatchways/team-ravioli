import React from 'react';
import { Grid, Typography, Backdrop } from '@material-ui/core';
import { useStyles } from '../../themes/receiptsReportsStyle';

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
