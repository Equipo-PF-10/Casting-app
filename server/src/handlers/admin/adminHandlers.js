const {
  getCompaniesByMonth,
} = require("../../controllers/admin/adminControllers");

// Función que trae todas las empresas premium creadas a partir del mes initialMonth.
const handlerGetPremiumCompanies = async (req, res) => {
  const { initialMonth } = req.params;
  try {
    const companies = await getCompaniesByMonth(initialMonth);

    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { handlerGetPremiumCompanies };
