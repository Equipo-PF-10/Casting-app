const {
  getCompaniesByMonth,
  getUsersByMonth,
  getAvailableUsers,
  getTopUsers,
} = require("../../controllers/admin/adminControllers");

// Función que trae todas las empresas premium creadas a partir del mes initialMonth.
const handlerGetPremiumCompanies = async (req, res) => {
  const { plan, initialMonth } = req.params;
  try {
    const companies = await getCompaniesByMonth(plan, initialMonth);

    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función que trae usuarios creados en un mes determinado.
const handlerGetUserByMonth = async (req, res) => {
  const { userType, month } = req.params;
  try {
    console.log(`TIPO DE USUARIO: ${userType} - TIPO DE MES: ${month}`);
    const users = await getUsersByMonth(userType, month);
    console.log(`USERS: ${users}`);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función que trae todos los usuarios con disponibilidad.
const handlerGetAvailableUsers = async (req, res) => {
  const { userType } = req.params;
  try {
    const availableUsers = await getAvailableUsers(userType);

    res.status(200).json(availableUsers);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función que trae el top de usuarios según sus calificaciones y reviews.
const handlerGetTopUsers = async (req, res) => {
  const { userType } = req.params;
  try {
    const topUsers = await getTopUsers(userType);

    res.status(200).json(topUsers);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  handlerGetPremiumCompanies,
  handlerGetUserByMonth,
  handlerGetAvailableUsers,
  handlerGetTopUsers,
};
