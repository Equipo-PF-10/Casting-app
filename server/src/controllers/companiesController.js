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

const createCompany = async (company) => {
  return Empresa.create(company);
};

module.exports = {
  allCompanies,
  searchByLocation,
  createCompany,
};
