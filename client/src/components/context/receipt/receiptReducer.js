import {
  CREATE_RECEIPT,
  GET_RECEIPTS,
  GET_ALL_RECEIPTS,
  GET_RECEIPTS_YEARLY,
  CLEAR_RECEIPT,
  // DELETE_RECEIPT,
  RECEIPT_ERROR,
  CLEAR_ERROR,
  CHANGE_TAB,
} from '../actionTypes';

export default (state, action) => {
  switch (action.type) {
    case CREATE_RECEIPT:
      return {
        ...state,
        statusMessage: action.payload,
        loading: false,
      };
    case GET_ALL_RECEIPTS:
    case GET_RECEIPTS_YEARLY:
    case GET_RECEIPTS:
      return {
        ...state,
        receipts: [...action.payload.response],
        statusMessage: action.payload.status,
        totalExpense: action.payload.total_amount,
        loading: false,
      };

    case RECEIPT_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    case CLEAR_RECEIPT:
      return {
        ...state,
        receipts: [],
        statusMessage: '',
        errorMessage: '',
        totalExpense: '',
        activeTab: 'dashboard',
        loading: false,
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
