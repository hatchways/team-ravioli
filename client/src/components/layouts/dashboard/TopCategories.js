import React from 'react';
import { useStyles } from '../../themes/dashboardStyle';
import { TableContainer, Table } from '@material-ui/core';
import CategoryItems from './CategoryItems';

const TopCategories = ({ topCategories }) => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          {topCategories &&
            topCategories.map((category, index) => (
              <CategoryItems key={index} category={category} />
            ))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopCategories;
