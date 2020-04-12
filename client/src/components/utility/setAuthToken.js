import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    console.log('token set');
    axios.defaults.headers.common['auth_token'] = token;
  } else {
    console.log('token deleted');
    delete axios.defaults.headers.common['auth_token'];
  }
};

export default setAuthToken;
