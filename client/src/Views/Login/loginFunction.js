import axios from "axios"

export const login = async (email, password) => {
    try {
        const response = await axios.get("https://deploy-sprint-2-backend.onrender.com/admin/login")
        if(response.data[0].email === email && response.data[0].password === password) {
            return {
                access: true
            }
        } else {
            return {
                access: false
            }
        }
    } catch (error) {
        console.log(error.message);
}}

