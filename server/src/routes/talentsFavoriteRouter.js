const { Router } = require("express");
const { handleAddFavoriteTalent,handleGetFavoriteTalent } = require("../handlers/talentFavoriteHandler");

const companyRouter = Router();

//! Esta ruta es para que una empresa pueda agregar talentos favoritos
companyRouter.post("/", handleAddFavoriteTalent);
//! Esta ruta es para encontrar todos los talentos favoritos de una empresa
companyRouter.get("/", handleGetFavoriteTalent);


module.exports = companyRouter;