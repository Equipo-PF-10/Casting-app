const { Company, DisableCompany } = require("../../db");

// Función controller para traer todas las empresas.
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

// Función controller para traer todas las empresas por location.
const searchByLocation = async (country) => {
  try {
    const response = await Company.findAll({
      where: { country: { $like: "%" + country + "%" } },
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
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

// Función controller que devuele la compañia según el Id recibido por parámetro.
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
      id: companyToDelete.id,
      name: companyToDelete.name,
      logo: companyToDelete.image,
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

    await companyToUpdate.update(updatedData);

    return companyToUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para obtener las empresas por plan.
const getCompaniesByPlan = async (plan) => {
  try {
    const companies = await Company.findAll({ where: { plan: plan } });

    if (!companies) {
      throw new Error(`No se encontraron empresas con el plan ${plan}`);
    }

    return companies;
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
  getCompaniesByPlan,
};
