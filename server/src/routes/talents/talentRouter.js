const { Router } = require("express");
const {
  getTalentsHandler,
  createTalentHandler,
  talentByIdHandler,
  deleteTalentHandler,
  updateTalentHandler,
} = require("../../handlers/talents/talentsHandler");

const talentRouter = Router();

//? Esta ruta registra un nuevo talento.
talentRouter.post("/register", createTalentHandler);

//? Esta ruta obtiene un talento por id.
talentRouter.get("/:id", talentByIdHandler);

//? Esta ruta actualiza el perfil de un talento por id.
talentRouter.put("/:id", updateTalentHandler);

//? Esta ruta elimina el perfil de un talento por id.
talentRouter.delete("/:id", deleteTalentHandler);

//? Esta ruta busca todos los talentos.
talentRouter.get("/", getTalentsHandler);

module.exports = talentRouter;
