const { Company } = require('../../db');
const updateConditionPlan = async (companyId, newConditionPlan) => {
  try {
    // Verifica que el nuevo plan sea válido (BASIC, PREMIUM o PRO)
    if (!['BASIC', 'PREMIUM', 'PRO'].includes(newConditionPlan)) {
      throw new Error('El plan especificado no es válido.');
    }

    // Busca la compañía por su ID
    const company = await Company.findByPk(companyId);

    // Verifica que se haya encontrado la compañía
    if (!company) {
      throw new Error('No se encontró la compañía con el ID especificado.');
    }
    // Establecer el valor de maxPublications según el tipo de plan
      if (newConditionPlan === 'FREE') {
        company.maxPublications = 3;
      } else if (newConditionPlan === 'PREMIUM') {
        company.maxPublications = 30;
      } else if (newConditionPlan === 'PRO') {
        // Aquí puedes establecer un valor especial para plan PRO si es necesario (por ejemplo, "infinito")
        company.maxPublications = Infinity; // Publicaciones infinitas
      }

    // Actualiza el conditionPlan
    company.conditionPlan = newConditionPlan;
    await company.save();

    return company;
  } catch (error) {
    throw new Error('Error al actualizar el plan de la compañía.');
  }
};

module.exports = { updateConditionPlan };
