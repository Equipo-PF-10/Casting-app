const { Router } = require("express");
const { handlerSearchByLocation, handlerCreateCompany, handlerGetAllCompanies, handlerUpdateCompanyById, handlerGetCompanyById, handlerDeleteCompanyById } = require("../../handlers/companies/companiesHandler");

const companyRouter = Router();
//* Esta ruta busca todas las empresas por una ubicación especifica.
companyRouter.get("/location", handlerSearchByLocation);

//* Esta ruta registra una nueva compañia en la base de datos.
companyRouter.post("/register", handlerCreateCompany);

//* Esta ruta busca una compañia por id en la base de datos.
companyRouter.get("/:id", handlerGetCompanyById);

//* Esta ruta actualiza una compañia por id en la base de datos.
companyRouter.put("/:id", handlerUpdateCompanyById);

//* Esta ruta elimina por completo una compañia por id en la base de datos.
//! debemos modificar para ejecutar el borrado logico
companyRouter.delete("/:id", handlerDeleteCompanyById);

//* Esta ruta elimina por completo una compañia por id en la base de datos.
companyRouter.get("/", handlerGetAllCompanies);

module.exports = companyRouter;
