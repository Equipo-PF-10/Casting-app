const { allCompanies, searchByLocation, createCompany } = require("../controllers/companiesController");

const handleAllCompanies = async (req, res) => {
  
  try {
    if (req.query){
      const {name} = req.query;
      const companies = await allCompanies(name);
      res.status(200).json(companies);
    } else { 
      const companies = await allCompanies();
      res.status(200).json(companies);
    }    
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las empresas de la base de datos: " + error });
  }
};

const handleSearchByLocation = async (req, res) => {
  try {
    const companies = await searchByLocation(req.query.country);
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar empresas por ubicación: " + error });
  }
};

const handleCreateCompany = async (req, res) => {
  try {
    const company = req.body;
    const newCompany = await createCompany(company);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la empresa: " + error });
  }
};

module.exports = {
  handleAllCompanies,
  handleSearchByLocation,
  handleCreateCompany,
};
