import axios from "axios";
export const loginControler = async (email, password) => {
  try {
    // busqueda como talento
    const isTalent = (await axios("https://casting-app-test-back.onrender.com/talents")).data;
    let access = false;

    for (const talent of isTalent) {
      if (talent.email === email && talent.password === password) {
        access = 1;
        const obj = { access: access, id: talent.id };
        return obj;
      }
    }
    //busqueda como empresa
    const isCompany = (await axios("https://casting-app-test-back.onrender.com/companies")).data;
    for (const company of isCompany) {
      if (company.email === email && company.password === password) {
        access = 2;
        const obj = { access: access, id: company.id };
        return obj;
      }
    }
    const obj = { access: 0, id: null };
    return obj;
  } catch (error) {
    const obj = {error: error.message}
    return obj;
  }
};
