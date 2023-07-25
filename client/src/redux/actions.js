export const REGISTER_MODEL_OR_COMPANY = "REGISTER_MODEL_OR_COMPANY";
export const MODAL_LOGIN = "MODAL_LOGIN";
export const ERROR = "ERROR";
export const ID_USER = "ID_USER";
export const USER_TYPE = "USER_TYPE";
export const GET_EVENT_BY_ID="GET_EVENT_BY_ID";
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_ALL_COMPANIES = "GET_ALL_COMPANIES";
export const GET_COMPANY_BY_ID = "GET_COMPANY_BY_ID";
export const GET_ALL_ID_POSTULATIONS = "GET_ALL_ID_POSTULATIONS";
export const GET_TALENT_BY_ID = "GET_TALENT_BY_ID";
export const GET_ALL_TALENTS = "GET_ALL_TALENTS";
export const FILTER_BY_HABILITY = "FILTER_BY_HABILITY";
export const FILTER_BY_GENDER="FILTER_BY_GENDER";
export const CLEAR_DETAIL='CLEAR_DETAIL'
import axios from 'axios';


export const register_model = (payload) => {
   let endpoint = "http://localhost:3001/talents/register";
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
   let endpoint = "http://localhost:3001/companies/register";
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
export const user_type = (payload) => {
   return (dispatch) => {
      return dispatch({
        type: "USER_TYPE",
        payload: payload
      })
   }
}

export const get_company_by_id = (id) => {
   let endpoint = `http://localhost:3001/companies/${id}`; 
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
   let endpoint = `http://localhost:3001/events/${id}`; 
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
         const response = await axios.get("http://localhost:3001/events");
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
         const response=await axios.get("http://localhost:3001/companies");
         return dispatch({type: GET_ALL_COMPANIES, payload: response.data})
      } catch (error) {
         return dispatch({
           type: "ERROR",
           payload: "¡Ha ocurrido un error al obtener las compañias!",
         });
      }
   }
}

export const get_all_id_postulations=(fk) => {
   return async (dispatch) => {
      try {
         const response=await axios.get(`http://localhost:3001/postulations/${fk}`);
         console.log(response.data);
         return dispatch({type: GET_ALL_ID_POSTULATIONS, payload: response.data})
      } catch (error) {
         return dispatch({
           type: "ERROR",
           payload: "¡Ha ocurrido un error al obtener las postulaciones del evento!",
         });
      }
   }
}

export const get_talent_by_id = (id) => {
   let endpoint = `http://localhost:3001/talents/${id}`; 
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

export const getAllTalents= () => {
   let endpoint = "http://localhost:3001/talents/";
   return async (dispatch) => {
      try {
         const response = await axios.get(endpoint);
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

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
  };
};


export const filterByTalent = (hability) => {
   let endpoint = "http://localhost:3001/talents/";
   return async function(dispatch) {
      try {
         const response = await axios.get(endpoint);
         const data = response.data;

         if(hability === "Todos"){
         return dispatch({
            type: FILTER_BY_HABILITY,
            payload: data
         });
      } else {
         const habilities = data.filter((talent) => 
         talent.hability && talent.hability.includes(hability)
         )
      return dispatch({
         type: FILTER_BY_HABILITY,
         payload: habilities
      })
      
      }
      } catch (error) {
         return dispatch({
            type: "ERROR",
            payload: "¡Ha ocurrido un error al filtrar por talentos!",
          });
      }
   }
}
export const filterByGender = (gender) => {
   let endpoint = "http://localhost:3001/talents/";
   return async function(dispatch) {
      try {
         const response = await axios.get(endpoint);
         const data = response.data;

         if(gender === "Todos"){
         return dispatch({
            type: FILTER_BY_HABILITY,
            payload: data
         });
      } else {
         const habilities = data.filter((talent) => 
         talent.gender && talent.gender.includes(gender)
         )
      return dispatch({
         type: FILTER_BY_HABILITY,
         payload: habilities
      })
      
      }
      } catch (error) {
         return dispatch({
            type: "ERROR",
            payload: "¡Ha ocurrido un error al filtrar por talentos!",
          });
      }
   }
}