const { Company, DisableCompany } = require("../../db");

async function getAllCompanies(name) {
  try {
    const allCompanies = await Company.findAll();
    return allCompanies;
  } catch (error) {
    throw new Error("Error al obtener datos");
  }
}

// Función controller que devuele el talent según el Id recibido por parámetro.
const getCompanyByEmail = async (email) => {
  try {
    const foundTalent = await Company.findAll({ where: { email: email } });

    if (!foundTalent)
      throw new Error(`El Usuario con Email ${email} no existe`);
    return foundTalent;
  } catch (error) {
    throw new Error(error.message);
  }
};

const searchByLocation = async (country) => {
  //! Falta el try catch
  const response = await Company.findAll({
    where: { country: { $like: "%" + country + "%" } },
  });
  return response;
};

// Función controller para crear company.
const createCompany = async (email, name, image) => {
  const [company, created] = await Company.findOrCreate({
    where: { email },
    defaults: {
      email,
      name,
      image,
    },
  });

  //if (!created) throw new Error("La empresa con el correo ingresado ya existe");
  return company;
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
    const companyToDelete = await Company.findByPk(id);

    if (!companyToDelete) {
      throw new Error(`La empresa con ID ${id} no existe`);
    }

    await DisableCompany.create({
      name: companyToDelete.name,
      logo: companyToDelete.logo,
      country: companyToDelete.country,
      available: companyToDelete.available,
      domain: companyToDelete.domain,
      descriptionShort: companyToDelete.descriptionShort,
      instagram: companyToDelete.instagram,
      facebook: companyToDelete.facebook,
      linkedin: companyToDelete.linkedin,
      twitter: companyToDelete.twitter,
      password: companyToDelete.password,
      email: companyToDelete.email,
      industryMain: companyToDelete.industryMain,
      description: companyToDelete.description,
      phoneNumber: companyToDelete.phoneNumber,
      plan: companyToDelete.plan,
      conditionPlan: companyToDelete.conditionPlan,
      creationDate: companyToDelete.creationDate,
      expirationDate: companyToDelete.expirationDate,
      reviews: companyToDelete.reviews,
      reviewsCount: companyToDelete.reviewsCount,
    });
    await companyToDelete.destroy();

    return companyToDelete;
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
  getAllCompanies,
  getCompanyByEmail,
};
