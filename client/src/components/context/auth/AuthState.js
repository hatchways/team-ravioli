import React, { useReducer } from 'react';
import AuthContext from './authContext';
import axios from 'axios';
import authReducer from './authReducer';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_MESSAGE,
} from '../actionTypes';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (initialState.token !== null) {
      let data = {
        message: 'User loaded',
      };
      dispatch({
        type: USER_LOADED,
        payload: data,
      });
    } else {
      dispatch({
        type: LOGOUT,
        payload: 'Logged out',
      });
    }
  };

  // Signup User
  const signup = async (formData) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/signup', formData, config);

      if (res.data.status === 'success') {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: SIGNUP_FAIL,
          payload: res.data.message,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Login User
  const login = async (formData) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/login', formData, config);

      if (res.data.status === 'success') {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: res.data.message,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearMessage = () =>
    dispatch({
      type: CLEAR_MESSAGE,
    });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        message: state.message,
        signup,
        login,
        loadUser,
        logout,
        clearMessage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
