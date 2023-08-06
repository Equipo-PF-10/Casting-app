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
  try {
    const company = await Company.findByPk(companyId);

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

    const currentDate = new Date();
    const expirationDate = new Date(
      currentDate.setFullYear(currentDate.getFullYear() + 1)
    );
    company.plan = newConditionPlan;
    company.numberPosts = 0;
    company.expirationDate = expirationDate;
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

    // // Verificar si el plan nuevo es "PRUEBA GRATIS"
    // if (newConditionPlan === "PRUEBA GRATIS") {
    //   // Verificar si ya existe una compañía registrada con el plan "PRUEBA GRATIS" y el mismo correo electrónico
    //   const userExists = await checkIfUserExists(company.id, "PRUEBA GRATIS");

    //   if (userExists) {
    //     throw new Error(
    //       "Ya utilizaste este plan. Para mejorar tu experiencia, deberas adquirir un nuevo plan."
    //     );
    //   }
    // }

    return company;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateConditionPlan };

// const { Company } = require("../../db");

// // Función controller que actualiza el plan de la empresa.
// const updateConditionPlan = async (companyId, newConditionPlan) => {
//   try {
//     const company = await Company.findByPk(companyId);

//     if (!company) {
//       throw new Error("No se encontró la compañía con el ID especificado.");
//     }

//     company.plan = newConditionPlan;
//     await company.save();

//     return company;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// module.exports = { updateConditionPlan };
