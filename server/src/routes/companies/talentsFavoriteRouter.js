const { Router } = require("express");
const {
  handleCreateFavoriteTalent,
  handleGetFavoritesTalentsById,
} = require("../../handlers/companies/talentFavoriteHandler");

const companyRouter = Router();

//? Esta ruta es para que una empresa pueda agregar talentos favoritos
companyRouter.post("/", handleCreateFavoriteTalent);

//? Esta ruta es para encontrar todos los talentos favoritos de una empresa por Id

companyRouter.get("/", handleGetFavoritesTalentsById);

//! Pendiente Una ruta para buscar los favoritos de una compañia por name

module.exports = companyRouter;
