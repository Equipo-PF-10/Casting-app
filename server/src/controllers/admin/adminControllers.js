const { Company } = require("../../db");
const { Op } = require("sequelize");

// Función controller que trae todas las empresas PREMIUM creadas a partir del mes initialMonth.
const getCompaniesByMonth = async (initialMonth) => {
  try {
    const date = new Date();
    date.setMonth(initialMonth - 1);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);

    const premiumCompanies = await Company.findAll({
      where: {
        plan: "PREMIUM",
        creationDate: {
          [Op.gte]: date,
        },
      },
    });

    return premiumCompanies;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getCompaniesByMonth };
