import {
  CREATE_RECEIPT,
  GET_RECEIPTS,
  DELETE_RECEIPT,
  RECEIPT_ERROR,
  CLEAR_ERROR,
  SET_LOADING,
  CHANGE_TAB,
} from '../actionTypes';

export default (state, action) => {
  switch (action.type) {
    case CREATE_RECEIPT:
      return {
        ...state,
        statusMessage: action.payload,
      };

    case GET_RECEIPTS:
      return {
        ...state,
        receipts: action.payload.response,
        statusMessage: action.payload.status,
        totalExpense: action.payload.total_amount,
        loading: false,
      };

    case RECEIPT_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        errorMessage: '',
      };

    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };

    default:
      return state;
  }
};
