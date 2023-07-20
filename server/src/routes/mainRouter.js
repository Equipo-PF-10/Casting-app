const { Router } = require("express");
const talentsRouter = require("./talentsRouter");
const eventsRouter = require("./eventsRouter");
const companyRouter = require("./companyRouter");
const loginRouter = require("./loginRouter");

const mainRouter = Router();

// mainRouter.use("/talent", talentsRouter);
// mainRouter.use("/events", eventsRouter);
mainRouter.use("/", companyRouter);
mainRouter.use("/", loginRouter);

module.exports = mainRouter;
