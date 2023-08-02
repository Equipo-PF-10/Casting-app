const { Company } = require("../../db");
const { Op } = require("sequelize");

// Función controller que trae todas las empresas PREMIUM creadas a partir del mes initialMonth.
const getCompaniesByMonth = async (plan, initialMonth) => {
  try {
    const date = new Date();
    date.setMonth(initialMonth - 1);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);

    if (plan === "premium") {
      const premiumCompanies = await Company.findAll({
        where: {
          plan: "PREMIUM",
          creationDate: {
            [Op.gte]: date,
          },
        },
      });
      return premiumCompanies;
    } else if (plan === "prueba-gratis") {
      const freeCompanies = await Company.findAll({
        where: {
          plan: "PRUEBA GRATIS",
          creationDate: {
            [Op.gte]: date,
          },
        },
      });
      return freeCompanies;
    } else if (plan === "basico") {
      const basicCompanies = await Company.findAll({
        where: {
          plan: "BASICO",
          creationDate: {
            [Op.gte]: date,
          },
        },
      });
      return basicCompanies;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getCompaniesByMonth };
