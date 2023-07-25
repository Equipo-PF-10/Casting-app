import {
  ERROR,
  REGISTER_MODEL_OR_COMPANY,
  MODAL_LOGIN,
  ID_USER,
  USER_TYPE,
  GET_EVENT_BY_ID,
  GET_ALL_EVENTS,
  GET_ALL_COMPANIES,
  GET_COMPANY_BY_ID,
  GET_ALL_ID_POSTULATIONS,
  GET_TALENT_BY_ID,
  GET_ALL_TALENTS,
  FILTER_BY_HABILITY,
  FILTER_BY_GENDER,
  CLEAR_DETAIL
} from "./actions.js";

const initialState = {
  talents: [],
  talentsById: [],
  allEvents: [],
  getAllCompanies: [],
  companiesFiltered: [],
  companyDetail: [],
  eventsFiltered: [],
  eventDetail: {},
  postulationsByEvent: {},
  postulationsByEventFiltered: {},
  idUser: "",
  userType: "", //"1" === "talent", "2" === "company"
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
    case USER_TYPE:
      return {
        ...state,
        userType: payload,
      };
    case GET_EVENT_BY_ID:
      return {
        ...state,
        eventDetail: payload,
      };
    case GET_COMPANY_BY_ID:
      return {
        ...state,
        companyDetail: payload,
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
      };
    case GET_ALL_ID_POSTULATIONS:
      return {
        ...state,
        postulationsByEvent: payload,
        postulationsByEventFiltered: payload,
      };
    case GET_ALL_TALENTS:
      return {
        ...state,
        talents: payload,
      };
    case GET_TALENT_BY_ID:
      return {
        ...state,
        talentsById: [...talentsById, payload],
      };
    case FILTER_BY_HABILITY:
      return {
        ...state,
        talents: payload,
      };
    case FILTER_BY_GENDER:
      return {
        ...state,
        talents: payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        companyDetail: action.payload,
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
