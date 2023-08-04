const { Router } = require("express");
const {
  handlerGetAllEvents,
  handlerCreateEvent,
  handlerGetEventById,
  handlerDeleteEventById,
  handlerUpdateEventById,
  handlerGetPremiumEvents,
  handlerHabilityRequerid
} = require("../../handlers/events/eventsHandler");

const eventRouter = Router();

//? Esta ruta trae todos los eventos x habilidad reqerida.
eventRouter.get("/habilityRequired", handlerHabilityRequerid);

//? Esta ruta trae todos los eventos que pertenecen a empresas PREMIUM.
eventRouter.get("/premium", handlerGetPremiumEvents);

//? Esta ruta busca un evento por su id.
eventRouter.get("/:id", handlerGetEventById);

//? Esta ruta actualiza informacion de un evento por su id.
eventRouter.put("/:id", handlerUpdateEventById);

//? Esta ruta hace el borrado logico de un evento por su id.
eventRouter.delete("/:id", handlerDeleteEventById);

//? Esta ruta crea un nuevo evento.
eventRouter.post("/", handlerCreateEvent);

//? Esta ruta busca todos los eventos y tambien busca por nombre del evento.
eventRouter.get("/", handlerGetAllEvents);

module.exports = eventRouter;
