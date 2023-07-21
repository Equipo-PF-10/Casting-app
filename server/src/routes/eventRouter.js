const { Router } = require("express");
const {
  getEventsHandler,
  createEventHandler,
} = require("../handlers/eventsHandler");

const eventRouter = Router();

eventRouter.get("/", getEventsHandler);
eventRouter.post("/", createEventHandler);

module.exports = eventRouter;
