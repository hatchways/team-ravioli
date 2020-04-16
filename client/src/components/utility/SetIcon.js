import React from 'react';
import BuildIcon from '@material-ui/icons/Build';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  foodIcon: {
    color: '#FF9900',
  },
  groceryIcon: {
    color: '#FF9999',
  },
  shopIcon: {
    color: '#FF3399',
  },
  travelIcon: {
    color: '#66CCFF',
  },
  serviceIcon: {
    color: '#00FFCC',
  },
  businessIcon: {
    color: '#9999FF',
  },
  receiptIcon: {
    color: '#33CC00',
  },
}));

const SetIcon = ({ name }) => {
  const classes = useStyles();
  switch (name) {
    case 'Food and Drinks':
      return <FastfoodIcon className={classes.foodIcon} />;
      break;
    case 'Grocery':
      return <ShoppingCartIcon className={classes.groceryIcon} />;
      break;
    case 'Shopping':
      return <ShoppingBasketIcon className={classes.shopIcon} />;
      break;
    case 'Travel':
      return <FlightTakeoffIcon className={classes.travelIcon} />;
      break;
    case 'Services':
      return <BuildIcon className={classes.serviceIcon} />;
      break;
    case 'Business':
      return <BusinessCenterIcon className={classes.businessIcon} />;
      break;
    case 'Other':
      return <ReceiptIcon className={classes.receiptIcon} />;
      break;
    default:
      return <ReceiptIcon className={classes.receiptIcon} />;
  }
};

export default SetIcon;
