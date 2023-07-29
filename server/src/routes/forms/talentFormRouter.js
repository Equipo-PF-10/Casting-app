const { Router } = require("express");
const {handlerUpdateFormTalent} = require("../../handlers/forms/talentFormHandler");

const talentRouter = Router();
talentRouter.patch("/", handlerUpdateFormTalent);
// //? Esta ruta obtiene un talento por id.
// talentRouter.get("/:id", talentByIdHandler);

// //? Esta ruta actualiza el perfil de un talento por id.
// talentRouter.put("/:id", updateTalentHandler);

// //? Esta ruta elimina el perfil de un talento por id.
// talentRouter.delete("/:id", deleteTalentHandler);

// //? Esta ruta busca todos los talentos.
// talentRouter.get("/", getTalentsHandler);

module.exports = talentRouter;
