const { Router } = require("express");
const { handleGetAllFavoritesCompaniesOfTalent, handleCreateFavoriteCompany } = require("../../handlers/talents/companyFavoriteHandler");

const companyRouter = Router();

//? Esta ruta busca todas las empresas favoritas de un talento (id).
companyRouter.get("/:id", handleGetAllFavoritesCompaniesOfTalent);

//? Esta ruta crea una nueva compañia como favorita.
companyRouter.post("/", handleCreateFavoriteCompany);


module.exports = companyRouter;
