import React from 'react';
import { Avatar, TableBody, TableRow, TableCell } from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { useStyles } from '../../themes/dashboardStyle';

const CategoryItems = ({ category }) => {
  const classes = useStyles();
  return (
    <TableBody>
      <TableRow className={classes.tableRow}>
        <TableCell align="left">
          <Avatar className={classes.categoryIcon}>
            <ReceiptIcon />
          </Avatar>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {category.name}
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          - ${category.total}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default CategoryItems;
