import React, { useState, useContext } from 'react';
import { useStyles } from '../themes/homeStyles/navbarStyles';
import AuthContext from '../context/auth/authContext';
import ReceiptContext from '../context/receipt/receiptContext';
import ReceiptDialog from './ReceiptDialog';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  MenuItem,
  Menu,
} from '@material-ui/core/';
import logoIcon from '../assets/logo.png';

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const receiptContext = useContext(ReceiptContext);
  const authContext = useContext(AuthContext);
  const { clearReceipt } = receiptContext;
  const { logout } = authContext;

  const handleClick = () => {
    clearReceipt();
    logout();
  };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.navBar}>
        <Toolbar>
          <img src={logoIcon} alt="logo" className={classes.img} />
          <Typography className={classes.title}>RECEIPT TRACKER</Typography>
          <ReceiptDialog />
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <Avatar alt="Profile pic" src="" className={classes.profilePic} />
            </IconButton>

            <span onClick={handleMenu} className={classes.profile}>
              Profile
            </span>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              className={classes.menu}
            >
              <MenuItem onClick={handleClick} className={classes.menuItem}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
