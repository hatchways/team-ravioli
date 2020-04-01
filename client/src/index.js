import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './components/themes/theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
