const { Router } = require("express");
const {
  getEventsHandler,
  createEventHandler,
  getById,
  deleteEventHandler,
  updateEventHandler,
} = require("../handlers/eventsHandler");

const eventRouter = Router();

eventRouter.get("/", getEventsHandler);
eventRouter.get("/:id", getById);
eventRouter.post("/", createEventHandler);
eventRouter.put("/:id", updateEventHandler);
eventRouter.delete("/:id", deleteEventHandler);

module.exports = eventRouter;
