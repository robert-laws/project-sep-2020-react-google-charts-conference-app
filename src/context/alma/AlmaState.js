import React, { useReducer, useCallback } from 'react';
import AlmaContext from './almaContext';
import almaReducer from './almaReducer';
import { GET_ALMA_COLLECTIONS_DATA, GET_ALMA_LOANS_DATA } from '../types';
import Tabletop from 'tabletop';

const AlmaState = ({ children }) => {
  const initialState = {
    almaCollectionsData: [],
    almaLoansData: [],
  };

  const [state, dispatch] = useReducer(almaReducer, initialState);

  const getAlmaCollectionsData = useCallback(async () => {
    try {
      const data = await Tabletop.init({
        key: '1ud8nleVb0Y9uTztblNSm1iiJyRiMXZRXFctK7_FQAzk',
        simpleSheet: true,
      });

      dispatch({ type: GET_ALMA_COLLECTIONS_DATA, payload: data });
    } catch (error) {
      console.log('Error retrieving data: ', error);
    }
  }, [dispatch]);

  const getAlmaLoansData = useCallback(async () => {
    try {
      const data = await Tabletop.init({
        key: '1gz21NcI5Jqj4DKffSK9AU8gXaV5-qS3Onq2XrCbHqmQ',
        simpleSheet: true,
      });

      dispatch({ type: GET_ALMA_LOANS_DATA, payload: data });
    } catch (error) {
      console.log('Error retrieving data: ', error);
    }
  }, [dispatch]);

  return (
    <AlmaContext.Provider
      value={{
        almaCollectionsData: state.almaCollectionsData,
        almaLoansData: state.almaLoansData,
        getAlmaCollectionsData,
        getAlmaLoansData,
      }}
    >
      {children}
    </AlmaContext.Provider>
  );
};

export default AlmaState;
