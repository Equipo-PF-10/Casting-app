const { Company, Talent } = require("../../db");
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

// Función controller para obtener talentos por mes.
const getUsersByMonth = async (userType, month) => {
  try {
    const startDate = new Date();
    startDate.setMonth(month - 1);
    startDate.setDate(1);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(startDate);
    endDate.setMonth(month);

    if (userType === "talents") {
      const talents = await Talent.findAll({
        where: {
          creationDate: {
            [Op.gte]: startDate,
            [Op.lt]: endDate,
          },
        },
      });
      return talents;
    } else if (userType === "companies") {
      const companies = await Company.findAll({
        where: {
          creationDate: {
            [Op.gte]: startDate,
            [Op.lt]: endDate,
          },
        },
      });
      return companies;
    }

    throw new Error(
      `No se ha encontrado información sobre ${userType} en el mes indicado.`
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getCompaniesByMonth, getUsersByMonth };
