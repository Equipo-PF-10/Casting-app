export const REGISTER_MODEL_OR_COMPANY = "REGISTER_MODEL_OR_COMPANY";
export const MODAL_LOGIN = "MODAL_LOGIN";
export const MODAL_SEARCH_COMPANY = "MODAL_SEARCH_COMPANY";
export const MODAL_REFUSE_POSTULATE = "MODAL_REFUSE_POSTULATE";
export const ERROR = "ERROR";
export const USER_TYPE = "USER_TYPE";
export const GET_EVENT_BY_ID = "GET_EVENT_BY_ID";
export const EDIT_EVENT = "EDIT_EVENT";
export const CLOSE_EVENT = "CLOSE_EVENT";
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_ALL_COMPANIES = "GET_ALL_COMPANIES";
export const GET_COMPANY_BY_ID="GET_COMPANY_BY_ID";
export const GET_COMPANY_ID="GET_COMPANY_ID";
export const CREATE_POSTULANT = "CREATE_POSTULANT";
export const GET_ALL_POSTULATIONS = "GET_ALL_POSTULATIONS";
export const GET_ALL_POSTULANT_FAV = "GET_ALL_POSTULANT_FAV";
export const DELETE_POSTULANT_FAV = "DELETE_POSTULANT_FAV";
export const GET_ALL_POSTULANTS_CONTACTED_BY_ID = "GET_ALL_POSTULANTS_CONTACTED_BY_ID";
export const REFUSE_POSTULANT_CONTACTED = "REFUSE_POSTULANT_CONTACTED";
export const ADD_HIRED="ADD_HIRED";
export const GET_HIRED_BY_COMPANY = "GET_HIRED_BY_COMPANY";
export const GET_POSTULANTS_BY_NAME = "GET_POSTULANTS_BY_NAME";
export const DELETE_POSTULANT_BY_ID = "DELETE_POSTULANT_BY_ID";
export const GET_TALENT_BY_ID = "GET_TALENT_BY_ID";
export const GET_ALL_TALENTS = "GET_ALL_TALENTS";
export const FILTER_BY_HABILITY = "FILTER_BY_HABILITY";
export const FILTER_BY_GENDER = "FILTER_BY_GENDER";
export const FILTER_BY_CONTEXTURE = "FILTER_BY_CONTEXTURE";
export const FILTER_BY_UBICATION = "FILTER_BY_UBICATION";
export const FILTER_BY_UBICATION_EVENT = "FILTER_BY_UBICATION_EVENT";
export const FILTER_BY_EVENT_HABILITY = "FILTER_BY_EVENT_HABILITY";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const SEND_ID_OF_CARD = "SEND_ID_OF_CARD";
export const CLEAR_ID_OF_CARD = "CLEAR_ID_OF_CARD";
export const GET_NAME_EVENTS = "GET_NAME_EVENTS";
export const IMAGE_URL = "IMAGE_URL";
export const UPDATE_PLAN = "UPDATE_PLAN";
export const SEND_EMAIL_MESSAGE = "SEND_EMAIL_MESSAGE";
export const ERROR_POSTULATE="ERROR_POSTULATE";
export const GET_EVENTS_PREMIUM = "GET_EVENTS_PREMIUM";
export const GET_POSTULANT_FAV_BY_NAME = "GET_POSTULANT_FAV_BY_NAME";
import axios from "axios";

export const register_model = (payload) => {
  let endpoint = "http://localhost:3001/talents/register";
  //  let endpoint = "postgres.render.com/casting_app_db";
  //https://casting-app-server.onrender.com/talents/register
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, payload);
      return dispatch({
        type: "REGISTER_MODEL_OR_COMPANY",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "Ya existe un usuario con el email ingresado.",
      });
    }
  };
};

export const register_company = (payload) => {
  let endpoint = "http://localhost:3001/companies/register";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, payload);
      return dispatch({
        type: "REGISTER_MODEL_OR_COMPANY",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "Ya existe un usuario con el email ingresado.",
      });
    }
  };
};

export const clean_error = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "ERROR",
      payload: payload,
    });
  };
};

