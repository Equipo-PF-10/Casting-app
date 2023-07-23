const { Router } = require("express");
const {
  getTalentsHandler,
  createTalentHandler,
  talentByIdHandler,
  deleteTalentHandler,
  updateTalentHandler,
} = require("../handlers/talentsHandler");

const talentRouter = Router();

talentRouter.get("/", getTalentsHandler);
talentRouter.get("/:id", talentByIdHandler);
talentRouter.post("/register", createTalentHandler);
talentRouter.put("/:id", updateTalentHandler);
talentRouter.delete("/:id", deleteTalentHandler);

module.exports = talentRouter;
