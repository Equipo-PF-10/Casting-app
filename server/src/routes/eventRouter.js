const { Router } = require("express");
const { getEventsHandler } = require("../handlers/eventsHandler");

const eventRouter = Router();

eventRouter.get("/", getEventsHandler);
// FALTA CAMBIAR COSAS DEL MAIN ROUTER
module.exports = talentRouter;
