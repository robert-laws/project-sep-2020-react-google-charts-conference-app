import {
  GET_ALL_INSTRUCTION_DATA,
  FILTER_INSTRUCTION_DATA,
  RESET_INSTRUCTION,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_INSTRUCTION_DATA:
      return {
        ...state,
        instructionData: action.payload,
        filteredInstructionData: action.payload,
      };

    case FILTER_INSTRUCTION_DATA:
      return {
        ...state,
        filteredInstructionData: state.instructionData.filter(
          (data) => data[action.payload.field] === action.payload.selection
        ),
      };

    case RESET_INSTRUCTION:
      return {
        ...state,
        filteredInstructionData: state.instructionData,
      };

    default:
      return state;
  }
};
