const { allCompanies, searchByLocation, createCompanyDB } = require("../controllers/companiesController");

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
  const {
    name,
    email,
    password,
  } = req.body;

  if (!email || !password) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  try {
    await createCompanyDB (
      name,
      email,
      password,
      );

    res.status(200).send("Se ha registrado correctamente");
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error.message);
  }
};

module.exports = {
  handleAllCompanies,
  handleSearchByLocation,
  handleCreateCompany,
};
