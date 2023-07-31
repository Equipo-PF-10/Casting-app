const {
  updateConditionPlan,
} = require("../../controllers/companies/conditionPlanController");

const updateCompanyConditionPlan = async (req, res) => {
  const { companyId } = req.params;
  const { newConditionPlan } = req.body;

  try {
    if (
      newConditionPlan !== "FREE" &&
      newConditionPlan !== "BASICO" &&
      newConditionPlan !== "PREMIUM"
    ) {
      return res
        .status(400)
        .send(
          "¡Error! Debes proporcionar un modelo de plan válido: FREE | BASICO | PREMIUM"
        );
    }

    const updatedCompany = await updateConditionPlan(
      companyId,
      newConditionPlan
    );
    return res.status(200).json(updatedCompany);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { updateCompanyConditionPlan };