export const clean_message_register = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "REGISTER_MODEL_OR_COMPANY",
      payload: payload,
    });
  };
};

export const modal_login = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "MODAL_LOGIN",
      payload: payload,
    });
  };
};

export const open_modal_search_compnay = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "MODAL_SEARCH_COMPANY",
      payload: payload,
    });
  };
};

export const close_modal_search_compnay = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "MODAL_SEARCH_COMPANY",
      payload: payload,
    });
  };
};
export const open_modal_refuse_postulate = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "MODAL_REFUSE_POSTULATE",
      payload: payload,
    });
  };
};

export const close_modal_refuse_postulate = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "MODAL_REFUSE_POSTULATE",
      payload: payload,
    });
  };
};

export const user_type = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "USER_TYPE",
      payload: payload,
    });
  };
};

export const get_company_by_id = (id) => {
  let endpoint = `http://localhost:3001/companies/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      //console.log("Compañía obtenida de la preticion: " + data);
      return dispatch({
        type: GET_COMPANY_BY_ID,
        payload: data,
      });
    } catch (error) {
      //window.alert(error.message); //"An error has occurred while getting a pokemon by ID!"
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener un compañia por ID!",
      });
    }
  };
};

export const get_company_id = (id) => {
  let endpoint = `http://localhost:3001/companies/${id}`;
  return async (dispatch) => {
    try {
      const {data}=await axios.get(endpoint);
      //console.log(data + 'soy actions');
      return dispatch({
        type: GET_COMPANY_ID,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener la compañia por ID!",
      });
    }
  };
};

export const get_event_by_id = (id) => {
  let endpoint = `http://localhost:3001/events/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      //console.log("evento obtenido de la preticion: " + data);
      return dispatch({
        type: GET_EVENT_BY_ID,
        payload: data,
      });
    } catch (error) {
      //window.alert(error.message); //"An error has occurred while getting a pokemon by ID!"
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener un evento por ID!",
      });
    }
  };
};

export const getAllEvents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/events");
      return dispatch({ type: GET_ALL_EVENTS, payload: response.data });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener los eventos!",
      });
    }
  };
};

export const getEventsPremium = () => {
  return async (dispatch) => {
    try {
      const response=await axios.get("http://localhost:3001/events/premium");
      console.log(response);
      return dispatch({ type: GET_EVENTS_PREMIUM, payload: response.data });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener los eventos!",
      });
    }
  };
};

export const edit_event_by_id = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:3001/events/${id}`);
      return dispatch({ type: EDIT_EVENT, payload: response.data });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al tratar de editar el evento!",
      });
    }
  };
};

export const close_event_by_id = (id, companyId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/events/${id}`);
      const eventDetail = await axios.get(`http://localhost:3001/events/${companyId}`);
      return dispatch({ type: CLOSE_EVENT, payload: eventDetail.data });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al tratar de cerrar el evento!",
      });
    }
  };
};

export const getAllCompanies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/companies");
      return dispatch({ type: GET_ALL_COMPANIES, payload: response.data });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener las compañias!",
      });
    }
  };
};

export const get_all_postulations = (fk) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/applied/event/${fk}`
      );
      //console.log(response.data);
      return dispatch({ type: GET_ALL_POSTULATIONS, payload: response.data });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload:
          "¡Ha ocurrido un error al obtener las postulaciones del evento!",
      });
    }
  };
};
export const get_postulant_by_name = (fk, name) => {

  let endpoint = `http://localhost:3001/applied/company/${fk}/?name=${name}`;

  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GET_POSTULANTS_BY_NAME,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "No se encontró ningun postulante con el nombre ingresado.",
      });
    }
  };
};


//Deberia retornar un mensaje
export const delete_postulant_by_id = (id_evento, id_talent) => {
  let endpoint = "http://localhost:3001/applied";
  return async (dispatch) => {
    try {
      //const { data } = await axios.delete(endpoint, {EventId: id_evento, TalentId: id_talent}); //(endpoint, {EventId:id_evento, TalentId:id_talent})
      const { data } = await axios.delete(endpoint, {
        data: {EventId: id_evento,TalentId: id_talent}, 
      //const eliminado = await axios.delete(endpoint, {
      //  data: { EventId: id_evento, TalentId: id_talent }
        //headers: {
        //  "Content-Type": "application/json", 
        //},
      });
      const fk = id_evento
      const response = await axios.get(
        `http://localhost:3001/applied/event/${fk}`
      );
      //const z = eliminado.data
      //const postulantes=response.data
      console.log(response);
      //
      return dispatch({
        type: DELETE_POSTULANT_BY_ID,
        payload: response.data
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "Ocurrió un error al intentar rechazar al postulante.",
      });
    }
  };
};

export const clear_message_deleted = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: DELETE_POSTULANT_BY_ID,
      payload: payload,
    });
  };
};

export const create_postulant = (idEvent, idTalent) => {
  let endpoint = "http://localhost:3001/applied";
  console.log("id evento en action: " + idEvent);
  return async (dispatch) => {
    try {
      const { data } =  await axios.post(endpoint, {
          EventId: idEvent, TalentId: idTalent  
      });
        console.log(data)
      return dispatch({
        type: CREATE_POSTULANT,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "Ocurrió un error al intentar postularte.",
      });
    }
  };
};

export const clear_message_postulated = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: CREATE_POSTULANT,
      payload: payload,
    });
  };
};

export const get_talent_by_id = (id) => {
  let endpoint = `http://localhost:3001/talents/${id}`;
  return async (dispatch) => {
    try {
      const {data}=await axios.get(endpoint);
      //console.log(data);
      return dispatch({
        type: GET_TALENT_BY_ID,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener un talento por ID!",
      });
    }
  };
};

export const get_hired_by_company = (id) => {
  let endpoint = `http://localhost:3001/applied/hired/${id}`;
  return async (dispatch) => {
    try {
      const {data}=await axios.get(endpoint);
      //console.log(data);
      return dispatch({
        type: GET_HIRED_BY_COMPANY,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener un talento contratado por la compañia!",
      });
    }
  };
};

export const getAllTalents = () => {
  let endpoint = "http://localhost:3001/talents/";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      return dispatch({
        type: GET_ALL_TALENTS,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener los talentos!",
      });
    }
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
  };
};

export const filterByTalent = (hability) => {
  return async function (dispatch) {
    return dispatch({
      type: FILTER_BY_HABILITY,
      payload: hability,
    });
  };
};

export const filterByEvent = (hability) => {
  return async function (dispatch) {
    return dispatch({
      type: FILTER_BY_EVENT_HABILITY,
      payload: hability,
    });
  };
};

export const filterByGender = (gender) => {
  return (dispatch) => {
    return dispatch({
      type: FILTER_BY_GENDER,
      payload: gender,
    });
  };
};

export const filterByContexture = (contexture) => {
  return (dispatch) => {
    return dispatch({
      type: FILTER_BY_CONTEXTURE,
      payload: contexture,
    });
  };
};
export const filterByUbication = (ubication) => {
  return (dispatch) => {
    return dispatch({
      type: FILTER_BY_UBICATION,
      payload: ubication,
    });
  };
};

export const filterByUbicationEvent = (ubication) => {
  return (dispatch) => {
    return dispatch({
      type: FILTER_BY_UBICATION_EVENT,
      payload: ubication,
    });
  };
};

export const send_id_of_card = (id) => {
  return (dispatch) => {
    return dispatch({
      type: SEND_ID_OF_CARD,
      payload: id,
    });
  };
};

export const clear_id_sent_from_card = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_ID_OF_CARD,
      payload: payload,
    });
  };
};

export const getEventsByName = (name) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        "http://localhost:3001/events/?name=" + name
      );
      //console.log(response + 'estoy en action');
      return dispatch({
        type: GET_NAME_EVENTS,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "Ha ocurrido un error al obtener los eventos por nombre",
      });
    }
  };
};

export const getUrlImage = (url) => {
  return (dispatch) => {
    return dispatch({
      type: IMAGE_URL,
      payload: url,
    });
  };
};

export const message_error_postulate  = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: ERROR_POSTULATE,
      payload: payload,
    });
  };
};

export const get_all_favorite_postulants = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/companies/favorites/${id}`);
      //console.log(response.data);
      return dispatch({ type: GET_ALL_POSTULANT_FAV, payload: response.data });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener los postulantes favoritos!",
      });
    }
  };
};

export const get_favorite_postulant_by_name = (id, name) => {
  return async (dispatch) => {
    try {                    //PROBAR LA RUTA
      let response = await axios.get(`http://localhost:3001/companies/favorites/${id}/?name=${name}`);
      //console.log(response + 'estoy en action');
      return dispatch({
        type: GET_POSTULANT_FAV_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "Ha ocurrido un error al buscar un postulante por su nombre.",
      });
    }
  };
};

export const add_and_delete_favorite_postulant = (id_talent, id_company) => {
  let endpoint = "http://localhost:3001/companies/favorites";
  return async (dispatch) => {
    try {
      const { data } =  await axios.post(endpoint, {
        TalentId: id_talent, CompanyId: id_company  
      });
      const allFavorites = await axios.get(`http://localhost:3001/companies/favorites/${id_company}`);
      return dispatch({
        type: DELETE_POSTULANT_FAV,
        payload: allFavorites.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "Ocurrió un error al intentar rechazar al postulante.",
      });
    }
  };
};

export const send_email_message = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "SEND_EMAIL_MESSAGE",
      payload: payload,
    });
  };
};

export const get_all_postulants_contacted_by_id = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/applied/contacted/${id}`);
      //console.log(response.data);
      return dispatch({ type: GET_ALL_POSTULANTS_CONTACTED_BY_ID, payload: response.data });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al obtener los postulantes contactados!",
      });
    }
  };
};

export const add_hired = (id_talent, id_company, id_event) => {
  let response = {};
  let endpoint = "http://localhost:3001/applied/hire";
  return async (dispatch) => {
    try {
      const hireds = await axios.post(endpoint, {
        TalentId: id_talent, EventId: id_event  
      });
      const allPostulantsContacted = await axios.get(`http://localhost:3001/applied/contacted/${id_company}`);
      
      const allContacteds = allPostulantsContacted.data;
      const allHireds = hireds.data;
      
      console.log(allContacteds, allHireds);
      
      const response = {
        allContacteds,
        allHireds
      }

      return dispatch({
        type: ADD_HIRED,
        payload: response
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al contratar el postulante!",
      });
    }
  };
};

export const refuse_postulant_contacted = (id_talent, id_company, id_event) => {
  console.log(id_talent);
  console.log(id_company);
  console.log(id_event);
  let endpoint = "http://localhost:3001/applied/";
  return async (dispatch) => {
    try {
      // await axios.delete(endpoint, {
      //   TalentId: id_talent, EventId: id_event  
      // });
      await axios.delete(endpoint, {
        data: {TalentId: id_talent, EventId: id_event},
        headers: {
          "Content-Type": "application/json", 
        },
      });
      let allPostulantsContacted = await axios.get(`http://localhost:3001/applied/contacted/${id_company}`);
      return dispatch({
        type: REFUSE_POSTULANT_CONTACTED,
        payload: allPostulantsContacted.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "¡Ha ocurrido un error al rechazar el postulante!",
      });
    }
  };
};

export const update_plan = (id_company, plan) => {
  let endpoint = `http://localhost:3001/payment/plans/${id_company}`;
  return async (dispatch) => {
    try {
      const { data } =  await axios.put(endpoint, {
        "newConditionPlan": plan
      });
      // const allFavorites = await axios.get(`http://localhost:3001/companies/favorites/${id_company}`);
      return dispatch({
        type: UPDATE_PLAN,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: "Ocurrió un error al intentar actualizar el plan.",
      });
    }
  };
};

export const clear_message_plan_updated = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: "UPDATE_PLAN",
      payload: payload,
    });
  };
};