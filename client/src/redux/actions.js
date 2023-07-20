export const REGISTER_MODEL = "REGISTER_MODEL";
export const ERROR = "ERROR";

export const register_model = (payload) => {
    let endpoint = "http://localhost:5173/talents/register"; 
    return async (dispatch) => {
       try {
          const response = await axios.post(endpoint, payload);
          return dispatch({
             type: "REGISTER_MODEL",
             payload: response.data
          })
       } catch (error) {
          window.alert(error.message); 
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

