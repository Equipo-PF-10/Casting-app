const { Company } = require("../../db");
 
  async function getAllCompanies(name) {
    try {
      const allCompanies = await Company.findAll();
      return allCompanies;
    } catch (error) {
      throw new Error("Error al obtener datos");
    }
}

const searchByLocation = async (country) => {
  //! Falta el try catch
  const response = await Company.findAll({ where: { country: { $like: "%" + country + "%" } } });
  return response;
};


const createCompany = async (email, password) =>{
  //! Falta el try catch
  const created = await Company.create({email,password,});
  
  if (!created) throw new Error("La empresa con el correo ingresado ya existe");
  return created;
};   

// Función controller que devuele el talent según el Id recibido por parámetro.
const getCompanyById = async (id) => {
  try {
    const foundCompany = await Company.findByPk(id);

    if (!foundCompany) throw new Error(`El Usuario con ID ${id} no existe`);
    return foundCompany;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que elimina a un empresa de la base de datos.
const deleteCompanyById = async (id) => {
  try {
    const deletedCompany = await Company.destroy({
      where: { id },
    });
    return deletedCompany;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que actualiza los datos del usuario companies.
const updateCompanyById = async (id, updatedData) => {
  try {
    const companyToUpdate = await Company.findByPk(id);

    if (!companyToUpdate) {
      throw new Error(`El Usuario con ID ${id} no existe`);
    }
    // Actualizar los campos de la empresa con los datos proporcionados
    await companyToUpdate.update(updatedData);

    return companyToUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  searchByLocation,
  createCompany,
  updateCompanyById,
  getCompanyById,
  deleteCompanyById,
  getAllCompanies  
};
