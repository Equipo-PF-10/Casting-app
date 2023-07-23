import axios from "axios";
export const loginControler = async (email,password) => {
     try {
        // busqueda como talento
        const isTalent = (await axios("http://localhost:3001/talents")).data
        let access = false;
        for (const talent of isTalent) {
            if (talent.email === email && talent.password === password) {
                access=1;
                return {access: access, id: talent.id};
            }
        }
        //busqueda como empresa
        const isCompany = (await axios("http://localhost:3001/companies")).data
        for (const company of isCompany) {
            if (company.email === email && company.password === password) {
                access=2;
                return {access: access, id: company.id};
            }
        }
     } catch (error) {
         return error.message; 
    }
};