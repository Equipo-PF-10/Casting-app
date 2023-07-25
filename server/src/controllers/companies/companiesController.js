const { Company, Talento } = require("../../db");

//!Probar el funcionamiento sin esta funcion, me parece que no esta siendo ejecutada en ningun lugar  
// const allCompanies = async (name) => {
  
//   if (name) {
//     const foundAtDb = await Company.findAll({ where: { name } });
//         if (foundAtDb.length === 0) throw new Error(`Company ${name} was not found. Try again.`);
//         return foundAtDb;
//       } else {
//         return await Company.findAll();
//       }
//   };

const searchByLocation = async (country) => {
  //! Falta el try catch
  const response = await Company.findAll({ where: { country: { $like: "%" + country + "%" } } });
  return response;
};

async function getAllCompanies() {
  try {
    const allCompanies = await Company.findAll({
      include: {
        model: Talento,
        attributes: ["name"],
      },
    });
    return allCompanies;
  } catch (error) {
    throw new Error("Error al obtener datos");
  }
}

const createCompany = async (email, password) =>{
  //! Falta el try catch
  const created = await Company.create({
    where: { email },
    defaults: {
      email,
      password,
    }
  });
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
  //allCompanies,
  searchByLocation,
  createCompany,
  updateCompanyById,
  getCompanyById,
  deleteCompanyById,
  getAllCompanies  
};
