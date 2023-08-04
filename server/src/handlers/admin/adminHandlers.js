const {
  getCompaniesByMonth,
  getUsersByMonth,
  getAvailableUsers,
  getTopUsers,
  getTopPost,
  getByCountry,
  getByGender,
  getByRange,
  banUser,
  desbanUser,
  // getIncomes,
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

// Función que trae el top de companies según la cantidad de posts que han realizado.
const handlerTopPosts = async (req, res) => {
  try {
    const topPost = await getTopPost();

    res.status(200).json(topPost);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para obtener los usuarios según su nacionalidad.
const handlerGetByNationality = async (req, res) => {
  try {
    const { userType, country } = req.params;

    const users = await getByCountry(userType, country);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para obtener los ingresos totales según tecnología (PayPal o MercadoPago).
const handlerGetIncomes = async (req, res) => {
  try {
    const { platform } = req.params;

    const incomes = await getIncomes(platform);

    res.status(200).json(incomes);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para obtener usuarios talentos según su género.
const handlerGetByGender = async (req, res) => {
  const { gender } = req.params;

  try {
    const talents = await getByGender(gender);

    res.status(200).json(talents);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para obtener los usuarios registrados dentro de un rango de meses.
const handlerGetByMonthRange = async (req, res) => {
  const { userType, initialMonth, lastMonth } = req.params;

  try {
    const users = await getByRange(userType, initialMonth, lastMonth);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para banear a un usuario (talent o company).
const handlerToBan = async (req, res) => {
  const { userType, id } = req.params;
  try {
    await banUser(userType, id);
    res.status(200).send(`El usuario con ID ${id} ha sido baneado con éxito.`);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Función para desbanear a un usuario (talent o company).
const handlerToDesban = async (req, res) => {
  const { userType, id } = req.params;
  try {
    await desbanUser(userType, id);
    res
      .status(200)
      .send(`El usuario con ID ${id} ha sido desbaneado con éxito.`);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  handlerGetPremiumCompanies,
  handlerGetUserByMonth,
  handlerGetAvailableUsers,
  handlerGetTopUsers,
  handlerTopPosts,
  handlerGetByNationality,
  handlerGetIncomes,
  handlerGetByGender,
  handlerGetByMonthRange,
  handlerToBan,
  handlerToDesban,
};
