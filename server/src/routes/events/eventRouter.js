const { Router } = require("express");
const {
  handlerGetAllEvents,
  handlerCreateEvent,
  handlerGetEventById,
  handlerDeleteEventById,
  handlerUpdateEventById,
} = require("../../handlers/events/eventsHandler");

const eventRouter = Router();


//? Esta ruta busca un evento por su id.
eventRouter.get("/:id", handlerGetEventById);

//? Esta ruta actualiza informacion de un evento por su id.
//! Falta poner a funcionar las actualizaciones de los datos de tipo array 
//! Falta poner a funcionar las fecha de actualización 
eventRouter.put("/:id", handlerUpdateEventById);

//? Esta ruta hace el borrado logico de un evento por su id.
//! No llega el company id al borrado logico
//! Pierdo el id del evento, porque me asigna un id de deshabilitación
eventRouter.delete("/:id", handlerDeleteEventById);

//? Esta ruta crea un nuevo evento.
eventRouter.post("/", handlerCreateEvent);

//? Esta ruta busca todos los eventos y tambien busca por nombre del evento.
eventRouter.get("/", handlerGetAllEvents);

module.exports = eventRouter;
