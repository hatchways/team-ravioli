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
