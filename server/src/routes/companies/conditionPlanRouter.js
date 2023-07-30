const { Router } = require("express");

const {
  updateCompanyConditionPlan,
} = require("../../handlers/companies/conditionPlanHandler");
const conditionPlanRouter = Router();

//* Ruta para actualizar el conditionPlan de la compañía
conditionPlanRouter.put("/:companyId", updateCompanyConditionPlan);

module.exports = conditionPlanRouter;
