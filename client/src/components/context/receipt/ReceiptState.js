import React, { useReducer } from 'react';
import ReceiptContext from './receiptContext';
import axios from 'axios';
import receiptReducer from './receiptReducer';
import {
  CREATE_RECEIPT,
  RECEIPT_ERROR,
  CHANGE_TAB,
  GET_RECEIPTS,
} from '../actionTypes';
import { currentYear, currentMonth } from '../../utility/utils';

const ReceiptState = (props) => {
  const initialState = {
    receipts: [],
    statusMessage: '',
    errorMessage: '',
    activeTab: 'dashboard',
    totalExpense: '',
  };
  const [state, dispatch] = useReducer(receiptReducer, initialState);

  // Create receipt
  const createReceipt = async (receiptData) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/createReceipt', receiptData, config);
      console.log(res);
      getReceipts({ currentMonth, currentYear });
      dispatch({
        type: CREATE_RECEIPT,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: RECEIPT_ERROR,
        payload: 'Something went wrong. Please try again.',
      });
    }
  };

  // Get receipts
  const getReceipts = async (obj) => {
    const config = {
      params: {
        month: obj.month,
        year: obj.year,
      },
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get('/getReceipts', config);
      console.log(res);
      const data = {
        response: await res.data.response.reverse(),
        status: await res.data.status,
        total_amount: await res.data.total_amount,
      };

      dispatch({
        type: GET_RECEIPTS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RECEIPT_ERROR,
        payload: 'Something went wrong',
      });
    }
  };

  // Get Report

  // Delete receipt

  // Change sidebar active tab

  const changeTab = (tab) => {
    dispatch({
      type: CHANGE_TAB,
      payload: tab,
    });
  };

  return (
    <ReceiptContext.Provider
      value={{
        receipts: state.receipts,
        statusMessage: state.statusMessage,
        errorMessage: state.errorMessage,
        activeTab: state.activeTab,
        totalExpense: state.totalExpense,
        createReceipt,
        changeTab,
        getReceipts,
      }}
    >
      {props.children}
    </ReceiptContext.Provider>
  );
};

export default ReceiptState;
