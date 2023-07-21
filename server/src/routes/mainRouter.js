const { Router } = require("express");
const talentRouter = require("./talentRouter");
const eventRouter = require("./eventRouter");

const mainRouter = Router();

mainRouter.use("/talents", talentRouter);
mainRouter.use("/events", eventRouter);

module.exports = mainRouter;
