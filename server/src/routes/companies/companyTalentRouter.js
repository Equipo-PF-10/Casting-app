const { Router } = require("express");
const { handlerFindAdsByStatus } = require("../../handlers/companies/talentContactHandler");

const companyTalentRouter = Router();

//? Ruta para obtener los contactos recibidos por un Talento.
companyTalentRouter.get("/talentContact:talentId", handlerFindAdsByStatus);


module.exports = companyTalentRouter;
