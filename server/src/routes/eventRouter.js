const { Router } = require("express");
const { getEventsHandler } = require("../handlers/eventsHandler");

const eventRouter = Router();

eventRouter.get("/", getEventsHandler);

module.exports = eventRouter;
