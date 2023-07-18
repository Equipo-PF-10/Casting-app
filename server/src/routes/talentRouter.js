const { Router } = require("express");
const getTalentsHandler = require("../handlers/getTalentsHandler");

const talentRouter = Router();

talentRouter.get("/", getTalentsHandler);
talentRouter.get("/register", getTalentsHandler);

module.exports = talentRouter;
