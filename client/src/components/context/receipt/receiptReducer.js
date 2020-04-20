import {
  CREATE_RECEIPT,
  GET_RECEIPTS,
  GET_ALL_RECEIPTS,
  GET_RECEIPTS_YEARLY,
  TOP_CATEGORIES,
  CLEAR_RECEIPT,
  RECEIPT_ERROR,
  CLEAR_ERROR,
  CHANGE_TAB,
  SEND_EMAIL,
  UPLOAD_RECEIPT_IMG,
} from '../actionTypes';

export default (state, action) => {
  switch (action.type) {
    case UPLOAD_RECEIPT_IMG:
      const uploadResult = {
        ...state,
        receiptState: {
          ...state.receiptState,
          title: action.payload.title,
          amount: action.payload.amount,
          picture_url: action.payload.picture_url,
        },
        loading: false,
      };
      return uploadResult;
      break;
    case CREATE_RECEIPT:
      const createResult = {
        ...state,
        statusMessage: action.payload,
        receiptState: { ...state.receiptState },
        loading: false,
      };
      return createResult;
      break;
    case GET_ALL_RECEIPTS:
    case GET_RECEIPTS_YEARLY:
    case GET_RECEIPTS:
      const allResult = {
        ...state,
        receipts: [...action.payload.response],
        statusMessage: action.payload.status,
        totalExpense: action.payload.total_amount,
        loading: false,
      };
      return allResult;
      break;
    case TOP_CATEGORIES:
      const categoryResult = {
        ...state,
        topCategories: [...action.payload],
        loading: false,
      };
      return categoryResult;
      break;
    case SEND_EMAIL:
      const emailResult = {
        ...state,
        statusMessage: action.payload.message,
        loading: false,
      };
      return emailResult;
      break;
    case RECEIPT_ERROR:
      const receiptErr = {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
      return receiptErr;
      break;
    case CLEAR_RECEIPT:
      const clearState = {
        ...state,
        receipts: [],
        statusMessage: '',
        errorMessage: '',
        totalExpense: '',
        activeTab: 'dashboard',
        loading: false,
      };
      return clearState;
      break;
    case CLEAR_ERROR:
      const clearErr = {
        ...state,
        errorMessage: '',
      };
      return clearErr;
      break;
    case CHANGE_TAB:
      const tab = {
        ...state,
        activeTab: action.payload,
      };
      return tab;
      break;
    default:
      return state;
  }
};
