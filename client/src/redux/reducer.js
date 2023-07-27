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
  GET_ALL_POSTULATIONS,
  GET_POSTULANTS_BY_NAME,
  GET_TALENT_BY_ID,
  GET_ALL_TALENTS,
  FILTER_BY_HABILITY,
  FILTER_BY_GENDER,
  FILTER_BY_CONTEXTURE,
  CLEAR_DETAIL,
  SEND_ID_OF_CARD,
  GET_NAME_EVENTS,
} from "./actions.js";

const initialState = {
  talents: [],
  talentById: {},
  postulatedTalentsByEvent: [],
  postulatedTalentsByEventFiltered: [],
  allEvents: [],
  getAllCompanies: [],
  companiesFiltered: [],
  companyDetail: [],
  eventsFiltered: [],
  eventDetail: {},
  idUser: "", //id del usuario al logearse
  idCard: "",  //id de una card (postulante o evento)
  userType: "", //"1" === "talent", "2" === "company"
  messageRegistered: {},
  modalInLogin: false,
  filters: false,
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
    case GET_ALL_POSTULATIONS:
      return {
        ...state,
        postulatedTalentsByEvent: payload,
        postulatedTalentsByEventFiltered: payload,
      };
    case GET_POSTULANTS_BY_NAME:
      return {
        ...state,
        filters: true,
        postulatedTalentsByEventFiltered: payload,
      };
    case GET_ALL_TALENTS:
      return {
        ...state,
        talents: payload,
      };
    case GET_TALENT_BY_ID:
      return {
        ...state,
        talentById: payload,
      };
    case FILTER_BY_HABILITY: {
      if (payload === "Todos") {
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: [...state.postulatedTalentsByEvent],
        };
      } else {
        const hability = [...state.postulatedTalentsByEvent].filter((talent) =>
          talent.hability.includes(payload)
        );
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: hability,
        };
      }
    }
    case FILTER_BY_GENDER: {
      if (payload === "Todos") {
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: [...state.postulatedTalentsByEvent],
        };
      } else {
        const gender = [...state.postulatedTalentsByEvent].filter((talent) =>
          talent.gender.includes(payload)
        );
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: gender,
        };
      }
    }
    case FILTER_BY_CONTEXTURE: {
      let talents = [...state.postulatedTalentsByEvent].filter((talent) =>
        talent.contexture.includes(payload)
      );
      return {
        ...state,
        filters: true,
        postulatedTalentsByEventFiltered: talents,
      };
    }
    case SEND_ID_OF_CARD:
      return {
        ...state,
        idCard: payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        companyDetail: payload,
      };
    case GET_NAME_EVENTS:
      return {
        ...state,
        allEvents: payload,
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
