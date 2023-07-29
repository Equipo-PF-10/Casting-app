const { Router } = require("express");
const {
  handleCreateFavoriteTalent,
  handleGetFavoritesTalentsById,
  handleDeleteFavoriteTalent,
} = require("../../handlers/companies/talentFavoriteHandler");

const companyRouter = Router();

//? Esta ruta es para encontrar todos los talentos favoritos de una empresa por Id. También se puede buscar por name mediante query.
companyRouter.get("/:id", handleGetFavoritesTalentsById);

//? Esta ruta es para que una empresa pueda agregar talentos favoritos.
companyRouter.post("/", handleCreateFavoriteTalent);

//? Esta ruta es para que una empresa pueda borrar talentos favoritos.
companyRouter.delete("/", handleDeleteFavoriteTalent);

module.exports = companyRouter;
