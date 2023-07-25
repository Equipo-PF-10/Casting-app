const { Router } = require("express");
const { handleSearchByLocation, handleCreateCompany, handlerGetAllCompanies, handleUpdateCompanyById, handleGetCompanyById, handlerDeleteCompanyById } = require("../../handlers/companies/companiesHandler");

const companyRouter = Router();
//* Esta ruta busca todas las empresas por una ubicación especifica.
companyRouter.get("/location", handleSearchByLocation);

//* Esta ruta registra una nueva compañia en la base de datos.
companyRouter.post("/register", handleCreateCompany);

//* Esta ruta busca una compañia por id en la base de datos.
companyRouter.get("/:id", handleGetCompanyById);

//* Esta ruta actualiza una compañia por id en la base de datos.
companyRouter.put("/:id", handleUpdateCompanyById);

//* Esta ruta elimina por completo una compañia por id en la base de datos.
//! debemos modificar para ejecutar el borrado logico
companyRouter.delete("/:id", handlerDeleteCompanyById);

//* Esta ruta elimina por completo una compañia por id en la base de datos.
companyRouter.get("/", handlerGetAllCompanies);

module.exports = companyRouter;
