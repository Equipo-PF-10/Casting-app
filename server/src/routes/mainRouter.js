const { Router } = require("express");
const talentRouter = require("./talentRouter");
const eventRouter = require("./eventRouter");
const companyRouter = require("../routes/companyRouter");

const mainRouter = Router();

mainRouter.use("/talents", talentRouter);
mainRouter.use("/events", eventRouter);
mainRouter.use("/companies", companyRouter);


module.exports = mainRouter;
