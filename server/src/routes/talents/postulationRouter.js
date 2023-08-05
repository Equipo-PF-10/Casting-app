const { Router } = require("express");
const {
  handlerGetAllApplied,
  handlerCreateApplied,
  handlerGetApplicantById,
  handlerDeleteApplicantById,
  handlerGetApplicantsForEventByFk,
  handlerGetApplicantsByName,
  handlerToContact,
  handlerGetTalentAplications,
  handlerHireTalent,
  handlerGetAllHiredTalents,
  handlerGetAllContactedTalents,
  handlerGetCompanyContacted,
  handlerGetCompanyHired,
} = require("../../handlers/talents/postulationsHandler");

const postulationRouter = Router();

//? Esta ruta es para obtener todos los talentos contratados por una empresa.
postulationRouter.get("/hired/:idCompany", handlerGetCompanyHired);

//? Esta ruta es para obtener todos los talentos contratados.
postulationRouter.get("/hired", handlerGetAllHiredTalents);

//? Esta ruta es para agregar a un postulante como CONTRATADO.
postulationRouter.post("/hire", handlerHireTalent);

//? Esta ruta es para traer todos los contactados por una empresa en particular.
postulationRouter.get("/contacted/:idCompany", handlerGetCompanyContacted);

//? Esta ruta es para agregar a un postulante como CONTACTADO.
postulationRouter.get("/contacted", handlerGetAllContactedTalents);

//? Esta ruta es para agregar un postulante como CONTACTADO.
postulationRouter.post("/contact", handlerToContact);

//? Esta ruta busca todos los aplicantes a un anuncio.
postulationRouter.get("/event/:fk", handlerGetApplicantsForEventByFk);

//? Esta ruta busca las aplicaciones de un talento.
postulationRouter.get("/talent/:id", handlerGetTalentAplications);

//? Esta ruta busca todos los postulantes de un evento por su nombre y id del evento.
postulationRouter.get("/name/:EventId", handlerGetApplicantsByName);

//? Esta ruta busca una postulacion por su id.
postulationRouter.get("/:id", handlerGetApplicantById);

//? Esta ruta busca una postulacion por su id.
postulationRouter.get("/:id", handlerGetApplicantById);

//? Esta ruta rechaza una postulacion por el id de la postulación.
postulationRouter.delete("/", handlerDeleteApplicantById);

//? Esta ruta crea una nueva postulación.
postulationRouter.post("/", handlerCreateApplied);

//? Esta ruta busca todos las postulaciones.
postulationRouter.get("/", handlerGetAllApplied);

module.exports = postulationRouter;
