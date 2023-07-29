const { Router } = require("express");
const talentRouter = require("./talents/talentRouter");
const eventRouter = require("./events/eventRouter");
const companyRouter = require("./companies/companyRouter");
const companyFavoriteRouter = require("./talents/companyFavoriteRouter");
const talentsFavoriteRouter = require("./companies/talentsFavoriteRouter");
const postulationRouter = require("./talents/postulationRouter");
const talentFormRouter = require("../routes/forms/talentFormRouter");
// const companyFormRouter = require("../routes/forms/companyFormRouter");
const eventFormRouter = require("../routes/forms/eventFormRouter");
const mainRouter = Router();

//* Rutas de Empresas
mainRouter.use("/companies/favorites", talentsFavoriteRouter);
mainRouter.use("/companies", companyRouter);
mainRouter.use("/:companyId/updatePlan", companyRouter);

//? Rutas de Talentos
mainRouter.use("/talents/favorites", companyFavoriteRouter);
mainRouter.use("/talents", talentRouter);

//todo: Rutas de Eventos
mainRouter.use("/events", eventRouter);

//todo: Rutas de Postulaciones
mainRouter.use("/applied", postulationRouter);

//!Ruta de Formularios
mainRouter.use("/forms/talents", talentFormRouter);
// mainRouter.use("/forms/companies", companyFormRouter);
mainRouter.use("/forms/events", eventFormRouter);
module.exports = mainRouter;
