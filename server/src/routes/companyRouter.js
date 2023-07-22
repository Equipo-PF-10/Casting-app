const { Router } = require("express");
const { handleSearchByLocation, handleCreateCompany, handleAllCompanies } = require("../handlers/companiesHandler");

const companyRouter = Router();

companyRouter.get("/location", handleSearchByLocation);
companyRouter.get("/", handleAllCompanies);
companyRouter.post("/", handleCreateCompany);

module.exports = companyRouter;
