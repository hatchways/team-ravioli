import React, { useReducer } from 'react';
import ReceiptContext from './receiptContext';
import axios from 'axios';
import receiptReducer from './receiptReducer';
import { CREATE_RECEIPT, RECEIPT_ERROR } from '../actionTypes';

const ReceiptState = (props) => {
  const initialState = {
    receipts: [
      {
        receipt_id: '5177982679d311ea8e37b46bfc6cbb3b',
        user_id: 'c15c8e26791e11eabc30b46bfc6cbb3b',
        title: 'vacation',
        amount: 1111,
        category: 'Travel',
        receipt_date: '2020-04-02',
        date_created: '2020-04-08',
        picture_url: [],
      },
      {
        receipt_id: '5177982679d311ea8e37b46bfc6cbb3b',
        user_id: 'c15c8e26791e11eabc30b46bfc6cbb3b',
        title: 'tea',
        amount: 11,
        category: 'Food and Drinks',
        receipt_date: '2020-04-20',
        date_created: '2020-04-09',
        picture_url: [],
      },
      {
        receipt_id: '5177982679d311ea8e37b46bfc6cbb3b',
        user_id: 'c15c8e26791e11eabc30b46bfc6cbb3b',
        title: 'Jacket',
        amount: 210,
        category: 'Shopping',
        receipt_date: '2020-04-22',
        date_created: '2020-04-08',
        picture_url: [],
      },
      {
        receipt_id: '5177982679d311ea8e37b46bfc6cbb3b',
        user_id: 'c15c8e26791e11eabc30b46bfc6cbb3b',
        title: 'Appstore',
        amount: 14,
        category: 'Services',
        receipt_date: '2020-04-25',
        date_created: '2020-04-08',
        picture_url: [],
      },
      {
        receipt_id: '5177982679d311ea8e37b46bfc6cbb3b',
        user_id: 'c15c8e26791e11eabc30b46bfc6cbb3b',
        title: 'Gift',
        amount: 50,
        category: 'Other',
        receipt_date: '2020-04-27',
        date_created: '2020-04-08',
        picture_url: [],
      },
    ],
    statusMessage: '',
    errorMessage: '',
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
      // Run get receipt to update receipt state with this created receipt.
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

  // Get Report

  // Delete receipt

  return (
    <ReceiptContext.Provider
      value={{
        receipts: state.receipts,
        statusMessage: state.statusMessage,
        errorMessage: state.errorMessage,
        createReceipt,
      }}
    >
      {props.children}
    </ReceiptContext.Provider>
  );
};

export default ReceiptState;
