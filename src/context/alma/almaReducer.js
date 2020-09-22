import { GET_ALMA_COLLECTIONS_DATA, GET_ALMA_LOANS_DATA } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALMA_COLLECTIONS_DATA:
      return {
        ...state,
        almaCollectionsData: action.payload,
      };

    case GET_ALMA_LOANS_DATA:
      return {
        ...state,
        almaLoansData: action.payload,
      };

    default:
      return state;
  }
};
