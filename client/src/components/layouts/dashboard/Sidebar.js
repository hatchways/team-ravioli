import React, { useState } from 'react';
import { useStyles } from '../../themes/dashboardStyles/sidebarStyles';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logoIcon from '../../assets/logo.png';

const Sidebar = props => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.sideBarDiv}>
      <div
        className={classes.toolbar}
        style={{
          height: '90px',
          position: 'relative',
          backgroundColor: '#314f85',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img src={logoIcon} alt="logo" className={classes.img} />
        <Typography
          className={classes.title}
          style={{ display: 'inline-block' }}
        >
          RECEIPT TRACKER
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem button style={{ paddingTop: '40px' }}>
          {/* Temporary style for Active listItemText  */}
          <ListItemText
            primary="Dashboard"
            className={classes.listText}
            style={{
              backgroundColor: '#314f85',
              color: '#38cc89',
              borderRadius: '10px'
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Reports" className={classes.listText} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Receipts" className={classes.listText} />
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
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: false
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
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
