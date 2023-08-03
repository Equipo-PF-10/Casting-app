const { Router } = require("express");
const {
  handlerGetAllApplied,
  handlerCreateApplied,
  handlerGetApplicantById,
  handlerDeleteApplicantById,
  handlerGetApplicantsForEventByFk,
  handlerGetApplicantsByName,
  handlerToContact,
  handlerGetTalentAplications
} = require("../../handlers/talents/postulationsHandler");

const postulationRouter = Router();

//? Esta ruta busca una postulacion por su id.
postulationRouter.get("/:id", handlerGetApplicantById);

//? Esta ruta busca todos los aplicantes a un anuncio.
postulationRouter.get("/event/:fk", handlerGetApplicantsForEventByFk);

//? Esta ruta busca las aplicaciones de un talento.
postulationRouter.get("/talent/:id", handlerGetTalentAplications)

//? Esta ruta acepta una postulacion por el id de la postulación.
postulationRouter.post("/contact", handlerToContact);

//? Esta ruta rechaza una postulacion por el id de la postulación.
postulationRouter.delete("/", handlerDeleteApplicantById);

//? Esta ruta crea una nueva postulación.
postulationRouter.post("/", handlerCreateApplied);

//? Esta ruta busca todos las postulaciones.
postulationRouter.get("/", handlerGetAllApplied);

module.exports = postulationRouter;
