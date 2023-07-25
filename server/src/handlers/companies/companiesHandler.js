const { searchByLocation, createCompany,  getCompanyById, updateCompanyById, deleteCompanyById, getAllCompanies  } = require("../../controllers/companies/companiesController");

async function handlerGetAllCompanies(req, res) {
  try {
    const allCompanies = await getAllCompanies(); // Llamamos al handler para obtener los datos
    if (!allCompanies.length)
      res.status(401).json({ message: "No hay mascotas en la BD" });
    else
      res.status(200).json(allCompanies);
  } catch (error) {
    res.status(404).json({ message: "Error al obtener datos" });
  }
}

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
    email,
    password,
  } = req.body;

  if (!email || !password) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  try {
    const created= await createCompany (email,password);
    res.status(200).json(created);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función handler para obtener empresa por ID.
const handleGetCompanyById = async (req, res) => {
  const {id} = req.params;
  try {
    const companies = await getCompanyById(id);
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json({ error: "Error al buscar empresas por id: " + error });
  }
};

// Función handler para modificar una empresa mediante su ID.
const handleUpdateCompanyById = async (req, res) => {
  const { id } = req.params;
  const {
    email,
    name,
    logo,   
    country,
    domain,    
    password,
    descriptionShort,      
    instagram,
    facebook,
    linkedin,
    twitter,
    phoneNumber } = req.body;

  try {
    // Verificar primero si el usuario companies existe antes de intentar actualizarlo
    const companies = await getCompanyById(id);

    // Si el usuario companies existe, procedemos a actualizarlo
    if (companies) {
      const updatedData = {
        email,
        name,
        logo,   
        country,
        domain,    
        password,
        descriptionShort,      
        instagram,
        facebook,
        linkedin,
        twitter,
        phoneNumber
      };

      const updatedCompany = await updateCompanyById(id, updatedData);

      res
        .status(200).json(updatedCompany);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para eliminar empresa.
const handlerDeleteCompanyById = async (req, res) => {
  const { id } = req.params;

  try {
    const company = await getCompanyById(id);
    if (company) {
      const deletedCompany = await deleteCompanyById(deletedCompany.id);
      return res.status(200).json(deletedCompany);
    }
    throw new Error("No existe una empresa con ese ID para eliminar.");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerGetAllCompanies,
  handleSearchByLocation,
  handleCreateCompany,
  handleUpdateCompanyById,
  handleGetCompanyById,
  handlerDeleteCompanyById  
};
