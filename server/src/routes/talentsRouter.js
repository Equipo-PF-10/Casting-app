const { Router } = require("express");
const talentsHandler = require("../handlers/talentsHandler");

const talentsRouter = Router();

talentsRouter.get("/", talentsHandler);
talentsRouter.get("/register", talentsHandler);

module.exports = talentsRouter;
