import { ERROR, REGISTER_MODEL_OR_COMPANY } from "./actions.js";

const initialState = {
  models: [],
  messageRegistered: {},
  errors: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    case REGISTER_MODEL_OR_COMPANY:
      return {
        ...state,
        messageRegistered: payload,
      };
    
    case ERROR:
      return {
        ...state,
        errors: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
