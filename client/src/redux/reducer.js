import {
  ERROR,
  REGISTER_MODEL_OR_COMPANY,
  MODAL_LOGIN,
  ID_USER,
  GET_EVENT_BY_ID,
  GET_ALL_EVENTS,
  GET_ALL_COMPANIES,
} from "./actions.js";

const initialState = {
  models: [],
  allEvents: [],
  getAllCompanies: [],
  companiesFiltered: [],
  eventsFiltered: [],
  eventDetail: {},
  idUser: "",
  messageRegistered: {},
  modalInLogin: false,
  errors: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_MODEL_OR_COMPANY:
      return {
        ...state,
        messageRegistered: payload,
      };
    case MODAL_LOGIN:
      if (payload === "isOpened") {
        return {
          ...state,
          modalInLogin: true,
        };
      }
      if (payload === "isClosed") {
        return {
          ...state,
          modalInLogin: false,
        };
      }
      break;

    case ID_USER:
      return {
        ...state,
        idUser: payload,
      };
    case GET_EVENT_BY_ID:
      return {
        ...state,
        eventDetail: payload,
      };
    case GET_ALL_EVENTS:
      return {
        ...state,
        eventsFiltered: payload,
        allEvents: payload,
      };
    case GET_ALL_COMPANIES:
      return {
        ...state,
        companiesFiltered: payload,
        getAllCompanies: payload,
      }
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
