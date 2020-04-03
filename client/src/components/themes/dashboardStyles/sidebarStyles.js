import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  sideBarDiv: {
    height: '150vh',
    backgroundColor: theme.palette.primary.dark,
    color: '#ffffff'
  },
  drawer: {
    [theme.breakpoints.up('xs')]: {
      width: 320,
      flexShrink: 0
    }
  },
  title: {
    flexGrow: 1,
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  },
  img: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2),
    position: 'fixed',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      zIndex: '1300'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 320
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  listText: {
    // textAlign: 'center',
    padding: theme.spacing(1),
    margin: theme.spacing(0, 4, 0, 6)
  }
}));
