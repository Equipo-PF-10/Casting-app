const { Company } = require("../../db");

// Función para verificar si un usuario ya está registrado con un determinado plan
async function checkIfUserExists(id, plan) {
  try {
    const company = await Company.findOne({ where: { id, plan } });
    return company !== null;
  } catch (error) {
    throw error;
  }
}

// Función controller que actualiza el plan de la empresa.
const updateConditionPlan = async (companyId, newConditionPlan) => {
  let condition = 0;
  try {
    let company = await Company.findByPk(companyId);
    let plan = false;

    if (!company) {
      throw new Error("No se encontró la compañía con el ID especificado.");
    }

    if (
      newConditionPlan !== "PRUEBA GRATIS" &&
      newConditionPlan !== "BASICO" &&
      newConditionPlan !== "PREMIUM"
    ) {
      throw new Error(
        "El plan que has introducido no es válido. Elige entre PRUEBA GRATIS, PREMIUM, o BASICO."
      );
    }

    if (newConditionPlan === "PRUEBA GRATIS") {
      condition = 2;
      plan = true;
    } else if (newConditionPlan === "BASICO") {
      condition = 20;
    } else if (newConditionPlan === "PREMIUM") {
      condition = 999999999;
    } else {
      condition = 0;
    }

    const currentDate = new Date();
    const expirationDate = new Date(
      currentDate.setFullYear(currentDate.getFullYear() + 1)
    );
    company.plan = newConditionPlan;
    company.numberPosts = 0;
    company.planFree = plan;
    company.expirationDate = expirationDate;
    company.conditionPlan = condition;
    await company.save();

    await Company.update(
      {
        plan: newConditionPlan,
        numberPosts: 0,
        expirationDate: expirationDate,
      },
      {
        where: {
          id: companyId,
        },
      }
    );

    return company;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateConditionPlan };
