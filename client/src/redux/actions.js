export const REGISTER_MODEL_OR_COMPANY = "REGISTER_MODEL_OR_COMPANY";
export const MODAL_LOGIN = "MODAL_LOGIN";
export const ERROR = "ERROR";
export const ID_USER = "ID_USER";
export const GET_EVENT_BY_ID="GET_EVENT_BY_ID";
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_ALL_COMPANIES = "GET_ALL_COMPANIES";
export const GET_COMPANY_BY_ID = "GET_COMPANY_BY_ID";
export const GET_ALL_POSTULATIONS = "GET_ALL_POSTULATIONS";
export const GET_TALENT_BY_ID = "GET_TALENT_BY_ID";
export const GET_ALL_TALENTS = "GET_ALL_TALENTS";
import axios from 'axios';


export const register_model = (payload) => {
   let endpoint = "https://casting-app-test-back.onrender.com/talents/register";
   //  let endpoint = "postgres.render.com/casting_app_db";
   //https://casting-app-server.onrender.com/talents/register 
    return async (dispatch) => {
       try {
          const response = await axios.post(endpoint, payload);
          //console.log(response.data);
          return dispatch({
             type: "REGISTER_MODEL_OR_COMPANY",
             payload: response.data
          })
       } catch (error) {
          return dispatch({
             type: "ERROR",
             payload: error.message, //"Ya existe un usuario con el email ingresado."
          })
       }
    };
 }
export const register_company = (payload) => {
   let endpoint = "https://casting-app-test-back.onrender.com/companies/register";
    return async (dispatch) => {
       try {
          const response = await axios.post(endpoint, payload);
          //console.log(response.data);
          return dispatch({
             type: "REGISTER_MODEL_OR_COMPANY",
             payload: response.data
          })
       } catch (error) {
          return dispatch({
             type: "ERROR",
             payload: error.message, //"Ya existe un usuario con el email ingresado."
          })
       }
    };
 }

 export const clean_error = (payload) => {
   return (dispatch) => {
      return dispatch({
        type: "ERROR",
        payload: payload
      })
   }
}

export const clean_message_register = (payload) => {
   return (dispatch) => {
      return dispatch({
        type: "REGISTER_MODEL_OR_COMPANY",
        payload: payload
      })
   }
}

export const modal_login = (payload) => {
   return (dispatch) => {
      return dispatch({
        type: "MODAL_LOGIN",
        payload: payload
      })
   }
}

export const id_user = (payload) => {
   return (dispatch) => {
      return dispatch({
        type: "ID_USER",
        payload: payload
      })
   }
}

export const get_company_by_id = (id) => {
   let endpoint = `https://casting-app-test-back.onrender.com/companies/${id}`; 
   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         console.log("Compañía obtenida de la preticion: " + data);
         return dispatch({
            type: GET_COMPANY_BY_ID,
            payload: data,
         });
      } catch (error) {
         //window.alert(error.message); //"An error has occurred while getting a pokemon by ID!"
         return dispatch({
            type: "ERROR",
            payload: "¡Ha ocurrido un error al obtener un compañia por ID!"
         })
      }
   };
}

export const get_event_by_id = (id) => {
   let endpoint = `https://casting-app-test-back.onrender.com/events/${id}`; 
   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         console.log("evento obtenido de la preticion: " + data);
         return dispatch({
            type: GET_EVENT_BY_ID,
            payload: data,
         });
      } catch (error) {
         //window.alert(error.message); //"An error has occurred while getting a pokemon by ID!"
         return dispatch({
            type: "ERROR",
            payload: "¡Ha ocurrido un error al obtener un evento por ID!"
         })
      }
   };
}
 
export const getAllEvents=() => {
   return async (dispatch) => {
      try {
         const response=await axios.get("https://casting-app-test-back.onrender.com/events");
         return dispatch({type: GET_ALL_EVENTS, payload: response.data})
      } catch (error) {
         return dispatch({
           type: "ERROR",
           payload: "¡Ha ocurrido un error al obtener los eventos!",
         });
      }
   }
}

export const getAllCompanies=() => {
   return async (dispatch) => {
      try {
         const response=await axios.get("https://casting-app-test-back.onrender.com/companies");
         return dispatch({type: GET_ALL_COMPANIES, payload: response.data})
      } catch (error) {
         return dispatch({
           type: "ERROR",
           payload: "¡Ha ocurrido un error al obtener las compañias!",
         });
      }
   }
}

export const get_all_postulations=(pk) => {
   return async (dispatch) => {
      try {
         const response=await axios.get(`https://casting-app-test-back.onrender.com/postulations/${pk}`);
         console.log(response.data);
         return dispatch({type: GET_ALL_POSTULATIONS, payload: response.data})
      } catch (error) {
         return dispatch({
           type: "ERROR",
           payload: "¡Ha ocurrido un error al obtener las postulaciones del evento!",
         });
      }
   }
}

export const get_talent_by_id = (id) => {
   let endpoint = `https://casting-app-test-back.onrender.com/talents/${id}`; 
   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_TALENT_BY_ID,
            payload: data,
         });
      } catch (error) {
         return dispatch({
            type: "ERROR",
            payload: "¡Ha ocurrido un error al obtener un talento por ID!"
         })
      }
   };
}

export const getAllTalents=() => {
   return async (dispatch) => {
      try {
         const response = await axios.get("https://casting-app-test-back.onrender.com/talents/");
         return dispatch({
            type: GET_ALL_TALENTS, 
            payload: response.data})
      } catch (error) {
         return dispatch({
           type: "ERROR",
           payload: "¡Ha ocurrido un error al obtener los talentos!",
         });
      }
   }
}