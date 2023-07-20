const { Router } = require("express");
const {
  getTalentsHandler,
  createTalentHandler,
} = require("../handlers/talentsHandler");

const talentRouter = Router();

talentRouter.get("/", getTalentsHandler);
talentRouter.post("/", createTalentHandler);

module.exports = talentRouter;
