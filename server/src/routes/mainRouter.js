const { Router } = require("express");
const talentRouter = require("./talents/talentRouter");
const eventRouter = require("./events/eventRouter");
const companyRouter = require("./companies/companyRouter");
const companyFavoriteRouter = require("./talents/companyFavoriteRouter");
const talentsFavoriteRouter = require("./companies/talentsFavoriteRouter");
const postulationRouter = require("./talents/postulationRouter");

const mainRouter = Router();

//* Rutas de Empresas
mainRouter.use("/companies/favorites", talentsFavoriteRouter);
mainRouter.use("/companies", companyRouter);

//? Rutas de Talentos
mainRouter.use("/talents/favorites", companyFavoriteRouter);
mainRouter.use("/talents/applied", postulationRouter);
mainRouter.use("/talents", talentRouter);

//! Rutas de Eventos
mainRouter.use("/events", eventRouter);

module.exports = mainRouter;
