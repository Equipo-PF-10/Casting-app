const { Router } = require("express");
const {
  handlerGetAllAdds,
  handlerCreateAdd,
  handlerGetApplicantById,
  handlerDeleteApplicantById,
  handlerGetAddByFk,
} = require("../../handlers/talents/postulationsHandler");

const postulationRouter = Router();

//? Esta ruta busca un aplicante por su id.
postulationRouter.get("/:id", handlerGetApplicantById);

//? Esta ruta elimina un aplicante por su id.
postulationRouter.delete("/:id", handlerDeleteApplicantById);

//? Esta ruta busca un anuncio por su empresa.
postulationRouter.get("/:fk", handlerGetAddByFk);

//? Esta ruta crea un anuncio.
postulationRouter.post("/", handlerCreateAdd);

//? Esta ruta busca todos los anuncios.
postulationRouter.get("/", handlerGetAllAdds);

module.exports = postulationRouter;
