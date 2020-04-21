import React from 'react';
import { Avatar, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useStyles } from '../../themes/dashboardStyle';
import SetIcon from '../../utility/SetIcon';

const CategoryItems = ({ category }) => {
  const classes = useStyles();

  const roundTotal = category.total.toFixed(2);

  return (
    <TableBody>
      <TableRow className={classes.tableRow}>
        <TableCell align="left">
          <Avatar className={classes.categoryIcon}>
            <SetIcon name={category.name} />
          </Avatar>
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {category.name}
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          - ${roundTotal}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default CategoryItems;
