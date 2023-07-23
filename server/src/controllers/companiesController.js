const { Empresa, Talento } = require("../db");

  
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

async function getRelacion() {
  try {
    const allEmpresas = await Empresa.findAll({
      include: {
        model: Talento,
        attributes: ["name"],
      },
    });
    return allEmpresas;
  } catch (error) {
    throw new Error("Error al obtener datos");
  }
}

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

// Función controller que devuele el talent según el Id recibido por parámetro.
const getCompanyById = async (id) => {
  try {
    const foundCompanies = await Empresa.findByPk(id);

    if (!foundCompanies) throw new Error(`El Usuario con ID ${id} no existe`);
    return foundCompanies;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que elimina a un empresa de la base de datos.
const deleteCompany = async (id) => {
  try {
    const deletedCompany = await Empresa.destroy({
      where: { id },
    });

    if (deletedCompany === 0) {
      throw new Error("No existe una empresa con ese ID para eliminar.");
    }

    return deletedCompany;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller que actualiza los datos del usuario companies.
const updateCompany = async (id, updatedData) => {
  try {
    const companyToUpdate = await Empresa.findByPk(id);

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
  allCompanies,
  searchByLocation,
  createCompanyDB,
  updateCompany,
  getCompanyById,
  deleteCompany,
  getRelacion
};
