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

// Función controller para obtener usuarios por mes.
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

// Función controller para obtener usuarios según su disponibilidad.
const getAvailableUsers = async (userType) => {
  try {
    if (userType === "talents") {
      const availableTalents = Talent.findAll({
        where: {
          available: true,
        },
      });
      return availableTalents;
    } else if (userType === "companies") {
      const availableCompanies = Company.findAll({
        where: {
          available: true,
        },
      });
      return availableCompanies;
    }

    throw new Error(
      "No se ha encontrado usuarios disponibles. Vuelve a intentarlo."
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función controller para obtener un top de usuarios según sus calificaciones y reviews.
const getTopUsers = async (userType) => {
  try {
    let topUsers;

    if (userType === "talents") {
      topUsers = await Talent.findAll({
        where: {
          reviews: { [Op.ne]: null },
        },
        order: [["reviews", "DESC"]],
        limit: 10,
      });
    } else if (userType === "companies") {
      topUsers = await Company.findAll({
        where: {
          reviews: { [Op.ne]: null },
        },
        order: [["reviews", "DESC"]],
        limit: 10,
      });
    } else {
      throw new Error("Tipo de usuario inválido. Usa 'talents' o 'companies'.");
    }

    return topUsers;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getCompaniesByMonth,
  getUsersByMonth,
  getAvailableUsers,
  getTopUsers,
};
