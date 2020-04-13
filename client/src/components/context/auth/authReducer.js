import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_MESSAGE,
} from '../actionTypes';

export default (state, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('userId', action.payload.user_id);
      localStorage.setItem('token', action.payload.auth_token);
      const userSuccess = {
        ...state,
        userId: action.payload.user_id,
        token: action.payload.auth_token,
        message: action.payload.message,
        isAuthenticated: true,
        loading: false,
      };
      return userSuccess;
      break;
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      const userFail = {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false,
        message: action.payload,
        loading: false,
      };
      return userFail;
      break;
    case CLEAR_MESSAGE:
      const authMsg = {
        ...state,
        message: null,
      };
      return authMsg;
      break;
    default:
      return state;
  }
};
