const { Router } = require("express");
const { handleCreateFavoriteTalent,handleGetFavoritesTalentsById } = require("../../handlers/companies/talentFavoriteHandler");

const companyRouter = Router();

//? Esta ruta es para que una empresa pueda agregar talentos favoritos
companyRouter.post("/", handleCreateFavoriteTalent);

//? Esta ruta es para encontrar todos los talentos favoritos de una empresa por Id
//! *****************************************************************************************
//! Julio Tiene Pendiente terminar esta ruta*************************************************
//! *****************************************************************************************
companyRouter.get("/", handleGetFavoritesTalentsById);


module.exports = companyRouter;