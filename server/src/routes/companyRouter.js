const { Router } = require("express");
const { searchByName, searchByLocation, createCompany } = require("../handlers/companiesHandler");

const companyRouter = Router();

companyRouter.get("/companies", searchByName);
companyRouter.get("/companies/location", searchByLocation);
companyRouter.post("/companies", createCompany);


module.exports = companyRouter;
