export const REGISTER_MODEL_OR_COMPANY = "REGISTER_MODEL_OR_COMPANY";
export const ERROR = "ERROR";
import axios from 'axios';


export const register_model = (payload) => {
   let endpoint = "http://localhost:3001/talents/register";
   //  let endpoint = "postgres.render.com/casting_app_db";
   //https://casting-app-server.onrender.com/talents/register 
    return async (dispatch) => {
       try {
          const response = await axios.post(endpoint, payload);
          console.log(response.data);
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
          console.log(response.data);
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
        type: ERROR,
        payload: payload
      })
   }
}

export const clean_message_register = (payload) => {
   return (dispatch) => {
      return dispatch({
        type: REGISTER_MODEL,
        payload: payload
      })
   }
}

