import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#fafbff',
    width: '80vw',
    margin: theme.spacing(2, 0, 0, 38),
    padding: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: theme.spacing(2),
      padding: theme.spacing(3),
    },
  },
}));
