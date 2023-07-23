const { Router } = require("express");
const { handleSearchByLocation, handleCreateCompany, handleAllCompanies, handleUpdateCompany, handleGetById, deleteCompanyHandler} = require("../handlers/companiesHandler");

const companyRouter = Router();

companyRouter.get("/location", handleSearchByLocation);
companyRouter.get("/", handleAllCompanies);
companyRouter.post("/register", handleCreateCompany);
companyRouter.put("/:id", handleUpdateCompany);
companyRouter.get("/:id", handleGetById);
companyRouter.delete("/:id", deleteCompanyHandler);

module.exports = companyRouter;
