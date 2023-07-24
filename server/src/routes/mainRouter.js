const { Router } = require("express");
const talentRouter = require("./talentRouter");
const eventRouter = require("./eventRouter");
const companyRouter = require("../routes/companyRouter");

const companyFavoriteRouter = require("../routes/companyFavoriteRouter");
const talentsFavoriteRouter = require("../routes/talentsFavoriteRouter");


const postulationRouter = require("../routes/postulationRouter");
const talentofavoritosRouter = require("./talentosFavoritosRouter");

const mainRouter = Router();

mainRouter.use("/talents", talentRouter);
mainRouter.use("/events", eventRouter);
mainRouter.use("/companies/favorites", talentsFavoriteRouter);
mainRouter.use("/companies", companyRouter);

mainRouter.use("/talents/favorites", companyFavoriteRouter);
//! Esta ruta es para que una empresa pueda agregar talentos favoritos
//! Esta ruta es para encontrar todos los talentos favoritos de una empresa


mainRouter.use("/postulations", postulationRouter);
mainRouter.use("/favorites/Company" , talentofavoritosRouter);

module.exports = mainRouter;
