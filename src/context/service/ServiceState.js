import React, { useReducer, useCallback } from 'react';
import ServiceContext from './serviceContext';
import serviceReducer from './serviceReducer';
import {
  GET_ALL_SERVICE_DATA,
  FILTER_SERVICE_DATA,
  RESET_SERVICE,
} from '../types';
import Tabletop from 'tabletop';

const ServiceState = ({ children }) => {
  const initialState = {
    serviceData: [],
    filteredServiceData: [],
  };

  const [state, dispatch] = useReducer(serviceReducer, initialState);

  const getAllServiceData = useCallback(async () => {
    try {
      const data = await Tabletop.init({
        key: '1XaaKHwXzAmr4VORHLp8cAL58ehoh4OkOr5qZQc0eD4U',
        simpleSheet: true,
      });

      dispatch({ type: GET_ALL_SERVICE_DATA, payload: data });
    } catch (error) {
      console.log('Error retrieving data: ', error);
    }
  }, [dispatch]);

  const filterServiceData = useCallback(
    async (myFilter) => {
      try {
        dispatch({ type: FILTER_SERVICE_DATA, payload: myFilter });
      } catch (error) {
        console.log('Error retrieving data: ', error);
      }
    },
    [dispatch]
  );

  const resetService = useCallback(() => {
    dispatch({ type: RESET_SERVICE });
  }, [dispatch]);

  return (
    <ServiceContext.Provider
      value={{
        serviceData: state.serviceData,
        filteredServiceData: state.filteredServiceData,
        getAllServiceData,
        filterServiceData,
        resetService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceState;
