const { Router } = require("express");
const {
  handlerSearchByLocation,
  handlerCreateCompany,
  handlerGetCompanyByEmail,
  handlerGetAllCompanies,
  handlerUpdateCompanyById,
  handlerGetCompanyById,
  handlerDeleteCompanyById,
} = require("../../handlers/companies/companiesHandler");
const companyRouter = Router();
const { updateCompanyConditionPlan } = require('../../handlers/companies/conditionPlanHandler');

//* Esta ruta busca todas las empresas por una ubicación especifica.
companyRouter.get("/location", handlerSearchByLocation);

//* Esta ruta registra una nueva compañia en la base de datos.
companyRouter.post("/register", handlerCreateCompany);

//* Esta ruta busca una compañia por id en la base de datos.
companyRouter.get("/email/:email", handlerGetCompanyByEmail);

//* Esta ruta busca una compañia por id en la base de datos.
companyRouter.get("/:id", handlerGetCompanyById);

//* Esta ruta actualiza una compañia por id en la base de datos.
companyRouter.put("/:id", handlerUpdateCompanyById);

//* Esta ruta elimina por completo una compañia por id en la base de datos.
companyRouter.delete("/:id", handlerDeleteCompanyById);

//* Esta ruta elimina por completo una compañia por id en la base de datos.
companyRouter.get("/", handlerGetAllCompanies);

//* Ruta para actualizar el conditionPlan de la compañía
companyRouter.put('/:companyId/updatePlan', updateCompanyConditionPlan);

module.exports = companyRouter;
