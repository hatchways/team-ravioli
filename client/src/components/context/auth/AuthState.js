import React, { useReducer } from 'react';
import AuthContext from './authContext';
import axios from 'axios';
import authReducer from './authReducer';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_MESSAGE,
} from '../actionTypes';
import setAuthToken from '../../utility/setAuthToken';

const AuthState = (props) => {
  const initialState = {
    userId: localStorage.getItem('userId'),
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Signup User
  const signup = async (formData) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/signup', formData, config);
      const { status, message } = await res.data;
      if (status === 'success') {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });
        if (localStorage.token) {
          setAuthToken(localStorage.token);
        }
      } else {
        dispatch({
          type: SIGNUP_FAIL,
          payload: message,
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
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: 'Invalid Username or Password',
      });
    }
  };

  // Logout
  const logout = () =>
    dispatch({ type: LOGOUT, payload: 'Successfully logged out' });

  // Clear Errors
  const clearMessage = () =>
    dispatch({
      type: CLEAR_MESSAGE,
    });

  return (
    <AuthContext.Provider
      value={{
        userId: state.userId,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        message: state.message,
        signup,
        login,
        logout,
        clearMessage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
