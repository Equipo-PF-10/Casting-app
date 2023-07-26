const { Router } = require("express");
const {
  handlerGetAllApplied,
  handlerCreateApplied,
  handlerGetApplicantById,
  handlerDeleteApplicantById,
  handlerGetApplicantsForEventByFk,
} = require("../../handlers/talents/postulationsHandler");

const postulationRouter = Router();

//? Esta ruta busca una postulacion por su id.
postulationRouter.get("/:id", handlerGetApplicantById);

//? Esta ruta elimina una postulacion por su id.
//!Pendiente definir si vas hacer o no el borrado lógico
postulationRouter.delete("/:id", handlerDeleteApplicantById);

//? Esta ruta busca todos los aplicantes a un anuncio.
postulationRouter.get("/event/:fk", handlerGetApplicantsForEventByFk);

//? Esta ruta crea una nueva postulación.
postulationRouter.post("/", handlerCreateApplied);

//? Esta ruta busca todos las postulaciones.
postulationRouter.get("/", handlerGetAllApplied);

module.exports = postulationRouter;
