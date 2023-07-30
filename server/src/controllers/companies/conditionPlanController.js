const { Company } = require("../../db");

// Función controller que actualiza el plan de la empresa.
const updateConditionPlan = async (companyId, newConditionPlan) => {
  try {
    const company = await Company.findByPk(companyId);

    if (!company) {
      throw new Error("No se encontró la compañía con el ID especificado.");
    }

    company.plan = newConditionPlan;
    await company.save();

    return company;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateConditionPlan };
