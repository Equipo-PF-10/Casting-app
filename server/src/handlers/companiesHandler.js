const { allCompanies, searchByLocation, createCompanyDB,  getCompanyById, updateCompany, deleteCompany, getRelacion  } = require("../controllers/companiesController");

async function handleAllCompanies(req, res) {
  try {
    const allEmpresas = await getRelacion(); // Llamamos al handler para obtener los datos
    if (!allEmpresas.length)
      res.status(401).json({ message: "No hay mascotas en la BD" });
    else
      res.status(200).json(allEmpresas);
  } catch (error) {
    res.status(404).json({ message: "Error al obtener datos" });
  }
}

// const handleAllCompanies = async (req, res) => {
  
//   try {
//     if (req.query){
//       const {name} = req.query;
//       const companies = await getRelacion(name);
//       res.status(200).json(companies);
//     } else { 
//       const companies = await getRelacion();
//       res.status(200).json(companies);
//     }    
//   } catch (error) {
//     res.status(500).json({ error: "Error al obtener las empresas de la base de datos: " + error });
//   }
// };

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

// Función handler para obtener empresa por ID.
const handleGetById = async (req, res) => {
  const {id} = req.params;
  try {
    const companies = await getCompanyById(id);
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json({ error: "Error al buscar empresas por id: " + error });
  }
};

// Función handler para modificar una empresa mediante su ID.
const handleUpdateCompany = async (req, res) => {
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

      await updateCompany(id, updatedData);

      res
        .status(200)
        .send(`El usuario con ID ${id} ha sido actualizado con éxito.`);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función handler para eliminar empresa.
const deleteCompanyHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const company = await getCompanyById(id);
    console.log(company);
    if (company) {
      await deleteCompany(company.id);
    }

    res
      .status(200)
      .send(`El usuario con ID ${id} ha sido eliminado con éxito.`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleAllCompanies,
  handleSearchByLocation,
  handleCreateCompany,
  handleUpdateCompany,
  handleGetById,
  deleteCompanyHandler  
};
