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
    const {
      user_id,
      title,
      amount,
      category,
      date_created,
      receipt_date,
      picture_url,
    } = receiptData;
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('title', title);
    formData.append('amount', amount);
    formData.append('category', category);
    formData.append('date_created', date_created);
    formData.append('receipt_date', receipt_date);
    formData.append('picture_url', picture_url);
    formData.append('picture_name', picture_url.name);

    const config = {
      header: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const res = await axios.post('/createReceipt', formData, config);
      const { message } = res.data;
      dispatch({
        type: CREATE_RECEIPT,
        payload: message,
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
      const { response, status, total_amount } = await res.data;
      const data = {
        response: response,
        status: status,
        total_amount: total_amount,
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
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get('/viewAllReceipts', config);
      const { response, status, total_amount } = await res.data;
      const data = {
        response: response,
        status: status,
        total_amount: total_amount,
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
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get('/viewAllReceipts', config);
      const { response, status } = await res.data;

      const filteredItems = response.filter((item) =>
        item.receipt_date.includes(year)
      );
      const total = filteredItems.reduce(
        (acc, curr) => (acc += curr.amount),
        0
      );
      const data = {
        response: filteredItems,
        status: status,
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

  // Delete receipt

  // Update receipt

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
