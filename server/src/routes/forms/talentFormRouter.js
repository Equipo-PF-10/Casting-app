const { Router } = require("express");
const {
  handlerUpdateFormTalent,
} = require("../../handlers/forms/talentFormHandler");

const talentRouter = Router();
//? Esta ruta actualiza los datos del formulario de talento.
talentRouter.patch("/", handlerUpdateFormTalent);

module.exports = talentRouter;
