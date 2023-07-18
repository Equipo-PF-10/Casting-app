export const REGISTER_MODEL = "REGISTER_MODEL";
export const ERROR = "ERROR";

export const register_model = (payload) => {
    let endpoint = `http://localhost:5173/talent/register`; 
    return async (dispatch) => {
       try {
          const response = await axios.post(endpoint, payload);
          return dispatch({
             type: "REGISTER_MODEL",
             payload: response.data
          })
       } catch (error) {
          //window.alert(error.message); 
          return dispatch({
             type: "ERROR",
             payload: "Ha ocurrido un error al registrate."
          })
       }
    };
 }