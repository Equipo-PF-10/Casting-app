const { Router } = require("express");
const {
  getTalentsHandler,
  createTalentHandler,
  talentByIdHandler,
} = require("../handlers/talentsHandler");

const talentRouter = Router();

talentRouter.get("/", getTalentsHandler);
talentRouter.get("/:id", talentByIdHandler);
talentRouter.post("/register", createTalentHandler);

module.exports = talentRouter;
