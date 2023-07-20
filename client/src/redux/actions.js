export const REGISTER_MODEL = "REGISTER_MODEL";
export const ERROR = "ERROR";

export const register_model = (payload) => {
    let endpoint = "https://casting-app-server.onrender.com/talents/register"; 
    return async (dispatch) => {
       try {
          const response = await axios.post(endpoint, payload);
          console.log(response.data);
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