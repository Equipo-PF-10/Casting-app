export const REGISTER_MODEL_OR_COMPANY = "REGISTER_MODEL_OR_COMPANY";
export const MODAL_LOGIN = "MODAL_LOGIN";
export const ERROR = "ERROR";
export const ID_USER = "ID_USER";
export const USER_TYPE = "USER_TYPE";
export const GET_EVENT_BY_ID="GET_EVENT_BY_ID";
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const GET_ALL_COMPANIES = "GET_ALL_COMPANIES";
export const GET_COMPANY_BY_ID = "GET_COMPANY_BY_ID";
export const GET_ALL_POSTULATIONS = "GET_ALL_POSTULATIONS";
export const GET_POSTULANTS_BY_NAME = "GET_POSTULANTS_BY_NAME";
export const GET_TALENT_BY_ID = "GET_TALENT_BY_ID";
export const GET_ALL_TALENTS = "GET_ALL_TALENTS";
export const FILTER_BY_HABILITY = "FILTER_BY_HABILITY";
export const FILTER_BY_GENDER="FILTER_BY_GENDER";
export const FILTER_BY_CONTEXTURE="FILTER_BY_CONTEXTURE";
export const FILTER_BY_UBICATION="FILTER_BY_UBICATION";
export const CLEAR_DETAIL='CLEAR_DETAIL';
export const SEND_ID_OF_CARD='SEND_ID_OF_CARD';
export const GET_NAME_EVENTS = "GET_NAME_EVENTS";
import axios from 'axios';


export const register_model = (payload) => {
   let endpoint = "http://localhost:3001/talents/register";
   //  let endpoint = "postgres.render.com/casting_app_db";
   //https://casting-app-server.onrender.com/talents/register 
    return async (dispatch) => {
       try {
          const response = await axios.post(endpoint, payload);
          return dispatch({
             type: "REGISTER_MODEL_OR_COMPANY",
             payload: response.data
          })
       } catch (error) {
          return dispatch({
             type: "ERROR",
             payload: "Ya existe un usuario con el email ingresado."
          })
       }
    };
 }
export const register_company = (payload) => {
   let endpoint = "http://localhost:3001/companies/register";
    return async (dispatch) => {
       try {
          const response = await axios.post(endpoint, payload);
          return dispatch({
             type: "REGISTER_MODEL_OR_COMPANY",
             payload: response.data
          })
       } catch (error) {
          return dispatch({
             type: "ERROR",
             payload: "Ya existe un usuario con el email ingresado."
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

export const get_all_postulations=(fk) => {
   return async (dispatch) => {
      try {
         const response=await axios.get(`http://localhost:3001/applied/event/${fk}`);
         return dispatch({type: GET_ALL_POSTULATIONS, payload: response.data})
      } catch (error) {
         return dispatch({
           type: "ERROR",
           payload: "¡Ha ocurrido un error al obtener las postulaciones del evento!",
         });
      }
   }
}
export const get_postulant_by_name = (fk, name) => {
   let endpoint = `http://localhost:3001/talents/applied/${fk}/?name=${name}`;  
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
            payload: "Postulante no encontrado. Intentelo de nuevo..."
         })
      }
   };
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
   return async function(dispatch) {
      return dispatch({
         type: FILTER_BY_HABILITY,
         payload: hability
      })
   }
} 

export const filterByGender = (gender) => {
   return (dispatch) => {
      return dispatch({
         type: FILTER_BY_GENDER,
         payload: gender
      })
   }
}

export const filterByContexture = (contexture) => {
   return (dispatch) => {
      return dispatch({
        type: FILTER_BY_CONTEXTURE,
        payload: contexture
      })
   }
}
export const filterByUbication = (ubication) => {
   return (dispatch) => {
      return dispatch({
        type: FILTER_BY_UBICATION,
        payload: ubication
      })
   }
}

export const send_id_of_card = (id) => {
   return (dispatch) => {
      return dispatch({
        type: SEND_ID_OF_CARD,
        payload: id
      })
   }
};

export const getEventsByName = (name) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        "http://localhost:3001/events?name=" + name
      );
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