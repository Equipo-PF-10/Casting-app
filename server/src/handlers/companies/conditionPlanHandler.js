const { updateConditionPlan } = require('../../controllers/companies/conditionPlanController');

const updateCompanyConditionPlan = async (req, res) => {
  const { companyId } = req.params;
  const { newConditionPlan } = req.body;

  try {
    // Aquí hace la llamada al controlador para actualizar el plan de la compañía
    const updatedCompany = await updateConditionPlan(companyId, newConditionPlan);
    return res.status(200).json(updatedCompany);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { updateCompanyConditionPlan };
