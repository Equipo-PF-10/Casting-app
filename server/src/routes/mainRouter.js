const { Router } = require("express");
const talentRouter = require("./talentRouter");
const eventRouter = require("./eventRouter");
const companyRouter = require("../routes/companyRouter");
const postulationRouter = require("../routes/postulationRouter");
const talentofavoritosRouter = require("./talentosFavoritosRouter");
const mainRouter = Router();

mainRouter.use("/talents", talentRouter);
mainRouter.use("/events", eventRouter);
mainRouter.use("/companies", companyRouter);
mainRouter.use("/postulations", postulationRouter);
mainRouter.use("/favoritesCompany" , talentofavoritosRouter);
module.exports = mainRouter;
