import React, { useReducer } from 'react';
import ReceiptContext from './receiptContext';
import axios from 'axios';
import receiptReducer from './receiptReducer';
import { dateFormater } from '../../utility/utils';
import {
  CREATE_RECEIPT,
  UPLOAD_RECEIPT_IMG,
  RECEIPT_ERROR,
  CHANGE_TAB,
  GET_RECEIPTS,
  GET_ALL_RECEIPTS,
  GET_RECEIPTS_YEARLY,
  TOP_CATEGORIES,
  CLEAR_RECEIPT,
  SEND_EMAIL,
  CLEAR_ERROR,
  DELETE_RECEIPT,
} from '../actionTypes';

const ReceiptState = (props) => {
  const dateNow = dateFormater();
  const initialState = {
    loading: true,
    receiptState: {
      user_id: localStorage.getItem('userId'),
      title: '',
      amount: '',
      category: 'Food and Drinks',
      receipt_date: '',
      date_created: dateNow,
      picture_url: '',
    },
    receipts: [],
    topCategories: [],
    statusMessage: '',
    errorMessage: '',
    activeTab: 'dashboard',
    totalExpense: '',
  };
  const [state, dispatch] = useReducer(receiptReducer, initialState);

  // Upload Image and get receipt Information
  const uploadImage = async (image) => {
    const data = new FormData();
    data.append('picture_url', image);

    const config = {
      header: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const res = await axios.post('/createReceiptVision', data, config);
      console.log(res.data);
      const { title, amount, picture_url } = res.data.response;
      const load = {
        title,
        amount,
        picture_url,
      };
      dispatch({
        type: UPLOAD_RECEIPT_IMG,
        payload: load,
      });
    } catch (err) {
      dispatch({
        type: RECEIPT_ERROR,
        payload: 'Something went wrong. Please try again.',
      });
    }
  };

  // Create receipt
  const createReceipt = async (receiptData) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/createReceipt', receiptData, config);
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

  // Get top categories
  const getTopCategories = async () => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get('/topCategories', config);
      const { topCategory } = res.data;

      dispatch({
        type: TOP_CATEGORIES,
        payload: topCategory,
      });
    } catch (error) {
      dispatch({
        type: RECEIPT_ERROR,
        payload: 'Something went wrong',
      });
    }
  };

  // Send monthly report email with csv
  const sendEmail = async (obj) => {
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
      const res = await axios.get('/sendEmail', config);
      const { status, message } = await res.data;
      const data = {
        status: status,
        message: message,
      };

      dispatch({
        type: SEND_EMAIL,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RECEIPT_ERROR,
        payload: 'Something went wrong, unable to send email',
      });
    }
  };

  // Clear Error
  const clearError = () => {
    const clearReceipt = {
      user_id: localStorage.getItem('userId'),
      title: '',
      amount: '',
      category: 'Food and Drinks',
      receipt_date: '',
      date_created: dateNow,
      picture_url: '',
    };
    dispatch({
      type: CLEAR_ERROR,
      payload: clearReceipt,
    });
  };

  // Clear receipt
  const clearReceipt = () => {
    const emptyReceipt = {
      user_id: localStorage.getItem('userId'),
      title: '',
      amount: '',
      category: 'Food and Drinks',
      receipt_date: '',
      date_created: dateNow,
      picture_url: '',
    };
    dispatch({
      type: CLEAR_RECEIPT,
      payload: emptyReceipt,
    });
  };

  // Delete receipt
  const deleteReceipt = async (id) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.delete('/deleteReceipt', id, config);
      const { message } = res.data;
      dispatch({
        type: DELETE_RECEIPT,
        payload: message,
      });
      getAllReceipts();
    } catch (error) {
      dispatch({
        type: RECEIPT_ERROR,
        payload: 'Something went wrong, unable to delete receipt',
      });
    }
  };

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
        receiptState: state.receiptState,
        receipts: state.receipts,
        statusMessage: state.statusMessage,
        errorMessage: state.errorMessage,
        activeTab: state.activeTab,
        totalExpense: state.totalExpense,
        topCategories: state.topCategories,
        createReceipt,
        changeTab,
        getReceiptsByMonth,
        getAllReceipts,
        getReceiptsByYear,
        clearReceipt,
        getTopCategories,
        sendEmail,
        clearError,
        uploadImage,
        deleteReceipt,
      }}
    >
      {props.children}
    </ReceiptContext.Provider>
  );
};

export default ReceiptState;
