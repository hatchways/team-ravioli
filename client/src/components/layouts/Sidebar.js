import React, { useState, useContext } from 'react';
import { useStyles } from '../themes/homeStyles/sidebarStyles';
import { useTheme } from '@material-ui/core/styles';
import ReceiptContext from '../context/receipt/receiptContext';
import {
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logoIcon from '../assets/logo.png';

const Sidebar = (props) => {
  const { container } = props;
  const receiptContext = useContext(ReceiptContext);
  const { changeTab, activeTab } = receiptContext;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabClick = (e) => {
    const { innerHTML } = e.target;
    if (innerHTML === 'Receipts') {
      changeTab('receipts');
    } else if (innerHTML === 'Reports') {
      changeTab('reports');
    } else {
      changeTab('dashboard');
    }
  };

  const drawer = (
    <div className={classes.sideBarDiv}>
      <div className={`${classes.toolbar} ${classes.logoDiv}`}>
        <img src={logoIcon} alt="logo" className={classes.img} />
        <Typography
          className={classes.title}
          style={{ display: 'inline-block' }}
        >
          RECEIPT TRACKER
        </Typography>
      </div>
      <Divider />
      <List style={{ paddingTop: '25px' }}>
        <ListItem button onClick={handleTabClick}>
          <ListItemText
            primary="Dashboard"
            className={`${classes.listText} ${
              activeTab === 'dashboard' && classes.active
            }`}
          />
        </ListItem>
        <ListItem button onClick={handleTabClick}>
          <ListItemText
            primary="Reports"
            className={`${classes.listText} ${
              activeTab === 'reports' && classes.active
            }`}
          />
        </ListItem>
        <ListItem button onClick={handleTabClick}>
          <ListItemText
            primary="Receipts"
            className={`${classes.listText} ${
              activeTab === 'receipts' && classes.active
            }`}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: false,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Sidebar;
