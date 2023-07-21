const { Router } = require("express");
const talentRouter = require("./talentRouter");
const companyRouter = require("./companyRouter");


const mainRouter = Router();

mainRouter.use("/talents", talentRouter);
mainRouter.use("/", companyRouter);


module.exports = mainRouter;
