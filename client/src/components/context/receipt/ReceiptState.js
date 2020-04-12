import React, { useReducer } from 'react';
import ReceiptContext from './receiptContext';
import axios from 'axios';
import receiptReducer from './receiptReducer';
import {
  CREATE_RECEIPT,
  RECEIPT_ERROR,
  CHANGE_TAB,
  GET_RECEIPTS,
  GET_ALL_RECEIPTS,
  GET_RECEIPTS_YEARLY,
  CLEAR_RECEIPT,
} from '../actionTypes';

const ReceiptState = (props) => {
  const initialState = {
    loading: true,
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

      dispatch({
        type: CREATE_RECEIPT,
        payload: res.data.message,
      });
      getAllReceipts();
    } catch (err) {
      dispatch({
        type: RECEIPT_ERROR,
        payload: 'Something went wrong. Please try again.',
      });
    }
  };

  // Get receipts
  const getReceiptsByMonth = async (obj) => {
    console.log('get By year and month fired');
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

  // Get All Receipts
  const getAllReceipts = async () => {
    console.log('get all fired');
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get('/viewAllReceipts', config);
      console.log(res);
      const data = {
        response: await res.data.response.reverse(),
        status: await res.data.status,
        total_amount: await res.data.total_amount,
      };

      dispatch({
        type: GET_ALL_RECEIPTS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RECEIPT_ERROR,
        payload: 'Something went wrong',
      });
    }
  };

  // Get Receipts by Year

  const getReceiptsByYear = async (year) => {
    console.log('get By year fired');

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get('/viewAllReceipts', config);
      console.log(res);
      const items = await res.data.response;
      const filteredItems = items
        .reverse()
        .filter((item) => item.receipt_date.includes(year));
      const total = filteredItems.reduce(
        (acc, curr) => (acc += curr.amount),
        0
      );
      const data = {
        response: filteredItems,
        status: await res.data.status,
        total_amount: total,
      };

      dispatch({
        type: GET_RECEIPTS_YEARLY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RECEIPT_ERROR,
        payload: 'Something went wrong',
      });
    }
  };

  // Clear receipt
  const clearReceipt = () => {
    dispatch({ type: CLEAR_RECEIPT });
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
        loading: state.loading,
        receipts: state.receipts,
        statusMessage: state.statusMessage,
        errorMessage: state.errorMessage,
        activeTab: state.activeTab,
        totalExpense: state.totalExpense,
        createReceipt,
        changeTab,
        getReceiptsByMonth,
        getAllReceipts,
        getReceiptsByYear,
        clearReceipt,
      }}
    >
      {props.children}
    </ReceiptContext.Provider>
  );
};

export default ReceiptState;
