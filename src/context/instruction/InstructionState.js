import React, { useReducer, useCallback } from 'react';
import InstructionContext from './instructionContext';
import instructionReducer from './instructionReducer';
import {
  GET_ALL_INSTRUCTION_DATA,
  FILTER_INSTRUCTION_DATA,
  RESET_INSTRUCTION,
} from '../types';
import Tabletop from 'tabletop';

const InstructionState = ({ children }) => {
  const initialState = {
    instructionData: [],
    filteredInstructionData: [],
  };

  const [state, dispatch] = useReducer(instructionReducer, initialState);

  const getAllInstructionData = useCallback(async () => {
    try {
      const data = await Tabletop.init({
        key: '1FEezbmJEuJ-K4Pk1XJeALsvKh1lbuMtfEiVoLz9pbGM',
        simpleSheet: true,
      });

      dispatch({ type: GET_ALL_INSTRUCTION_DATA, payload: data });
    } catch (error) {
      console.log('Error retrieving data: ', error);
    }
  }, [dispatch]);

  const filterInstructionData = useCallback(
    async (myFilter) => {
      try {
        dispatch({ type: FILTER_INSTRUCTION_DATA, payload: myFilter });
      } catch (error) {
        console.log('Error retrieving data: ', error);
      }
    },
    [dispatch]
  );

  const resetInstruction = useCallback(() => {
    dispatch({ type: RESET_INSTRUCTION });
  }, [dispatch]);

  return (
    <InstructionContext.Provider
      value={{
        instructionData: state.instructionData,
        filteredInstructionData: state.filteredInstructionData,
        getAllInstructionData,
        filterInstructionData,
        resetInstruction,
      }}
    >
      {children}
    </InstructionContext.Provider>
  );
};

export default InstructionState;
