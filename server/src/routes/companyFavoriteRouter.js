const { Router } = require("express");
const { /*  handleSearchFavoriteCompaniesByTalent, */ handleAddFavoriteCompany } = require("../handlers/companyFavoriteHandler");

const companyRouter = Router();


// companyRouter.get("/:talentsId", handleSearchFavoriteCompaniesByTalent);
companyRouter.post("/", handleAddFavoriteCompany);


module.exports = companyRouter;
