import {
  ERROR,
  REGISTER_MODEL_OR_COMPANY,
  MODAL_LOGIN,
  MODAL_SEARCH_COMPANY,
  MODAL_REFUSE_POSTULATE,
  USER_TYPE,
  GET_EVENT_BY_ID,
  GET_EVENT_BY_ID_EVENT,
  GET_ALL_EVENTS,
  EDIT_EVENT,
  CLOSE_EVENT,
  GET_EVENTS_PREMIUM,
  GET_ALL_COMPANIES,
  GET_COMPANY_BY_ID,
  GET_COMPANY_ID,
  CREATE_POSTULANT,
  GET_ALL_POSTULATIONS,
  GET_ALL_POSTULANTS_CONTACTED_BY_ID,
  REFUSE_POSTULANT_CONTACTED,
  ADD_POSTULANT_LIKE_CONTACTED,
  ADD_HIRED,
  GET_HIRED_BY_COMPANY,
  GET_POSTULANTS_BY_NAME,
  DELETE_POSTULANT_BY_ID,
  DELETE_POSTULANT_FAV,
  GET_TALENT_BY_ID,
  GET_ALL_TALENTS,
  GET_ALL_POSTULANT_FAV,
  GET_POSTULANT_FAV_BY_NAME,
  FILTER_BY_HABILITY,
  FILTER_BY_EVENT_HABILITY,
  FILTER_BY_GENDER,
  FILTER_BY_CONTEXTURE,
  FILTER_BY_UBICATION,
  FILTER_BY_UBICATION_EVENT,
  EDIT_COMPANY,
  CLEAR_DETAIL,
  SEND_ID_OF_CARD,
  CLEAR_ID_OF_CARD,
  GET_NAME_EVENTS,
  IMAGE_URL,
  UPDATE_PLAN,
  SEND_EMAIL_MESSAGE,
  ERROR_POSTULATE,
  MESSAGE_CONTACTED,
  ADD_REVIEW_TALENT,
  GET_EVENT_BY_NAME,
} from "./actions.js";

