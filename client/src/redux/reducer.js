import { ERROR, REGISTER_MODEL } from "./actions.js";

const initialState = {
  models: [],
  errors: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    /*
    case REGISTER_MODEL:
            return {
                ...state,
                messageRegistered: payload
            }
    */
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
