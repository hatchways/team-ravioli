import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    // backgroundColor: '#fafbff',
    width: 'calc(100% - 290px)',
    padding: theme.spacing(7, 3),
    marginLeft: '290px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: theme.spacing(0),
      padding: theme.spacing(5),
    },
  },
}));