const initialState = {
  talents: [],
  talentById: {},
  hiredByCompany: {},
  postulatedTalentsByEvent: [],
  postulatedTalentsByEventFiltered: [],
  allEvents: [],
  eventsPremium: {},
  eventsFiltered: [],
  eventDetail: [],
  eventById: {},
  getAllCompanies: [],
  companiesFiltered: [],
  companyDetail: [],
  companyById: {},
  allFavoritePostulants: [],
  allFavoritePostulantsFiltered: [],
  allPostulantsContacted: [],
  hiredTalents: [],
  idCard: "", //id de una card (postulante o evento)
  userType: "", //"1" === "talent", "2" === "company" (se obtiene al logearse)
  messageRegistered: {},
  messageEventEdited: {},
  messageEventClosed: {},
  postulantCreated: {},
  messagePostulantDeleted: {},
  messagePlanUpdated: "",
  modalMailMessage: "",
  hiredOrRefusedMessage: "",
  modalInLogin: false,
  modalInSearchCompany: false,
  modalTalentRefused: false,
  filters: false,
  filtersEvent: false,
  filtersFavoritePostulants: false,
  errorPostulate: {},
  errors: {},
  imageUrl: "",
  reviewTalent: {},
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
    case MODAL_REFUSE_POSTULATE:
      if (payload === "isOpened") {
        return {
          ...state,
          modalTalentRefused: true,
        };
      }
      if (payload === "isClosed") {
        return {
          ...state,
          modalTalentRefused: false,
        };
      }
      break;
    case USER_TYPE:
      return {
        ...state,
        userType: payload,
      };
    case SEND_EMAIL_MESSAGE:
      return {
        ...state,
        modalMailMessage: payload,
      };
    case MESSAGE_CONTACTED:
      return {
        ...state,
        hiredOrRefusedMessage: payload,
      };
    case GET_EVENT_BY_ID:
      return {
        ...state,
        eventDetail: payload,
      };
    case GET_EVENT_BY_ID_EVENT:
      return {
        ...state,
        eventById: payload,
      };
    case GET_COMPANY_BY_ID:
      return {
        ...state,
        companyDetail: payload,
      };
    case GET_COMPANY_ID:
      return {
        ...state,
        companyById: payload,
      };
    case EDIT_COMPANY:
      return {
        ...state,
        companyById: payload,
      };
    case GET_HIRED_BY_COMPANY:
      return {
        ...state,
        hiredByCompany: payload,
      };
    case GET_ALL_EVENTS:
      return {
        ...state,
        eventsFiltered: payload,
        allEvents: payload,
      };
    case GET_EVENTS_PREMIUM:
      return {
        ...state,
        eventsFiltered: payload,
        eventsPremium: payload,
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
    case ADD_POSTULANT_LIKE_CONTACTED:
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
    case CREATE_POSTULANT:
      return {
        ...state,
        postulantCreated: payload,
      };
    case EDIT_EVENT:
      return {
        ...state,
        messageEventEdited: payload,
      };
    case CLOSE_EVENT:
      return {
        ...state,
        //messageEventClosed: payload,
        eventDetail: payload,
      };
    case DELETE_POSTULANT_BY_ID:
      return {
        ...state,
        //messagePostulantDeleted: payload.z,
        postulatedTalentsByEventFiltered: payload,
        postulatedTalentsByEvent: payload,
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
    case EDIT_COMPANY:
      const updateCompany = state.getAllCompanies.map((companies) => {
        if (companies.name === action.payload.name) {
          return {
            ...companies,
            email: action.payload.email,
            name: action.payload.name,
            logo: action.payload.logo,
            country: action.payload.country,
            domain: action.payload.domain,
            password: action.payload.password,
            descriptionShort: action.payload.descriptionShort,
            instagram: action.payload.instagram,
            facebook: action.payload.facebook,
            linkedin: action.payload.linkedin,
            twitter: action.payload.twitter,
            phoneNumber: action.payload.phoneNumber,
          };
        }
        return mascota;
      });

      return {
        ...state,
        mascotas: updateMascotas,
      };

      case FILTER_BY_HABILITY: {
        if (payload === "Todos") {
          return {
            ...state,
            filters: true,
            postulatedTalentsByEventFiltered: [...state.postulatedTalentsByEvent],
          };
        } else {
          const hability = [...state.postulatedTalentsByEventFiltered].filter(
            (talent) => talent.hability.includes(payload)
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
          filtersEvent: true,
          eventsFiltered: [...state.allEvents],
        };
      } else {
        const hability = [...state.eventsFiltered].filter((event) =>
          event.habilityRequired.includes(payload)
        );
        return {
          ...state,
          filtersEvent: true,
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
        const gender = [...state.postulatedTalentsByEventFiltered].filter(
          (talent) => talent.gender.includes(payload)
        );
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: gender,
        };
      }
    }
    case FILTER_BY_CONTEXTURE: {
      if (payload === "Todos") {
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: [...state.postulatedTalentsByEvent],
        };
      } else {
        let contexture = [...state.postulatedTalentsByEventFiltered].filter(
          (talent) => talent.contexture.includes(payload)
        );
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: contexture,
        };
      }
    }
    case FILTER_BY_UBICATION: {
      if (payload === "Todos") {
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: [...state.postulatedTalentsByEvent],
        };
      } else {
        const ubication = [...state.postulatedTalentsByEventFiltered].filter(
          (talent) => talent.ubication.includes(payload)
        );
        return {
          ...state,
          filters: true,
          postulatedTalentsByEventFiltered: ubication,
        };
      }
    }
    case FILTER_BY_UBICATION_EVENT: {
      if (payload === "Todos") {
        return {
          ...state,
          filtersEvent: true,
          eventsFiltered: [...state.allEvents],
        };
      } else {
        const ubication = [...state.eventsFiltered].filter((event) =>
          event.ubication.includes(payload)
        );
        return {
          ...state,
          filtersEvent: true,
          eventsFiltered: ubication,
        };
      }
    }
    case GET_NAME_EVENTS:
      return {
        ...state,
        filtersEvent: true,
        eventsFiltered: payload,
      };
    case GET_EVENT_BY_NAME: {
      if (payload.error) {
        return {
          ...state,
          eventsFiltered: [],
          error: payload.error,
        };
      }
    
      return {
        ...state,
        eventsFiltered: payload,
        error: null,
      };
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
    case IMAGE_URL:
      return {
        ...state,
        imageUrl: payload,
      };
    case UPDATE_PLAN:
      return {
        ...state,
        messagePlanUpdated: payload,
      };
    case GET_ALL_POSTULANT_FAV:
      return {
        ...state,
        allFavoritePostulants: payload,
        allFavoritePostulantsFiltered: payload,
      };
    case DELETE_POSTULANT_FAV:
      return {
        ...state,
        allFavoritePostulants: payload,
        allFavoritePostulantsFiltered: payload,
      };
    case GET_POSTULANT_FAV_BY_NAME:
      return {
        ...state,
        filtersFavoritePostulants: true,
        allFavoritePostulantsFiltered: payload,
      };
    case GET_ALL_POSTULANTS_CONTACTED_BY_ID:
      return {
        ...state,
        allPostulantsContacted: payload,
      };

    case REFUSE_POSTULANT_CONTACTED:
      return {
        ...state,
        allPostulantsContacted: payload,
      };
    case ADD_HIRED:
      return {
        ...state,
        allPostulantsContacted: payload.allContacteds,
        hiredTalents: payload.allHireds,
      };
    case ADD_REVIEW_TALENT:
      return {
        ...state,
        reviewTalent: payload,
      };
    case ERROR_POSTULATE:
      return {
        ...state,
        errorPostulate: payload,
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
