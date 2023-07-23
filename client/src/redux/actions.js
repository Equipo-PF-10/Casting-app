export const REGISTER_MODEL_OR_COMPANY = "REGISTER_MODEL_OR_COMPANY";
export const MODAL_LOGIN = "MODAL_LOGIN";
export const ERROR = "ERROR";
export const ID_USER = "ID_USER";
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


