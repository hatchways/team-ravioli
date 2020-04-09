import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  CLEAR_MESSAGE,
} from '../actionTypes';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        message: action.payload.message,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('userId', action.payload.user_id);
      localStorage.setItem('token', action.payload.auth_token);
      return {
        ...state,
        userId: action.payload.user_id,
        token: action.payload.auth_token,
        message: action.payload.message,
        isAuthenticated: true,
        loading: false,
      };
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        message: action.payload,
        loading: false,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
