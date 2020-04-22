import React, { useState, useContext } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import { useStyles } from '../../themes/receiptsReportsStyle';
import DeleteIcon from '@material-ui/icons/Delete';
import ReceiptContext from '../../context/receipt/receiptContext';

const DeleteReceipt = ({ receipt }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const receiptContext = useContext(ReceiptContext);
  const { deleteReceipt } = receiptContext;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteReceipt({ id: receipt.id });
    setOpen(false);
  };

  return (
    <div>
      <DeleteIcon onClick={handleClickOpen} className={classes.deleteIcon} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title" className={classes.subText}>
          Permanently delete this receipt?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleDelete}
            variant="outlined"
            className={classes.deleteBtn}
          >
            Delete
          </Button>
          <Button
            onClick={handleClose}
            color="secondary"
            variant="outlined"
            className={classes.emailBtn}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DeleteReceipt;
