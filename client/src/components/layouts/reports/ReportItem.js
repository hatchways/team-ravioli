import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const ReportItem = ({ receipt }) => {
  return (
    <Grid item xs={12}>
      <Typography>{receipt.title}</Typography>
    </Grid>
  );
};

export default ReportItem;
