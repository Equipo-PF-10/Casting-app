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
} = require("../../handlers/talents/postulationsHandler");

const postulationRouter = Router();

//? Esta ruta es para obtener todos los talentos contratados.
postulationRouter.get("/hired", handlerGetAllHiredTalents);

//? Esta ruta busca todos los aplicantes a un anuncio.
postulationRouter.get("/event/:fk", handlerGetApplicantsForEventByFk);

//? Esta ruta busca las aplicaciones de un talento.
postulationRouter.get("/talent/:id", handlerGetTalentAplications);

//? Esta ruta busca una postulacion por su id.
postulationRouter.get("/:id", handlerGetApplicantById);

//? Esta ruta acepta una postulacion por el id de la postulación.
postulationRouter.post("/contact", handlerToContact);

//? Esta ruta es para contratar un postulante.
postulationRouter.post("/hire", handlerHireTalent);

//? Esta ruta rechaza una postulacion por el id de la postulación.
postulationRouter.delete("/", handlerDeleteApplicantById);

//? Esta ruta crea una nueva postulación.
postulationRouter.post("/", handlerCreateApplied);

//? Esta ruta busca todos las postulaciones.
postulationRouter.get("/", handlerGetAllApplied);

module.exports = postulationRouter;
