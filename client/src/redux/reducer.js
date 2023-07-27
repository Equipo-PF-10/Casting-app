import {
  ERROR,
  REGISTER_MODEL_OR_COMPANY,
  MODAL_LOGIN,
  MODAL_SEARCH_COMPANY,
  ID_USER,
  USER_TYPE,
  GET_EVENT_BY_ID,
  GET_ALL_EVENTS,
  GET_ALL_COMPANIES,
  GET_COMPANY_BY_ID,
  GET_ALL_POSTULATIONS,
  GET_POSTULANTS_BY_NAME,
  DELETE_POSTULANT_BY_ID,
  GET_TALENT_BY_ID,
  GET_ALL_TALENTS,
  FILTER_BY_HABILITY,
  FILTER_BY_EVENT_HABILITY,
  FILTER_BY_GENDER,
  FILTER_BY_CONTEXTURE,
  FILTER_BY_UBICATION,
  FILTER_BY_UBICATION_EVENT,
  CLEAR_DETAIL,
  SEND_ID_OF_CARD,
  CLEAR_ID_OF_CARD,
  GET_NAME_EVENTS,
} from "./actions.js";

const initialState = {
  talents: [],
  talentById: {},
  postulatedTalentsByEvent: [],
  postulatedTalentsByEventFiltered: [],
  allEvents: [],
  eventsFiltered: [],
  eventDetail: {},
  getAllCompanies: [],
  companiesFiltered: [],
  companyDetail: [],
  idUser: "", //id del usuario al logearse
  idCard: "",  //id de una card (postulante o evento)
  userType: "", //"1" === "talent", "2" === "company" (se obtiene al logearse)
  messageRegistered: {},
  messagePostulantDeleted: "",
  modalInLogin: false,
  modalInSearchCompany: false,
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
    case MODAL_SEARCH_COMPANY:
      if (payload === "isOpened") {
        return {
          ...state,
          modalInSearchCompany: true,
        };
      }
      if (payload === "isClosed") {
        return {
          ...state,
          modalInSearchCompany: false,
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
    case DELETE_POSTULANT_BY_ID:
      return {
        ...state,
        messagePostulantDeleted: payload
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
        const hability = [...state.postulatedTalentsByEventFiltered].filter((talent) =>
          talent.hability.includes(payload)
        );
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: hability,
        };
      }
    }
    case FILTER_BY_EVENT_HABILITY: {
      if (payload === "Todos") {
        return {
          ...state,
          filters: true,
          eventsFiltered: [...state.allEvents],
        };
      } else {
        const hability = [...state.allEvents].filter(
          (event) => event.hability.includes(payload)
        );
        return {
          ...state,
          filters: true,
          eventsFiltered: hability,
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
        const gender = [...state.postulatedTalentsByEventFiltered].filter((talent) =>
          talent.gender.includes(payload)
        );
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: gender,
        };
      }
    }
    case FILTER_BY_CONTEXTURE:{
      if(payload === "Todos"){
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: [...state.postulatedTalentsByEvent]
        }
      } else {
        let contexture = [...state.postulatedTalentsByEventFiltered].filter((talent) => talent.contexture.includes(payload));
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: contexture,
        };
      }
    }
    case FILTER_BY_UBICATION:{
      if(payload === "Todos"){
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: [...state.postulatedTalentsByEvent]
        }
      } else {
        const ubication = [...state.postulatedTalentsByEventFiltered].filter((talent) => talent.ubication.includes(payload))
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: ubication,
        };
      }
    }
    case FILTER_BY_UBICATION_EVENT:{
      if(payload === "Todos"){
        return {
          ...state,
          filters: true,
          eventsFiltered: [...state.allEvents]
        }
      } else {
        const ubication = [...state.allEvents].filter((event) => event.ubication.includes(payload))
        return {
          ...state,
          filters: true,
          eventsFiltered: ubication,
        };
      }
    }
    case SEND_ID_OF_CARD:
      return {
        ...state,
        idCard: payload,
      };
    case CLEAR_ID_OF_CARD:
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
        allEvents: payload
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
