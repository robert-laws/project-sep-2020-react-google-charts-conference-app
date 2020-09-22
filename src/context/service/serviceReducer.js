import {
  GET_ALL_SERVICE_DATA,
  FILTER_SERVICE_DATA,
  RESET_SERVICE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_SERVICE_DATA:
      return {
        ...state,
        serviceData: action.payload,
        filteredServiceData: action.payload,
      };

    case FILTER_SERVICE_DATA:
      return {
        ...state,
        filteredServiceData: state.serviceData.filter(
          (data) => data[action.payload.field] === action.payload.selection
        ),
      };

    case RESET_SERVICE:
      return {
        ...state,
        filteredServiceData: state.serviceData,
      };

    default:
      return state;
  }
};
