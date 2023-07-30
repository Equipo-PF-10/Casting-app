const { Router } = require("express");
const talentRouter = require("./talents/talentRouter");
const eventRouter = require("./events/eventRouter");
const companyRouter = require("./companies/companyRouter");
const companyFavoriteRouter = require("./talents/companyFavoriteRouter");
const talentsFavoriteRouter = require("./companies/talentsFavoriteRouter");
const postulationRouter = require("./talents/postulationRouter");
const emailRouter = require("./emails/emailRouter");
const talentFormRouter = require("../routes/forms/talentFormRouter");
const companyFormRouter = require("./forms/companyFormRouter");
const eventFormRouter = require("../routes/forms/eventFormRouter");

//const loginSignupRouter = require("./login-sigup/loginSignupRouter");
//const accessApiRouter = require("./access/accessApiRouter");
//const ensureToken = require("../handlers/token/tokenValidator");

const conditionPlanRouter = require("./companies/conditionPlanRouter");


const mainRouter = Router();

//* Rutas de Empresas
mainRouter.use("/companies/favorites", talentsFavoriteRouter);
mainRouter.use("/companies/plan", conditionPlanRouter);
mainRouter.use("/companies", companyRouter);

//? Rutas de Talentos
mainRouter.use("/talents/favorites", companyFavoriteRouter);
mainRouter.use("/talents", talentRouter);

//todo: Rutas de Eventos
mainRouter.use("/events", eventRouter);

//todo: Rutas de Postulaciones
mainRouter.use("/applied", postulationRouter);

//todo: Rutas de Emails
mainRouter.use("/email", emailRouter);

//!Ruta de Formularios
mainRouter.use("/forms/talents", talentFormRouter);
mainRouter.use("/forms/companies", companyFormRouter);
mainRouter.use("/forms/events", eventFormRouter);

module.exports = mainRouter;
