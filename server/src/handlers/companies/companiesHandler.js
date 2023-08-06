const {
  searchByLocation,
  getCompanyByEmail,
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getAllCompanies,
  getCompaniesByPlan,
} = require("../../controllers/companies/companiesController");

// Función para traer todas las empresas.
async function handlerGetAllCompanies(req, res) {
  try {
    const { name } = req.query;
    const allCompanies = await getAllCompanies(name);
    if (name === undefined) {
      if (typeof allCompanies === "string")
        return res.status(400).json({ error: allCompanies });
      return res.status(200).json(allCompanies);
    }
    if (typeof name === "string" && name.length === 0)
      return res
        .status(400)
        .json({ error: "Falta ingresar el nombre de la compañia" });
    else {
      const nameLowerCase = name.toLowerCase();
      const filtered = allCompanies.filter((ele) =>
        ele.name.toLowerCase().includes(nameLowerCase)
      );
      if (filtered.length !== 0) return res.status(200).json(filtered);
      else
        return res.status(400).json({
          error: `No se encontró ninguna empresa con el nombre ${name}`,
        });
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

// Función handler para obtener talento por ID.
const handlerGetCompanyByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const talentByEmail = await getCompanyByEmail(email);
    res.status(200).json(talentByEmail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para buscar empresa por location.
const handlerSearchByLocation = async (req, res) => {
  try {
    const companies = await searchByLocation(req.query.country);
    res.status(200).json(companies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al buscar empresas por ubicación: " + error });
  }
};

// Función para crear una empresa.
const handlerCreateCompany = async (req, res) => {
  const { email, name, image } = req.body;

  if (!email) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  try {
    const created = await createCompany(email, name, image);
    res.status(200).json(created);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función handler para obtener empresa por ID.
const handlerGetCompanyById = async (req, res) => {
  const { id } = req.params;
  try {
    const companies = await getCompanyById(id);
    res.status(200).json(companies);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error al buscar empresas por id: " + error });
  }
};

// Función handler para modificar una empresa mediante su ID.
const handlerUpdateCompanyById = async (req, res) => {
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
    phoneNumber,
  } = req.body;
  console.log(req.body);
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
        phoneNumber,
      };

      await updateCompanyById(id, updatedData);

      res.status(200).send(`La compania ${name} ha sido actualzada`); //json(updatedCompany);
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
      const deletedCompany = await deleteCompanyById(id);
      return res.status(200).json(deletedCompany);
    }
    throw new Error("No existe una empresa con ese ID para eliminar.");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para obtener empresa por plan.
const handlerGetCompanyByPlan = async (req, res) => {
  const { plan } = req.body;

  try {
    const searchByPlan = await getCompaniesByPlan(plan);
    res.status(200).json(searchByPlan);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  handlerGetAllCompanies,
  handlerSearchByLocation,
  handlerCreateCompany,
  handlerUpdateCompanyById,
  handlerGetCompanyById,
  handlerGetCompanyByEmail,
  handlerDeleteCompanyById,
  handlerGetCompanyByPlan,
};
