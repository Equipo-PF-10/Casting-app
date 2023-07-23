const { Empresa } = require("../db");


const allCompanies = async (name) => {
  if (name) {
    const foundAtDb = await Empresa.findAll({ where: { name } });
        if (foundAtDb.length === 0) throw new Error(`Company ${name} was not found. Try again.`);
        return foundAtDb;
      } else {
        return await Empresa.findAll();
      }
  };

const searchByLocation = async (country) => {
  const response = await Empresa.findAll({ where: { country: { $like: "%" + country + "%" } } });
  return response;
};

const createCompanyDB = async (name, email, password) =>
{
  const [companies, created] = await Empresa.findOrCreate({
    where: { email },
    defaults: {
      name,
      email,
      password,
    }
  });
  if (!created) throw new Error("La empresa con el correo ingresado ya existe");
};   

module.exports = {
  allCompanies,
  searchByLocation,
  createCompanyDB,
};
