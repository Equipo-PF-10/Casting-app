const { Router } = require("express");
const talentRouter = require("./talentRouter");
const loginRouter = require("./loginRouter");
const companiesRouter = require("./companiesRouter");


const mainRouter = Router();

mainRouter.use("/talent", talentRouter);
mainRouter.use("/companies", companiesRouter);
mainRouter.use("/login", loginRouter);


module.exports = mainRouter;
